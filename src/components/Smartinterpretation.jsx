import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from './Link';
import Navbar from './Navbar';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
} from 'mdb-react-ui-kit';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Smartinterpretation = () => {
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
        const parameterValue = parseInt(data[i]['test_values'][j]['parameter_value'], 10);
        const lowerBound = parseInt(data[i]['test_values'][j]['lower_bound'], 10);
        const upperBound = parseInt(data[i]['test_values'][j]['upper_bound'], 10);

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

  useEffect(() => {
    const fetchJokes = async () => {
      try {
        const jokes = {};
        for (const testName in processedData) {
          for (const item of processedData[testName]) {
            const response = await axios.get(`http://localhost:3000/api/ai?text=for my testname ${testName} my ${item.parameter_value} is ${item.parameterValue} and upper bound is ${item.upperBound} lower bound is ${item.lowerBound} summerize test,potential concersn,health adivisory each in 1 line`);
            jokes[`${testName}_${item.parameter_value}`] = response.data.text;
          }
        }
        setJokeResponses(jokes);
      } catch (error) {
        console.error('Error fetching jokes:', error);
      }
    };

    fetchJokes();
  }, [processedData]); // Only run the effect when processedData changes

  if (loading) {
    return <div>Loading...</div>;
  }

  const breakJokeResponse = (responseText) => {
    return responseText.split('* ').map((point, index) => (
      <li key={index}>{point.trim()}</li>
    ));
  };

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
                    <br></br>
                    <Card sx={{ maxWidth: 1000, margin: 'auto', textAlign: 'center' ,background:'white' }}>
     
              <CardContent>
              <Typography gutterBottom variant="h5" component="div" style={{ color: 'black', fontWeight: 'bold', fontFamily: 'Arial',fontSize:'40' }}>
          {item.parameter_value}
              </Typography>
        <Typography variant="body2" color="text.secondary">
        <Typography gutterBottom variant="h5" component="div" style={{ color: 'black', fontWeight: 'bold', fontFamily: 'Arial',fontSize:'20' }}>
          INTERPRETATION
              </Typography >
                    <ul>
                    <div key={idx} style={{ border: '2px solid #2E2787', borderRadius: '10px', padding: '10px', margin: '10px' }}>
                        <Typography gutterBottom variant="h5" component="div" style={{ color: 'blue', fontFamily: 'Arial', fontSize: '16px' }}>
                          {breakJokeResponse(jokeResponses[`${testName}_${item.parameter_value}`] || 'Loading Interpretation...')}
                        </Typography>
                    </div>

                      
                    </ul>
         
        </Typography>
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

export default Smartinterpretation;
