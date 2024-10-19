import React from 'react';
import { Link } from 'react-router-dom';  
import './footer.css';
import logo from '../../assets/Content.png';
 
 
const Footer = () => {
  return (
    <footer className="footer">
      <p>  
        <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      </p>
      <ul>
          <li><Link to="/hero">Home</Link></li>
          <li><Link to="/allvehicles">All Vehicles</Link></li>
          <li><Link to="/AboutUs">About Us</Link></li>
          <li><Link to="/ContactUs">ContactUs</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
    </footer>
  );
};

export default Footer;