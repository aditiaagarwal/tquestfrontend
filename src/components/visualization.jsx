import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { Transition } from "react-transition-group"; // Import Transition
import { MDBCard, MDBCardBody, MDBCardTitle } from "mdb-react-ui-kit";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Link from "./Link";
import { BarChart } from "@mui/x-charts/BarChart";

import "./visualization.css";

const BarCharts = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const bookingId = localStorage.getItem("bookingId");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [jokeResponses, setJokeResponses] = useState({});
  const [firstEffectCompleted, setFirstEffectCompleted] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://10.81.73.1:3000/api/bookings?booking_id=${bookingId}`
        );
        const parsedData = response.data.map((item) => ({
          ...item,
          test_values: JSON.parse(item.test_values),
        }));
        setData(parsedData);
        setLoading(false);
        setFirstEffectCompleted(true); // Set flag to true after completing the API call
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [bookingId]);

  const processValues = () => {
    const processedData = {};
    for (let i = 0; i < data.length; i++) {
      const test_name = data[i]["test_name"];
      for (let j = 0; j < data[i]["test_values"].length; j++) {
        const parameter_value = data[i]["test_values"][j]["parameter_name"];
        const parameterValue = parseFloat(
          data[i]["test_values"][j]["parameter_value"],
          10
        );
        const lowerBound = parseFloat(
          data[i]["test_values"][j]["lower_bound"],
          10
        );
        const upperBound = parseFloat(
          data[i]["test_values"][j]["upper_bound"],
          10
        );

        if (
          !isNaN(parameterValue) &&
          !isNaN(lowerBound) &&
          !isNaN(upperBound)
        ) {
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
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <Link />
      {Object.keys(processedData).map((testName, index) => (
        <div key={index} style={{ marginTop: "40px" }}>
          <MDBCard style={{ backgroundColor: "#B9D9EB" }}>
            <MDBCardBody>
              <MDBCardTitle
                style={{
                  fontWeight: "bold",
                  color: "blue",
                  fontSize: "24px",
                  textAlign: "center",
                }}
              >
                {testName}
              </MDBCardTitle>
              <ul>
                {processedData[testName].map((item, idx) => (
                  <li key={idx}>
                    <br />
                    <Card
                      sx={{
                        maxWidth: 1000,
                        margin: "auto",
                        textAlign: "center",
                        background: "white",
                      }}
                    >
                      <CardContent
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <div>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            style={{
                              color: "black",
                              fontWeight: "bold",
                              fontFamily: "Arial",
                              fontSize: "40",
                            }}
                          >
                            {item.parameter_value}
                          </Typography>
                          <BarChart
                            xAxis={[
                              {
                                scaleType: "band",
                                data: [item.parameter_value],
                              },
                            ]}
                            series={[
                              { data: [item.lowerBound] },
                              { data: [item.parameterValue] },
                              { data: [item.upperBound] },
                            ]}
                            width={500}
                            height={300}
                          />
                        </div>
                        <Button
                          variant="outlined"
                          onClick={handleClickOpen}
                          style={{
                            backgroundColor: "#7CB9E8",
                            width: "300px",
                            color: "black",
                          }}
                        >
                          INFER RESULTS
                        </Button>
                        <Dialog
                          open={open}
                          onClose={handleClose}
                          aria-labelledby="alert-dialog-title"
                          aria-describedby="alert-dialog-description"
                        >
                          <DialogTitle id="alert-dialog-title">
                            {"THIS IS WHAT YOUR GRAPH SHOWS"}
                          </DialogTitle>
                          <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                              {item.parameterValue < item.lowerBound
                                ? "Your value is less than the desired value. Please see Smart Interpretation for outcome."
                                : item.parameterValue > item.upperBound
                                ? "Your value is higher than the desired value. Please refer to Smart Interpretation."
                                : "Your value is within the desired range."}
                            </DialogContentText>
                          </DialogContent>
                          <DialogActions>
                            <Button onClick={handleClose}>Disagree</Button>
                            <Button onClick={handleClose} autoFocus>
                              Agree
                            </Button>
                          </DialogActions>
                        </Dialog>
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
