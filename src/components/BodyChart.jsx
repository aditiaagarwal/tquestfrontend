import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';

const MyChart = () => {
  useEffect(() => {
    const labels = Array.from({ length: 7 }, (_, i) => `Label ${i + 1}`);
    const data = {
      labels: labels,
      datasets: [{
        axis: 'y',
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 1
      }]
    };

    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: data,
    });
  }, []);

  return (
    <div>
      <canvas id="myChart" width="400" height="400"></canvas>
    </div>
  );
};

export default MyChart;
