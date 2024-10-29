import React, { useState } from 'react';
import './Login.css'; // Import the CSS file for styling
import wer from '../../assets/wer.png'; 
import Vehiii from '../../assets/vehiii.png'; 
import { Link, useNavigate } from 'react-router-dom'; 

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    // Check credentials
    if (username === 'admin' && password === '123') {
      navigate('/admindash'); // Redirect to admindash
    } else {
      alert('Invalid credentials. Please try again.'); // Show an error message
    }
  };

  return (
    <div className="signin-page">
      <div className="image-column">
        <img src={wer} alt="wer" className="imagex" />
        <img src={Vehiii} alt="vehiii" className="imagexc" />
      </div>
      <div className="form-column">
        <div className="signin-container">
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name*</label>
              <input 
                type="text" 
                id="name" 
                placeholder="Enter your name" 
                required 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password*</label>
              <input 
                type="password" 
                id="password" 
                placeholder="Enter your password" 
                required 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
              />
            </div>
            <button type="submit" className="signin-btn">Login</button>
            <button type="button" className="google-signin-btn">
              <span className="google-icon">G</span> Sign In with Google
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
