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
          <p>Create Your Free Account.</p>
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
                <option value="province1">1. Central Province</option>
                <option value="province2">2. Eastern Province</option>
                <option value="province3">3. Northern Province</option>
                <option value="province4">4. North Central Province</option>
                <option value="province5">5. North Western Province</option>
                <option value="province6">6. Sabaragamuwa Province</option>
                <option value="province7">7. Southern Province</option>
                <option value="province8">8. Uva Province</option>
                <option value="province9">9. Western Province</option>
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
