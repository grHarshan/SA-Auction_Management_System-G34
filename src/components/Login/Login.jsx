import React from 'react';
import './Login.css'; // Import the CSS file for styling
import wer from '../../assets/wer.png'; 
import Vehiii from '../../assets/vehiii.png'; 
import { Link } from 'react-router-dom'; 
 

const Login = () => {
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
              <label htmlFor="password">Email*</label>
              <input type="password" id="password" placeholder="Enter your password" required />
            </div>
            
             
             
             
            <Link to="/hero"><button type="submit" className="signin-btn">Login</button></Link>
            <button type="button" className="google-signin-btn">
              <span className="google-icon">G</span> Sign up with Google
            </button>
            <p className="login-text">
              Already have an account? <Link to="/signin">Sign In</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
