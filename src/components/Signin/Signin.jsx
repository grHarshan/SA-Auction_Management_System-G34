import React from 'react';
import './Signin.css'; // Import the CSS file for styling
import wer from '../../assets/wer.png'; 
import Vehiii from '../../assets/vehiii.png'; 

import { Link } from 'react-router-dom'; 
// Assuming the image is located in your assets folder
// Assuming the image is located in your assets folder

const Signin = () => {
  return (
    <div className="signin-page">
      <div className="image-column">
        <img src={wer} alt="wer" className="imagex" />
        <img src={Vehiii} alt="vehiii" className="imagexc" />
      </div>
      <div className="form-column">
        <div className="signin-container">
          <h1>Sign Up</h1>
          <p>Lorem ipsum dolor sit amet adipiscing elit.</p>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name*</label>
              <input type="text" id="name" placeholder="Enter your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email*</label>
              <input type="email" id="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number*</label>
              <input type="tel" id="phone" placeholder="Enter your phone number" required />
            </div>
            <div className="form-group">
              <label htmlFor="house">House Number*</label>
              <input type="text" id="house" placeholder="Enter your house number" required />
            </div>
            <div className="form-group">
              <label htmlFor="province">Select Your Province*</label>
              <select id="province" required>
                <option value="">Select</option>
                <option value="province1">Province 1</option>
                <option value="province2">Province 2</option>
                <option value="province3">Province 3</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password*</label>
              <input type="password" id="password" placeholder="Enter your password" required />
            </div>
            <button type="submit" className="signin-btn">Sign up</button>
            <button type="button" className="google-signin-btn">
              <span className="google-icon">G</span> Sign up with Google
            </button>
            <p className="login-text">
              Already have an account? <Link to="/login">Log In</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
