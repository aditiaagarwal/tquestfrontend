import React, { useEffect, useState } from "react";
import logoImage from '../images/WellnessAnalytics.png';
import { useNavigate } from "react-router-dom";
import './Navbar.css';
import Link from "./Link";
const Navbar = () => {
  const navigate = useNavigate();
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
      localStorage.removeItem('name');
      localStorage.removeItem('bookingId');
      setCustomerName('');
    } else {
      navigate('/login/');
    }
  };

  const handleProfileClick = () => {
    const storedName = localStorage.getItem('name');
    if (storedName) {
      navigate('/profile/'); // Navigate to the profile page only if not logged in
    }
  };

  return (
    <div>
      <Link></Link>
      <nav className="navigation">
        <label htmlFor="menu-btn" className="menu-icon">
          <span className="nav-icon" />
        </label>
        <div className="kchbhi">
          <a href="index.html" className="logo">
            <img src={logoImage} alt="" />
          </a>
          <span>Wellness Analytics</span>
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
          <button className="nav-appointment-btn" onClick={handleProfileClick}>{customerName ? customerName : 'View Your Profile'}</button>
          <button className="nav-appointment-btn" onClick={handleLoginClick}>{customerName ? 'Logout' : 'Login'}</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
