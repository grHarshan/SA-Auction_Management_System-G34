import React, { useState } from 'react';
import './sell.css';
import bg2 from '../../assets/bg2.png';
import car1 from '../../assets/car1.png';

const Sell = () => {
  const [vehicleDetails, setVehicleDetails] = useState({
    make: '',
    model: '',
    year: '',
    price: '',
    description: '',
    condition: '',
    location: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setVehicleDetails({
      ...vehicleDetails,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = () => {
    // Add your submit logic here
    console.log('Submitted Vehicle Details:', vehicleDetails);
  };

  // Handle cancel action
  const handleCancel = () => {
    // Reset form or navigate away
    setVehicleDetails({
      make: '',
      model: '',
      year: '',
      price: '',
      description: '',
      condition: '',
      location: '',
    });
  };

  return (
    <div>
      {/* Background Image Section */}
      <div className="bg2">
        <img src={bg2} alt="bg2" className="image" />
        <div className="overlay">
          <h2>Vehicle Listing Form</h2>
          <p>Provide Detailed Information to Attract Potential Buyers</p>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container01">
        {/* Form Section */}
        <div className="form-container">
          <h1>Vehicle Information</h1>

          {/* Image Container */}
        <div className="image-container">
          <img src={car1} alt="car1" className="vehi" />
          <div className="image-upload-section">
            <h3>Upload Vehicle Images</h3>
            <div className="image-upload">
              <input type="file" accept="image/*" />
              <input type="file" accept="image/*" />
              <input type="file" accept="image/*" />
            </div>
            <p className="note">* Upload up to 3 images to display on the bidding page.</p>
          </div>
        </div>
          
          <label>Make</label>
          <input
            type="text"
            name="make"
            value={vehicleDetails.make}
            onChange={handleChange}
            placeholder="e.g., Toyota"
          />

          <label>Model</label>
          <input
            type="text"
            name="model"
            value={vehicleDetails.model}
            onChange={handleChange}
            placeholder="e.g., Corolla"
          />

          <label>Year</label>
          <input
            type="text"
            name="year"
            value={vehicleDetails.year}
            onChange={handleChange}
            placeholder="e.g., 2023"
          />

          <label>Price ($)</label>
          <input
            type="number"
            name="price"
            value={vehicleDetails.price}
            onChange={handleChange}
            placeholder="e.g., 15000"
          />

          <label>Description</label>
          <textarea
            name="description"
            value={vehicleDetails.description}
            onChange={handleChange}
            placeholder="Enter vehicle description here"
          />

          <label>Condition</label>
          <select name="condition" value={vehicleDetails.condition} onChange={handleChange}>
            <option value="">Select Condition</option>
            <option value="New">New</option>
            <option value="Used">Used</option>
            <option value="Certified Pre-Owned">Certified Pre-Owned</option>
          </select>

          <label>Location</label>
          <input
            type="text"
            name="location"
            value={vehicleDetails.location}
            onChange={handleChange}
            placeholder="e.g., Colombo, Sri Lanka"
          />

          {/* Submit and Cancel Buttons */}
          <div className="admin-actions">
            <button className="submit-button" onClick={handleSubmit}>Submit</button>
            <button className="cancel-button" onClick={handleCancel}>Cancel</button>
          </div>
        </div>

      

        
      </div>
    </div>
  );
};

export default Sell;
