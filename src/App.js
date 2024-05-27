import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Dashboard from './Dashboard';
import Filters from './Filters';

const App = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);

  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    fetchData(); // Fetch initial data when the component mounts
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:5000/insights');
      setFilteredData(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  /*
  const applyFilters = async (filterValues) => {
    try {
      setLoading(true);
      const queryParams = new URLSearchParams(filterValues).toString();
      const response = await axios.get(`http://localhost:5000/insights?${queryParams}`);
      console.log(response);
      setFilteredData(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error applying filters:', error);
      setLoading(false);
    }
  };
  */

  const applyFilters = async (filterValues) => {
    try {
      setLoading(true);
      const queryParams = new URLSearchParams(filterValues).toString();
      const response = await axios.get(`http://localhost:5000/insights?${queryParams}`);
      if (response.data.length === 0) {
        setErrorMessage('No data found for the selected filters.');
      } else {
        setErrorMessage('');
        setFilteredData(response.data);
      }
      setLoading(false);
    } catch (error) {
      console.error('Error applying filters:', error);
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>My Dashboard</h1>
      <Filters applyFilters={applyFilters} />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          <Dashboard data={filteredData} />
        </div>
      )}
    </div>
  );
};

export default App;
