import React from 'react';
import { Link } from 'react-router-dom';  
import './Navbar.css';
import logo from '../../assets/Content.png';
import p1 from '../../assets/p1.jpg';  

const Navbar = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav>
        <ul>
          <li><Link to="/hero">Home</Link></li>
          <li><Link to="/allvehicles">All Vehicles</Link></li>
          <li><Link to="/AboutUs">About Us</Link></li>
          <li><Link to="/ContactUs">ContactUs</Link></li>
          <li><Link to="/bid" className="btn buy-btn">Bid</Link></li>
          <li><Link to="/sell" className="btn sell-btn">Sell</Link></li>
          <li>
            <Link to="/profile">
              <img src={p1} alt="P1" className="profile-picture" />
            </Link>
          </li>
          
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;