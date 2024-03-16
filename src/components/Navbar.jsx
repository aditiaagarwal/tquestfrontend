import React from "react";
import logoImage from '../images/Logo.avif';
import './Navbar.css';
const Navbar = ({}) => {
  return (
    <div>
      <nav className="navigation">
        <input type="checkbox" className="menu-btn" id="menu-btn" />
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
            <a href="#testimonials">Feedback</a>
          </li>
        </ul>
        <div className="small-nv">
          <a href="#" className="nav-appointment-btn">
            View Your Profile
          </a>
          <a href="#" className="nav-appointment-btn">
            Login
          </a>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
