import React from "react";
import Link from "react-router-dom";
import icon from "../../images/facebook-icon.svg"

const Footer = () => {
  return (
    <div className="footer">
      <footer className="container">
        <div className="social">
          <h4>Stay Connected</h4>
          <ul>
            <li><a href="/"> 
            <img src={icon} alt="Visit us at Facebook." /></a>
            </li>
            <li><a href="/"> 
            <img src={icon} alt="Visit us at Facebook." /></a>
            </li>
            <li><a href="/"> 
            <img src={icon} alt="Visit us at Facebook." /></a>
            </li>
            <li><a href="/"> 
            <img src={icon} alt="Visit us at Facebook." /></a>
            </li>
          </ul>
        </div>
        <address>
          Wall of Wonder <br />
          RBC Plaza
          <br />
          60 South 6th Street
          <br />
          Minneapolis, MN 55402
        </address>
        
      </footer>
      <div className="container copyright">Copyright</div>
    </div>
  );
};

export default Footer;
