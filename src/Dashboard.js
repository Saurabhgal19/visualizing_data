import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar, Pie ,Doughnut} from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const Dashboard = ({ data }) => {
  

  const chartData = {
    labels: data.map(item => item.country),
    datasets: [
      {
        label: 'Intensity',
        data: data.map(item => item.intensity),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Likelihood',
        data: data.map(item => item.likelihood),
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Relevance',
        data: data.map(item => item.relevance),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Year',
        data: data.map(item => item.year),
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1,
      },
      {
        label: 'Topics',
        data: data.map(item => item.topics),
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
      {
        label: 'Region',
        data: data.map(item => item.region),
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
      },
      {
        label: 'City',
        data: data.map(item => item.city),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };


  return (
    <div style={{ width: '75%', margin: '0 auto' }}>
      <h2 style={{textAlign:"center",fontSize: "2rem"}}>Dashboard View</h2>
      <Bar data={chartData} />

    </div>
  );
};

export default Dashboard;
