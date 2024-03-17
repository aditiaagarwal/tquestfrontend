import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from './Link';
import Navbar from './Navbar';

const Smartinterpretation = () => {
  const bookingId = localStorage.getItem('bookingId');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://10.81.73.1:3000/api/bookings?booking_id=${bookingId}`);
        const parsedData = response.data.map(item => ({
          ...item,
          test_values: JSON.parse(item.test_values)
        }));
        setData(parsedData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [bookingId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const processValues = () => {
    const processedData = [];
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i]['test_values'].length; j++) {
        const parameter_value=data[i]['test_values']['parameter_name']
        const parameterValue = parseInt(data[i]['test_values'][j]['parameter_value'], 10);
        const lowerBound = parseInt(data[i]['test_values'][j]['lower_bound'], 10);
        const upperBound = parseInt(data[i]['test_values'][j]['upper_bound'], 10);


        if (!isNaN(parameterValue) && !isNaN(lowerBound) && !isNaN(upperBound)) {
         
          processedData.push({
            parameter_value,
            parameterValue,
            lowerBound,
            upperBound,
            
          });
        }
      }
    }
    return processedData;
  };

  const processedData = processValues();

  return (
    <>
      <Navbar />
      <Link />
      {processedData.map((item, index) => (
        <div key={index}>
          Parameter Value: {item.parameterValue}<br />
          Lower Bound: {item.lowerBound}<br />
          Upper Bound: {item.upperBound}<br />
          Status: {item.status}<br />
          <hr />
        </div>
      ))}
    </>
  );
};

export default Smartinterpretation;
