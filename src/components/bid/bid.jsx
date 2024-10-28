import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import bg2 from '../../assets/bg2.png';
import './bid.css';
import FeaturedAuctions from '../FeaturedAuctions/FeaturedAuctions';

const Bid = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { vehicle } = location.state || {}; // Extract vehicle object from location state

  const [bidderName, setBidderName] = useState('');
  const [bidValue, setBidValue] = useState('');

  const handleBidSubmit = () => {
    if (vehicle && bidValue && bidderName) {
      const bidData = {
        id: Date.now(), // Unique ID based on timestamp
        name: bidderName,
        bidValue: parseFloat(bidValue),
        vehicle,
        status: 'Pending' // Default status for new bids
      };

      // Retrieve existing bids from localStorage
      const existingBids = JSON.parse(localStorage.getItem('bids')) || [];
      
      // Save new bid
      existingBids.push(bidData);
      localStorage.setItem('bids', JSON.stringify(existingBids));

      navigate('/profile2'); 
    }
  };

  if (!vehicle) {
    return (
      <div>
        <h1 className="alert-message">No vehicle data found. Please go back and select a vehicle.</h1>
        <FeaturedAuctions />
      </div>
    );
  }

  return (
    <div>
      <div className="bg2">
        <img src={bg2} alt="Background" className="image" />
        <div className="overlay">
          <h2>Seamless Bidding Experience</h2>
          <p>Participate in Auctions with Confidence and Easy Bidding Process.</p>
        </div>
      </div>

      <div className="container">
        <div className="vehicle-info">
          <h3>Vehicle Details</h3>
          <table className="vehicle-details-table">
            <tbody>
              <tr>
                <th>Vehicle Name</th>
                <td>{vehicle.name}</td>
              </tr>
              <tr>
                <th>Minimum Bid</th>
                <td>{"$" + vehicle.price}</td>
              </tr>
              <tr>
                <th>Image</th>
                <td>
                  <img src={vehicle.image} alt={vehicle.name} className="vehicle-image" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Bidding Section */}
        <div className="bid-section">
          <h2>Bid Rankings</h2>
          <p>Top bids for this vehicle:</p>
          <ul className="bid-list">
            {/* Example static bids for demonstration */}
            <li className="bid-item">
              <span>01</span>
              <span>Kumara Hettiarachi</span>
              <span>$ 400.00</span>
            </li>
            <li className="bid-item">
              <span>02</span>
              <span>John Doe</span>
              <span>$ 380.00</span>
            </li>
            <li className="bid-item">
              <span>03</span>
              <span>Jane Smith</span>
              <span>$ 370.00</span>
            </li>
            <li className="bid-item">
              <span>04</span>
              <span>Mike Johnson</span>
              <span>$ 240.00</span>
            </li>
            <li className="bid-item">
              <span>05</span>
              <span>Alice Williams</span>
              <span>$ 220.00</span>
            </li>
          </ul>

          <div className="new-bid">
            <h2>Place Your Bid</h2>
            <input
              type="text"
              className="bid-name"
              placeholder="Your full name here"
              value={bidderName}
              onChange={(e) => setBidderName(e.target.value)}
            />
            <input
              type="number"
              className="bid-value"
              placeholder="Enter The Bid Value"
              value={bidValue}
              onChange={(e) => setBidValue(e.target.value)}
            />
            <button type="button" className="submit-bid-btn save-btn" onClick={handleBidSubmit}>Submit Bid</button>
          </div>
        </div>
      </div>

      <FeaturedAuctions />
    </div>
  );
};

export default Bid;
