import React, { useEffect, useState } from 'react';
import bg2 from '../../assets/bg2.png';
import './admindash.css';

const Admindash = () => {
  const [vehicles, setVehicles] = useState([]);
  const [bids, setBids] = useState([]);
  const [activeTab, setActiveTab] = useState('vehicles');

  useEffect(() => {
    const fetchedVehicles = JSON.parse(localStorage.getItem('vehicleSubmissions')) || [];
    const fetchedBids = JSON.parse(localStorage.getItem('bids')) || [];
    setVehicles(fetchedVehicles);
    setBids(fetchedBids);
  }, []);

  const handleApprove = (id, type) => {
    if (type === 'vehicle') {
      const updatedVehicles = vehicles.map(vehicle =>
        vehicle.id === id ? { ...vehicle, status: 'Approved' } : vehicle
      );
      setVehicles(updatedVehicles);
      localStorage.setItem('vehicleSubmissions', JSON.stringify(updatedVehicles));
    } else if (type === 'bid') {
      const updatedBids = bids.map(bid =>
        bid.id === id ? { ...bid, status: 'Approved' } : bid
      );
      setBids(updatedBids);
      localStorage.setItem('bids', JSON.stringify(updatedBids));
    }
  };

  const handleReject = (id, type) => {
    if (type === 'vehicle') {
      const updatedVehicles = vehicles.map(vehicle =>
        vehicle.id === id ? { ...vehicle, status: 'Rejected' } : vehicle
      );
      setVehicles(updatedVehicles);
      localStorage.setItem('vehicleSubmissions', JSON.stringify(updatedVehicles));
    } else if (type === 'bid') {
      const updatedBids = bids.map(bid =>
        bid.id === id ? { ...bid, status: 'Rejected' } : bid
      );
      setBids(updatedBids);
      localStorage.setItem('bids', JSON.stringify(updatedBids));
    }
  };

  const handleStartBidDate = (vehicleId, date) => {
    const updatedVehicles = vehicles.map(vehicle =>
      vehicle.id === vehicleId ? { ...vehicle, bidStartDate: date } : vehicle
    );
    setVehicles(updatedVehicles);
    localStorage.setItem('vehicleSubmissions', JSON.stringify(updatedVehicles));
  };

  const handleClearAll = (type) => {
    if (type === 'vehicles') {
      setVehicles([]);
      localStorage.removeItem('vehicleSubmissions');
    } else if (type === 'bids') {
      setBids([]);
      localStorage.removeItem('bids');
    }
  };

  return (
    <div className="admindash">
      <div className="bg2">
        <img src={bg2} alt="bg2" className="image" />
        <div className="overlay">
          <h2>Admin Dashboard</h2>
          <p>Manage Vehicle Submissions and Bids Here.</p>
        </div>
      </div>

      <div className="tabs">
        <button
          className={activeTab === 'vehicles' ? 'active' : ''}
          onClick={() => setActiveTab('vehicles')}
        >
          Vehicles for Approval
        </button>
        <button
          className={activeTab === 'bids' ? 'active' : ''}
          onClick={() => setActiveTab('bids')}
        >
          Bids for Approval
        </button>
      </div>

      <div className="container1">
        {activeTab === 'vehicles' && (
          <div>
            <h1>Vehicles for Approval</h1>
            <table className="bids-table">
              <thead>
                <tr>
                  <th>Image</th> {/* New Column for Image */}
                  <th>Make</th>
                  <th>Model</th>
                  <th>Year</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>Submission Date</th>
                  <th>Start Bid Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {vehicles.map(vehicle => (
                  <tr key={vehicle.id}>
                    <td>
                      <img 
                        src={vehicle.image} 
                        alt={`${vehicle.make} ${vehicle.model}`} 
                        style={{ width: '50px', height: 'auto' }} // Small size
                      />
                    </td>
                    <td>{vehicle.make}</td>
                    <td>{vehicle.model}</td>
                    <td>{vehicle.year}</td>
                    <td>${vehicle.price}</td>
                    <td className={`status ${vehicle.status || 'Pending'}`}>{vehicle.status || 'Pending'}</td>
                    <td>{vehicle.submissionDate}</td>
                    <td>
                      <input
                        type="date"
                        onChange={(e) => handleStartBidDate(vehicle.id, e.target.value)}
                      />
                    </td>
                    <td>
                      <button className="approve-button" onClick={() => handleApprove(vehicle.id, 'vehicle')}>Approve</button>
                      <button className="reject-button" onClick={() => handleReject(vehicle.id, 'vehicle')}>Reject</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button className="clear-button" onClick={() => handleClearAll('vehicles')}>Clear All Vehicles</button>
          </div>
        )}

        {activeTab === 'bids' && (
          <div>
            <h1>Bids for Approval</h1>
            <table className="bids-table">
              <thead>
                <tr>
                  <th>Bidder Name</th>
                  <th>Bid Amount</th>
                  <th>Vehicle Name</th>
                  <th>Vehicle Model</th>
                  <th>Minimum Bid Value</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {bids.map(bid => (
                  <tr key={bid.id}>
                    <td>{bid.name}</td>
                    <td>${bid.bidValue}</td>
                    <td>{bid.vehicle.name}</td>
                    <td>{bid.vehicle.variant}</td>
                    <td>${bid.vehicle.price}</td>
                    <td className={`status ${bid.status || 'Pending'}`}>{bid.status || 'Pending'}</td>
                    <td>
                      <button className="approve-button" onClick={() => handleApprove(bid.id, 'bid')}>Approve</button>
                      <button className="reject-button" onClick={() => handleReject(bid.id, 'bid')}>Reject</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button className="clear-button" onClick={() => handleClearAll('bids')}>Clear All Bids</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admindash;
