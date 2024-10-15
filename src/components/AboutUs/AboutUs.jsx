import React from 'react';
import bg2 from '../../assets/bg2.png';
import './AboutUs.css';

const teamMembers = [
  { id: 1, name: 'Full name', role: 'Undergraduate' },
  { id: 2, name: 'Full name', role: 'Undergraduate' },
  { id: 3, name: 'Full name', role: 'Undergraduate' },
  { id: 4, name: 'Full name', role: 'Undergraduate' },
  { id: 5, name: 'Full name', role: 'Undergraduate' },
  { id: 6, name: 'Full name', role: 'Undergraduate' },
  { id: 7, name: 'Full name', role: 'Undergraduate' },
  { id: 8, name: 'Full name', role: 'Undergraduate' },
];

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
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card">
              <div className="team-photo">
                <img src="https://via.placeholder.com/100" alt={member.name} />
              </div>
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-bio">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
              </p>
              <div className="team-socials">
                <a href="#linkedin" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#github" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          ))}
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
