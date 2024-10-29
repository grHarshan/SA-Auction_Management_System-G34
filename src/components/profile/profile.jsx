import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './profile.css';
import bg2 from '../../assets/bg2.png';
import p1 from '../../assets/p1.jpg';

const Profile = () => {
  const [profileData, setProfileData] = useState({
    name: 'James',
    email: 'james@example.com',
    phone: '123-456-7890',
    houseNumber: '123',
    province: 'Ontario',
  });

  useEffect(() => {
    // Load saved profile data from localStorage on component mount
    const savedProfileData = JSON.parse(localStorage.getItem('profileData'));
    if (savedProfileData) {
      setProfileData(savedProfileData);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleSaveChanges = () => {
    // Save profile data to localStorage
    localStorage.setItem('profileData', JSON.stringify(profileData));
    alert('Profile updated successfully!');
  };

  return (
    <div className="profile-container">
      <div className="bg2">
        <img src={bg2} alt="Background" className="background-image" />
        <div className="overlay">
          <h2>Manage Your Profile</h2>
          <p>Update your details, track your bids, and customize preferences all in one place.</p>
        </div>
      </div>

      <div className="tabs">
        <ul>
          <li>
            <Link to="/profile" className={location.pathname === '/profile' ? 'active' : ''}>Personal Info</Link>
          </li>
          <li>
            <Link to="/profile2" className={location.pathname === '/profile2' ? 'active' : ''}>Bidding History</Link>
          </li>
          <li>
            <Link to="/profile3" className={location.pathname === '/profile3' ? 'active' : ''}>Selling Status</Link>
          </li>
        </ul>
      </div>

      <div className="profile-content">
        <div className="profile-card">
          <div className="user-profile">
            <img src={p1} alt="User Profile" />
          </div>
          <div className="welcome">
            <p>Welcome</p>
            <h1>{profileData.name}</h1>
            <p>Read or edit your profile details here.</p>
          </div>
          <div className="profile-inputs">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={profileData.name}
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={profileData.email}
              onChange={handleInputChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone number"
              value={profileData.phone}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="houseNumber"
              placeholder="House number"
              value={profileData.houseNumber}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="province"
              placeholder="Province"
              value={profileData.province}
              onChange={handleInputChange}
            />
          </div>
          <button className="save-changes-btn" onClick={handleSaveChanges}>Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
