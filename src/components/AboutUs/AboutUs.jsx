import React from 'react';
import bg2 from '../../assets/bg2.png';
import nimsara from '../../assets/nimsara.jpg';
import rumesh from '../../assets/rumesh.jpeg';
import harshana from '../../assets/harshana.jpeg';
import tharindi from '../../assets/tharindi.jpeg';
import awanthi from '../../assets/awanthi.jpeg';
import ruwanthi from '../../assets/ruwanthi.jpeg';
 
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
        <img src={rumesh} alt="rumesh" className="rumesh" />
            <h3>G.R. Harshan</h3>
            <p>undergraduate</p>
        </div>

        <div class="pro">
        <img src={harshana} alt="harshana" className="harshana" />
            <h3>A.M. Harshana Bandara</h3>
            <p>undergraduate</p>
        </div>

        <div class="pro">
        <img src={tharindi} alt="tharindi" className="tharindi" />
            <h3>T.D.K. Arachchi</h3>
            <p>undergraduate</p>
        </div>

        <div class="pro">
        <img src={awanthi} alt="awanthi" className="awanthi" />
            <h3>M.A.Y. Malawanage</h3>
            <p>undergraduate</p>
        </div>

        <div class="pro">
        <img src={ruwanthi} alt="ruwanthi" className="ruwanthi" />
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
