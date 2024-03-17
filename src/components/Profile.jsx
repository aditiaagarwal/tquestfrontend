import React from "react";
import LinkProfile from "./LinkProfile";
import './Profile.css';

const Profile = ({}) => {
  return (
    <div className="app-container">
      <LinkProfile/>
      <div className="container">
        <div className="row login_box">
          <div className="col-md-12 col-xs-12" align="center">
            <div className="line">
              <h3>Welcome to your profile!</h3>
            </div>
            <div className="outter">
              <img
                src="https://img.freepik.com/premium-vector/young-man-face-avater-vector-illustration-design_968209-13.jpg"
                className="image-circle"
                alt="Profile Image"
              />
            </div>
            <h1>Hi "Guest"</h1>
          </div>
          <div className="col-md-12 col-xs-12 login_control">
            <div className="control">
              <h4>Name</h4>
              <input type="text" id="name" name="name" className="form-control" />
            </div>
            <div className="control">
            <h4>BookingId</h4>
              <input type="text" id="bookingId" name="bookingId" className="form-control" />
            </div>
            <div className="control">
              <h4>Gender</h4>
              <input type="text" id="gender" name="gender" className="form-control" />
            </div>
            <div className="control">
              <h4>Age</h4>
              <input type="text" id="age" name="age" className="form-control" />
            </div>
            <div className="control">
            <h4>No. of Tests</h4>
              <input type="text" id="tests" name="tests" className="form-control" />
            </div>
            <div align="center">
              <button className="btn btn-orange">Go Back</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
document.body.style.backgroundColor = "rgb(172 197 216)";
export default Profile;
