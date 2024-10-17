import React from 'react';
import './ContactUs.css';
import { Link } from 'react-router-dom';
import bg2 from '../../assets/bg2.png';

const ContactUs = () => {
    return ( 
        <div>
      {/* Background Image Section */}
      <div className="bg2">
        <img src={bg2} alt="bg2" className="image" />
        <div className="overlay">
          <h2>Get in Touch with Us</h2>
          <p>Reach out with your quesctions,comments or concerns.We are here to assist.</p>
        </div>
      </div>
      </div>
     );
}
 
export default ContactUs;