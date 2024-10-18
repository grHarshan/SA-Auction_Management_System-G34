import React from 'react';
import bg2 from '../../assets/bg2.png';
import './admindash.css';
import car1 from '../../assets/car1.png';
  // Assuming you have more car images
 

const Admindash = () => {
  return (
    <div className="admindash">
      {/* Background Image with Overlay */}
      <div className="bg2">
        <img src={bg2} alt="bg2" className="image" />
        <div className="overlay">
          <h2>Detailed Vehicle Information</h2>
          <p>
            Get Comprehensive Insights on Every Vehicle—Specifications, History, and More to Make an Informed Bid.<br /> <br />
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container">
        {/* Left Section: Vehicle Info */}
        <div className="form-container">
          <div className="input-container">
            <h1>Toyota CAr</h1>
            <p>$55</p>
            <p>
            This Toyota Corolla is available for viewing and test drive at [Dealership Name] in Colombo, Sri Lanka.
            </p>
          </div>

          {/* Variant Buttons */}
          <p>Variants</p>
          <div className="buttnvar">
            <button>Option One</button>
            <button>Option Two</button>
            <button>Option Three</button>
          </div>
          <p className="free-shipping">Free shipping over $50</p>

          {/* Expandable Sections */}
          <div className="details-section">
            <p>Details</p>
            <p>This is a pristine Toyota Corolla 2023 in pristine white condition. With only 10,000 kilometers on the clock, it's practically brand new. Enjoy 
                a smooth ride with its automatic transmission and powerful 1.6L engine.</p>
          </div>

          <div className="details-section">
            <p>Condition</p>
            <p>The car is in excellent condition both inside and out. It has been meticulously maintained and has no accident history. All features and components are in perfect working order.</p>
          </div>

          <div className="details-section">
            <p>Location</p>
            <p>This Toyota Corolla is available for viewing and test drive at [Dealership Name] in Colombo, Sri Lanka.</p>
          </div>
        </div>

        {/* Right Section: Vehicle Image and Actions */}
        <div className="vehicle-display">
          <img src={car1} alt="Vehicle" className="vehicle-image" />

          {/* Thumbnails for more vehicle images */}
          

          {/* Approve/Reject Buttons */}
          <div className="button-container">
            <button className="approve-button">APPROVE</button>
            <button className="reject-button">REJECT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admindash;
