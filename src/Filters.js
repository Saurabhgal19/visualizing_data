import React, { useState } from 'react';

const Filters = ({ applyFilters }) => {
  const [filterValues, setFilterValues] = useState({
    end_year: '',
    country: '',
    topic: '',
    region: '',
    intensity: '',
    likelihood: '',
    relevance: '',
    start_year: '',
    sector: '',
    pestle: '',
    source: '',
    city: '',
    impact: ''
  });

  const handleChange = (key, value) => {
    setFilterValues({ ...filterValues, [key]: value });
  };

  const handleApplyFilters = () => {
    applyFilters(filterValues);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="End Year"
        value={filterValues.end_year}
        onChange={(e) => handleChange('end_year', e.target.value)}
      />
      <input
        type="text"
        placeholder="Region"
        value={filterValues.region}
        onChange={(e) => handleChange('region', e.target.value)}
      />
      <input
        type="text"
        placeholder="City"
        value={filterValues.city}
        onChange={(e) => handleChange('city', e.target.value)}
      />
      <input
        type="text"
        placeholder="Country"
        value={filterValues.country}
        onChange={(e) => handleChange('country', e.target.value)}
      />
      <input
        type="text"
        placeholder="Topic"
        value={filterValues.topic}
        onChange={(e) => handleChange('topic', e.target.value)}
      />
      <input
        type="text"
        placeholder="Sector"
        value={filterValues.sector}
        onChange={(e) => handleChange('sector', e.target.value)}
      />
      <input
        type="text"
        placeholder="PESTLE"
        value={filterValues.pestle}
        onChange={(e) => handleChange('pestle', e.target.value)}
      />
      <input
        type="text"
        placeholder="Source"
        value={filterValues.source}
        onChange={(e) => handleChange('source', e.target.value)}
      />
      <input
        type="text"
        placeholder="SWOT"
        value={filterValues.swot}
        onChange={(e) => handleChange('swot', e.target.value)}
      />
      
      <button onClick={handleApplyFilters}>Apply Filters</button>
    </div>
  );
};

export default Filters;
