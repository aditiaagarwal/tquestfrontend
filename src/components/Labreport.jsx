import React, { useState, useEffect } from 'react';
import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardTitle,
  MDBCardSubTitle,
  MDBCardText,
  MDBBtn,
  MDBCardLink,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from 'mdb-react-ui-kit';

import Navbar from './Navbar';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import axios from 'axios';



const Labreport = () => {
  
    var booking_id=localStorage.getItem('bookingId')
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    
  useEffect(() => {
   
    const fetchData = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/api/bookings?booking_id=${booking_id}`);
          const parsedData = response.data.map(item => ({
            ...item,
            test_values: JSON.parse(item.test_values) 
          }));
         
          console.log(response.data);
          console.log(response.data[0]['customer_name'])
          setData(parsedData);
        // data=response.data
        setLoading(false);
        // console.log(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  

    fetchData();
    
  }, []);
  if (loading) {
    return <div>Loading...</div>; // Show loading indicator while data is being fetched
  }
  

  return (
    <>
      <Navbar></Navbar>
     
      <MDBCard style={{ backgroundColor: 'white' }}>
        <MDBCardHeader style={{fontSize:'30px' ,fontFamily:'Sans-serif',fontWeight:'bold'}}>LAB REPORT</MDBCardHeader>
        <MDBCardBody>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <MDBCardText style={{ fontSize: '25px' }}>User Name: {data[0]['customer_name']}</MDBCardText>
              <MDBCardText style={{ fontSize: '25px' }}>Booking Date: {data[0]['booking_date']}</MDBCardText>
            </div>
            <div>
              <MDBCardText style={{ fontSize: '25px' }}>Collecting Date:{data[0]['collection_date']}</MDBCardText>
              <MDBCardText style={{ fontSize: '25px' }}>Update Time: {data[0]['updated_at']}</MDBCardText>
            </div>
          </div>
        </MDBCardBody>
      </MDBCard>
      {data.map((item, index) => (
        <div key={index }  style={{ marginTop: '40px' }} >
          <MDBCard style={{ backgroundColor: '#B9D9EB' }}>
      <MDBCardBody >
      <MDBCardTitle style={{ fontWeight: 'bold', color: 'red', fontSize: '24px', textAlign: 'center' }}>{item['test_name']}</MDBCardTitle>
      <MDBTable>
                <MDBTableHead>
                  <tr>
                    <th style={{ fontWeight: 'bold', color: 'black', fontSize: '20px', textAlign: 'center' }}>Parameter Name</th>
                    <th style={{ fontWeight: 'bold', color: 'black', fontSize: '20px', textAlign: 'center' }}>Parameter Value</th>
                    <th style={{ fontWeight: 'bold', color: 'black', fontSize: '20px', textAlign: 'center' }}>Lower Bound</th>
                    <th style={{ fontWeight: 'bold', color: 'black', fontSize: '20px', textAlign: 'center' }}>Display Value</th>
                    <th style={{ fontWeight: 'bold', color: 'black', fontSize: '20px', textAlign: 'center' }}>Upper Bound</th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody>
                  {item['test_values'].map((value, idx) => (
                    <tr key={idx}>
                      <td style={{ fontWeight: 'bold', color: 'black', fontSize: '20px', textAlign: 'center' }}>{value['parameter_name']}</td>
                      <td style={{ fontWeight: 'bold', color: 'black', fontSize: '20px', textAlign: 'center' }}>{value['parameter_value']}</td>
                      <td style={{fontWeight: 'bold', color: 'black', fontSize: '20px', textAlign: 'center' }}>{value['lower_bound']}</td>
                      <td style={{ fontWeight: 'bold', color: 'black', fontSize: '20px', textAlign: 'center' }}>{value['display_value']}</td>
                      <td style={{ fontWeight: 'bold', color: 'black', fontSize: '20px', textAlign: 'center' }}>{value['upper_bound']}</td>
                    </tr>
                  ))}
                </MDBTableBody>
              </MDBTable>
        
      </MDBCardBody>
    </MDBCard>
        </div>
      ))}


    </>
  );
};

export default Labreport;
