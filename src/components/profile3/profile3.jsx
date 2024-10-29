import React, { useEffect, useState } from 'react'; 
import './profile3.css';
import bg2 from '../../assets/bg2.png';
import { Link, useLocation } from 'react-router-dom';

const Profile3 = () => {
  const [vehicles, setVehicles] = useState([]);
  const location = useLocation(); // Get the current location

  useEffect(() => {
    // Fetch vehicles from localStorage
    const fetchedVehicles = JSON.parse(localStorage.getItem('vehicleSubmissions')) || [];
    setVehicles(fetchedVehicles);
  }, []);

  // Function to clear vehicle submissions
  const handleClearHistory = () => {
    localStorage.removeItem('vehicleSubmissions'); // Clear vehicles from localStorage
    setVehicles([]); // Clear state
  };

  return (
    <div>
      <div className="bg2">
        <img src={bg2} alt="bg2" className="image" />
        <div className="overlay">
          <h2>Manage Your Profile</h2>
          <p>
            Update Your Details, Track Your Bids, and Customize Your Preferences—All in One Place.
          </p>
        </div>
      </div>
      <div>
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
      </div>

      <div className="bidding-table">
      <br />
      <div className="profile3">
      <div className="header">
          <h2>Your Bidding History</h2>
          <button onClick={handleClearHistory} className="clear-history-btn">Clear History</button>
        </div>
        
        {/* Container for the table */}
        <div className="vehicles-container">
          <table className="vehicles-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Make</th>
                <th>Model</th>
                <th>Year</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {vehicles.map(vehicle => (
                <tr key={vehicle.id}>
                  <td>
                    <img 
                      src={vehicle.image} 
                      alt={`${vehicle.make} ${vehicle.model}`} 
                      style={{ width: '50px', height: 'auto' }} 
                    />
                  </td>
                  <td>{vehicle.make}</td>
                  <td>{vehicle.model}</td>
                  <td>{vehicle.year}</td>
                  <td>${vehicle.price}</td>
                  <td className={`status ${vehicle.status === 'Approved' ? 'status-approved' : vehicle.status === 'Rejected' ? 'status-rejected' : 'status-pending'}`} style={{
                    backgroundColor: vehicle.status === 'Approved' ? '#d4edda' : vehicle.status === 'Rejected' ? '#f8d7da' : '#cce5ff',
                  }}>{vehicle.status || 'Pending'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Profile3;
