import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './sell.css';
import bg2 from '../../assets/bg2.png';
import car1 from '../../assets/car1.png';

const Sell = () => {
  const navigate = useNavigate(); // Initialize navigate
  const [vehicleDetails, setVehicleDetails] = useState({
    make: '',
    model: '',
    year: '',
    price: '',
    description: '',
    condition: '',
    location: '',
  });

  const [image, setImage] = useState(car1); // State for the uploaded image

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setVehicleDetails({
      ...vehicleDetails,
      [name]: value,
    });
  };

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // Set the uploaded image as the new state
      };
      reader.readAsDataURL(file); // Convert the file to a data URL
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    const submissionData = {
      id: Date.now(), // Unique ID
      ...vehicleDetails,
      status: 'Pending',
      submissionDate: new Date().toLocaleDateString(), // Submission date
      image: image, // Include the uploaded image in the submission data
    };

    // Retrieve current data from localStorage, add new submission, and save it back
    try {
      const currentSubmissions = JSON.parse(localStorage.getItem('vehicleSubmissions')) || [];
      currentSubmissions.push(submissionData);
      localStorage.setItem('vehicleSubmissions', JSON.stringify(currentSubmissions));

      console.log('Submitted Vehicle Details:', submissionData);

      // Reset the form
      handleCancel();

      // Navigate after successful submission
      navigate('/profile3'); // Navigate immediately after saving
    } catch (error) {
      console.error('Error saving submission:', error);
    }
  };

  // Handle cancel action
  const handleCancel = () => {
    setVehicleDetails({
      make: '',
      model: '',
      year: '',
      price: '',
      description: '',
      condition: '',
      location: '',
    });
    setImage(car1); // Reset image to default
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
        <h1>Vehicle Information</h1>

        {/* Form Section */}
        <div className="form-container">
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
        </div>

        {/* Image Container */}
        <div className="image-container">
          <img src={image} alt="Uploaded Vehicle" className="vehi" />
          <div className="image-upload-section">
            <h3>Upload Vehicle Images</h3>
            <div className="image-upload">
              <input type="file" accept="image/*" onChange={handleImageChange} />
            </div>
            <p className="note">* Upload an image to display on the bidding page.</p>
          </div>
        </div>

        <div className="admin-actions">
          <button className="submit-button" onClick={handleSubmit}>Submit</button>
          <button className="cancel-button" onClick={handleCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Sell;
