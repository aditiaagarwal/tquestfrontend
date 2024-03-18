import React from 'react';
import MyChart from './MyChart.jsx';
import './GraphBar.css';

const GraphBar = () => {
  // Sample data for the charts
  const chartData1 = {
    labels: ['Lower Bound', 'Value', 'Upper Bound'],
    datasetLabel: 'Test Result',
    data: [12, 19, 16],
    lowerBound: 12, // Adjust lower bound as needed
    upperBound: 16, // Adjust upper bound as needed
  };

  // const chartData2 = {
  //   labels: ['Lower Bound', 'Value', 'Upper Bound'],
  //   datasetLabel: 'Test Result',
  //   data: [12, 25, 16], // Value exceeds upper bound
  //   lowerBound: 12, // Adjust lower bound as needed
  //   upperBound: 16, // Adjust upper bound as needed
  // };

  // const chartData3 = {
  //   labels: ['Lower Bound', 'Value', 'Upper Bound'],
  //   datasetLabel: 'Test Result',
  //   data: [12, 19, 25], // Value exceeds upper bound
  //   lowerBound: 12, // Adjust lower bound as needed
  //   upperBound: 25, // Adjust upper bound as needed
  // };

  // const chartData4 = {
  //   labels: ['Lower Bound', 'Value', 'Upper Bound'],
  //   datasetLabel: 'Test Result',
  //   data: [15, 19, 29], // Value exceeds upper bound
  //   lowerBound: 15, // Adjust lower bound as needed
  //   upperBound: 29, // Adjust upper bound as needed
  // };

  // const chartData5 = {
  //   labels: ['Lower Bound', 'Value', 'Upper Bound'],
  //   datasetLabel: 'Test Result',
  //   data: [12, 19, 13], // Value exceeds upper bound
  //   lowerBound: 12, // Adjust lower bound as needed
  //   upperBound: 13, // Adjust upper bound as needed
  // };

  return (
    <div className="container">
      <div className="masterChart">
        <div className="chart-container">
          <MyChart chartData={chartData1} chartWidth={200} chartHeight={100} />
        </div>
      </div>
    </div>
  );
};

export default GraphBar;
