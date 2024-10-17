import React from 'react';
import bg2 from '../../assets/bg2.png';
import nimsara from '../../assets/nimsara.jpg';
import awa from '../../assets/awa.jpg';
 
import './AboutUs.css';
import { Link } from 'react-router-dom'; 

const AboutUs = () => {
  return (
    <div>
      {/* Background Image Section */}
      <div className="bg2">
        <img src={bg2} alt="bg2" className="image" />
        <div className="overlay">
          <h2>Meet the Team</h2>
          <p>Together, We Achieve More.</p>
        </div>
      </div>

      {/* Team Section */}
      <div class="profile-grid">
        <div class="pro">
        <img src={awa} alt="awa" className="awa" />
            <h3>name</h3>
            <p>undergraduate</p>
        </div>

        <div class="pro">
        <img src={awa} alt="awa" className="awa" />
            <h3>name</h3>
            <p>undergraduate</p>
        </div>

        <div class="pro">
        <img src={awa} alt="awa" className="awa" />
            <h3>name</h3>
            <p>undergraduate</p>
        </div>

        <div class="pro">
        <img src={awa} alt="awa" className="awa" />
            <h3>M.A.Y. Malawanage</h3>
            <p>undergraduate</p>
        </div>

        <div class="pro">
        <img src={awa} alt="awa" className="awa" />
            <h3>B.H.R. Yashodara</h3>
            <p>undergraduate</p>
        </div>

        <div class="pro">
        <img src={nimsara} alt="nimsara" className="nimsara" />
            <h3>G.M.S. Nimsara</h3>
            <p>undergraduate</p>
        </div>
    </div>
    </div>
  );
};

export default AboutUs;
