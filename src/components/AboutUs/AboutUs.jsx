import React from 'react';
import bg2 from '../../assets/bg2.png';
import nimsara from '../../assets/nimsara.jpg';
import './AboutUs.css';
 
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
      <div className="team-container">
        <h2 className="team-tagline">Our team</h2>
        <p className="team-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className="team-grid">
           
        </div>

        <div className="repo-section">
          <h3>Check out repository</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className="repo-button">
            Open in GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
