import React, { useEffect, useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import './profile2.css';
import bg2 from '../../assets/bg2.png';

const Profile2 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [bids, setBids] = useState([]);

  useEffect(() => {
    const storedBids = JSON.parse(localStorage.getItem('bids')) || [];
    setBids(storedBids);
  }, []);

  const handleViewDetails = (vehicle) => {
    if (vehicle) {
      navigate('/bid', { state: { vehicle } });
    }
  };

  const handleClearHistory = () => {
    localStorage.removeItem('bids');
    setBids([]);
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
        <div className="header">
          <h2>Your Bidding History</h2>
          <button onClick={handleClearHistory} className="clear-history-btn">Clear History</button>
        </div>
        <div className="table-container"> {/* Added container for the table */}
          <table>
            <thead>
              <tr>
                <th colSpan={2}>Bid History</th>
                <th>Status</th>
                <th>
                  <div className="search-sort">
                    <input type="text" placeholder="Search" />
                    <select>
                      <option value="default">Sort by</option>
                      <option value="rank">Rank</option>
                      <option value="item">Item</option>
                      <option value="status">Status</option>
                    </select>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {bids.map((bid, index) => (
                <tr key={index}>
                  <td className="tdataboxc">
                    <button className="tdatabox">
                      <p>Bid No {index + 1}</p>
                    </button>
                  </td>
                  <td>
                    <p>{bid.vehicle.name}</p>
                    <p>Bid Amount: ${bid.bidValue}</p>
                  </td>
                  <td className={`status ${bid.status === 'Approved' ? 'status-approved' : bid.status === 'Rejected' ? 'status-rejected' : 'status-pending'}`} style={{
                    backgroundColor: bid.status === 'Approved' ? '#d4edda' : bid.status === 'Rejected' ? '#f8d7da' : '#cce5ff',
                  }}>
                    {bid.status || 'Pending'}
                  </td>
                  <td>
                    <button className="view-details-btn" onClick={() => handleViewDetails(bid.vehicle)}>View Details</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div> {/* End of table container */}
      </div>
    </div>
  );
};

export default Profile2;
