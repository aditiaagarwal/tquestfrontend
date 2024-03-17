import React, { useEffect, useState } from "react";
import logoImage from '../images/Logo.avif';

import './Navbar.css';
import {useNavigate} from "react-router-dom"
const Navbar = ({}) => {
  const navigate=useNavigate()
  // const handleLoginClick = () => {
  //   navigate('/login/')
    
  //   alert("Login button clicked");

  // };
  const [customerName, setCustomerName] = useState('');
  useEffect(() => {
    const storedName = localStorage.getItem('name');
    if (storedName) {
      setCustomerName(storedName);
    }
  }, []);
  const handleLoginClick = () => {
    const storedName = localStorage.getItem('name');
    if (storedName) {
      localStorage.removeItem('name'); // Remove the customer name from local storage
      localStorage.removeItem('bookingId');
      setCustomerName(''); // Clear the customer name in state
      alert("Logged out successfully");
    } else {
      navigate('/login/');
      alert("Login button clicked");
    }
  };
  return (
    <div>
      <nav className="navigation">
        {/* <input type="checkbox" className="menu-btn" id="menu-btn" /> */}
        <label htmlFor="menu-btn" className="menu-icon">
          <span className="nav-icon" />
        </label>
        <div className="kchbhi">
          <a href="index.html" className="logo">
            <img src={logoImage} alt="" />
          </a>
          <span>Logic Legion</span>
        </div>
        <ul className="menu">
          <li>
            <a href="#our-services">Our Services</a>
          </li>
          <li>
            <a href="#our_story">About Us</a>
          </li>
          <li>
            <a href="#testimonials">Feedback</a>
          </li>
        </ul>
        <div className="small-nv">
        <button className="nav-appointment-btn" >{customerName ? customerName : 'View Your Profile'}</button>
        <button className="nav-appointment-btn" onClick={handleLoginClick}>{customerName ? 'Logout' : 'Login'}</button>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;