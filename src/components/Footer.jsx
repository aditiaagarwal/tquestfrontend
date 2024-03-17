import React from "react";
import './Footer.css';
const Footer = ({}) => {
  return (
    <div>
      <footer>
        <div className="footer-container">
          <div className="footer-company-box">
            <a href="#" className="logo">
              <span>Wellness Analytics</span>
            </a>
            <p>Join us and have a great medical experience ahead!</p>
            <div className="footer-social">
              <a href="#">
                <i className="fa-brands fa-facebook-f" />
              </a>
              <a href="#">
                <i className="fa-brands fa-instagram" />
              </a>
              <a href="#">
                <i className="fa-brands fa-twitter" />
              </a>
              <a href="#">
                <i className="fa-brands fa-youtube" />
              </a>
            </div>
          </div>
          <div className="footer-link-box">
            <strong>Main Link's</strong>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
            </ul>
          </div>
          <div className="footer-link-box">
            <strong>External Link's</strong>
            <ul>
              <li>
                <a href="#">Our Product's</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Disclaimer</a>
              </li>
              <li>
                <a href="#">Term's and Condition's</a>
              </li>
            </ul>
          </div>
          <div className="footer-link-box">
            <strong>External Link's</strong>
            <ul>
              <li>
                <a href="#">Our Product's</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Disclaimer</a>
              </li>
              <li>
                <a href="#">Term's and Condition's</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="footer-owner">Made By -Wellness Analytics</span>
          <span className="copyright">© Copyright 2024-Wellness Analytics</span>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
