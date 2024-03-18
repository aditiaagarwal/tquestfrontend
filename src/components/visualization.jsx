import React, { useState, useEffect } from 'react';
import Navbar from "./Navbar";
import axios from 'axios';
import GraphBar from "./GraphBar.jsx";
import './visualization.css';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
} from 'mdb-react-ui-kit';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Link from "./Link";
const BarCharts = ({}) => {
  const bookingId = localStorage.getItem('bookingId');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [jokeResponses, setJokeResponses] = useState({});

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

  const processValues = () => {
    const processedData = {};
    for (let i = 0; i < data.length; i++) {
      const test_name = data[i]['test_name'];
      for (let j = 0; j < data[i]['test_values'].length; j++) {
        const parameter_value = data[i]['test_values'][j]['parameter_name'];
        const parameterValue = parseFloat(data[i]['test_values'][j]['parameter_value'], 10);
        const lowerBound = parseFloat(data[i]['test_values'][j]['lower_bound'], 10);
        const upperBound = parseFloat(data[i]['test_values'][j]['upper_bound'], 10);

        if (!isNaN(parameterValue) && !isNaN(lowerBound) && !isNaN(upperBound)) {
          if (!processedData[test_name]) {
            processedData[test_name] = [];
          }
          processedData[test_name].push({
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
      {Object.keys(processedData).map((testName, index) => (
        <div key={index} style={{ marginTop: '40px' }}>
          <MDBCard style={{ backgroundColor: '#B9D9EB' }}>
            <MDBCardBody>
              <MDBCardTitle style={{ fontWeight: 'bold', color: 'blue', fontSize: '24px', textAlign: 'center' }}>{testName}</MDBCardTitle>
              <ul>
                {processedData[testName].map((item, idx) => (
                  <li key={idx}>
                    <br />
                    <Card sx={{ maxWidth: 1000, margin: 'auto', textAlign: 'center', background: 'white' }}>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div" style={{ color: 'black', fontWeight: 'bold', fontFamily: 'Arial', fontSize: '40' }}>
                          {item.parameter_value}
                        </Typography>

                        <div className="graph-center">
                        <GraphBar/>
                        </div>
                      </CardContent>
                    </Card>
                  </li>
                ))}
              </ul>
            </MDBCardBody>
          </MDBCard>
        </div>
      ))}
    </>
  );
};

export default BarCharts;
