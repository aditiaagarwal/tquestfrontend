import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from "./Link";
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

import 'mdb-react-ui-kit/dist/css/mdb.min.css';

const Labreport1 = () => {
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
    return <div>Loading...</div>; // Show loading indicator while data is being fetched
  }

  return (
    <>
      <Link />

      <MDBCard style={{ backgroundColor: 'white' }}>
        <MDBCardHeader style={{ fontSize: '30px', fontFamily: 'Sans-serif', fontWeight: 'bold' }}>LAB REPORT</MDBCardHeader>
        <MDBCardBody>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <MDBCardText style={{ fontSize: '25px' }}>User Name: {data[0]['customer_name']}</MDBCardText>
              <MDBCardText style={{ fontSize: '25px' }}>Booking Date: {data[0]['booking_date']}</MDBCardText>
            </div>
            <div>
              <MDBCardText style={{ fontSize: '25px' }}>Collecting Date: {data[0]['collection_date']}</MDBCardText>
              <MDBCardText style={{ fontSize: '25px' }}>Update Time: {data[0]['updated_at']}</MDBCardText>
            </div>
          </div>
        </MDBCardBody>
      </MDBCard>
      {data.map((item, index) => (
        <div key={index} style={{ marginTop: '40px' }}>
          <MDBCard style={{ backgroundColor: '#B9D9EB' }}>
            <MDBCardBody>
              <MDBCardTitle style={{ fontWeight: 'bold', color: 'blue', fontSize: '24px', textAlign: 'center' }}>{item['test_name']}</MDBCardTitle>
              <MDBTable bordered style={{ border: '1px solid black' }}>
                <MDBTableHead>
                  <tr>
                    <th style={{ fontWeight: 'bold', color: 'black', fontSize: '20px', textAlign: 'center' }}>Parameter Name</th>
                    <th style={{ fontWeight: 'bold', color: 'black', fontSize: '20px', textAlign: 'center' }}>Parameter Value</th>
                    <th style={{ fontWeight: 'bold', color: 'black', fontSize: '20px', textAlign: 'center' }}>Lower Bound</th>
                    <th style={{ fontWeight: 'bold', color: 'black', fontSize: '20px', textAlign: 'center' }}>Display Value</th>
                    <th style={{ fontWeight: 'bold', color: 'black', fontSize: '20px', textAlign: 'center' }}>Upper Bound</th>
                    <th style={{ fontWeight: 'bold', color: 'black', fontSize: '20px', textAlign: 'center' }}>Unit</th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody>
                  {item['test_values'].map((value, idx) => (
                    <tr key={idx}>
                      <td style={{ fontWeight: 'bold', color: 'black', fontSize: '20px', textAlign: 'center' }}>{value['parameter_name']}</td>
                      <td style={{ fontWeight: 'bold', color: 'black', fontSize: '20px', textAlign: 'center' }}>{value['parameter_value']}</td>
                      <td style={{ fontWeight: 'bold', color: 'black', fontSize: '20px', textAlign: 'center' }}>{value['lower_bound']}</td>
                      <td style={{ fontWeight: 'bold', color: 'black', fontSize: '20px', textAlign: 'center' }}>{value['display_value']}</td>
                      <td style={{ fontWeight: 'bold', color: 'black', fontSize: '20px', textAlign: 'center' }}>{value['upper_bound']}</td>
                      <td style={{ fontWeight: 'bold', color: 'black', fontSize: '20px', textAlign: 'center' }}>{value['unit']}</td>
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

export default Labreport1;
