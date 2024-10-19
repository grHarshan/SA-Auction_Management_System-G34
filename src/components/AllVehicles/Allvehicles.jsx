import React from 'react'
import bg2 from '../../assets/bg2.png';
import car1 from '../../assets/car1.png';
import v2 from '../../assets/v2.png';
import v3 from '../../assets/v3.png';
import v4 from '../../assets/v4.png';
import v5 from '../../assets/v5.png';
import v6 from '../../assets/v6.png';
import v7 from '../../assets/v7.png';
import v8 from '../../assets/v8.png';
import v9 from '../../assets/v9.png';
import v10 from '../../assets/v10.png';
import v11 from '../../assets/v11.png';
import { Link } from 'react-router-dom';  


import './allvehicles.css';

import p1 from '../../assets/p1.jpg'; 
 
 

const Allvehicles = () => {
  return (
    <div>
      <div className="bg2">
        <img src={bg2} alt="bg2" className="image" />
        <div className="overlay">
          <h2>Find Your Perfect Ride</h2>
          <p>
          Browse Our Extensive Vehicle Collection—From Luxury 
          Cars to Budget-Friendly Options, There's Something for Everyone.
          </p>
        </div>
      </div>


      <div className="header">
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <i className="fa fa-search" aria-hidden="true"></i>
        </div>
        <div className="right-side">
          <i className="fa fa-bell" aria-hidden="true"></i>
          <img src={p1} alt="Profile" className="profile-picture" />
          <span className="username">James Smith</span>
        </div>
      </div>



      <div className="card-container">
        {[car1, v2, v6, v5].map((image, index) => (
          <div className="card" key={index}>
            <Link to="/productdetails">
              <img src={image} alt={`Vehicle ${index + 1}`} className="vehi" />
            </Link>
            <div className="card-info">
              <span className={`auction-status ${index % 2 === 0 ? 'live' : 'timed'}`}>
                {index % 2 === 0 ? 'Live Auction' : '2D: 12H: 34Min: 52Sec'}
              </span>
              <h3>Product Name</h3>
              <p>Variant</p>
              <p>
                $55 <span className="bid-type">({index % 2 === 0 ? 'Highest Bid' : 'Minimum Bid'})</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="card-container">
        {[car1, v2, v6, v5].map((image, index) => (
          <div className="card" key={index}>
            <Link to="/productdetails">
              <img src={image} alt={`Vehicle ${index + 1}`} className="vehi" />
            </Link>
            <div className="card-info">
              <span className={`auction-status ${index % 2 === 0 ? 'live' : 'timed'}`}>
                {index % 2 === 0 ? 'Live Auction' : '2D: 12H: 34Min: 52Sec'}
              </span>
              <h3>Product Name</h3>
              <p>Variant</p>
              <p>
                $55 <span className="bid-type">({index % 2 === 0 ? 'Highest Bid' : 'Minimum Bid'})</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="card-container">
        {[car1, v2, v6, v5].map((image, index) => (
          <div className="card" key={index}>
            <Link to="/productdetails">
              <img src={image} alt={`Vehicle ${index + 1}`} className="vehi" />
            </Link>
            <div className="card-info">
              <span className={`auction-status ${index % 2 === 0 ? 'live' : 'timed'}`}>
                {index % 2 === 0 ? 'Live Auction' : '2D: 12H: 34Min: 52Sec'}
              </span>
              <h3>Product Name</h3>
              <p>Variant</p>
              <p>
                $55 <span className="bid-type">({index % 2 === 0 ? 'Highest Bid' : 'Minimum Bid'})</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="card-container">
        {[car1, v2, v6, v5].map((image, index) => (
          <div className="card" key={index}>
            <Link to="/productdetails">
              <img src={image} alt={`Vehicle ${index + 1}`} className="vehi" />
            </Link>
            <div className="card-info">
              <span className={`auction-status ${index % 2 === 0 ? 'live' : 'timed'}`}>
                {index % 2 === 0 ? 'Live Auction' : '2D: 12H: 34Min: 52Sec'}
              </span>
              <h3>Product Name</h3>
              <p>Variant</p>
              <p>
                $55 <span className="bid-type">({index % 2 === 0 ? 'Highest Bid' : 'Minimum Bid'})</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="card-container">
        {[car1, v2, v6, v5].map((image, index) => (
          <div className="card" key={index}>
            <Link to="/productdetails">
              <img src={image} alt={`Vehicle ${index + 1}`} className="vehi" />
            </Link>
            <div className="card-info">
              <span className={`auction-status ${index % 2 === 0 ? 'live' : 'timed'}`}>
                {index % 2 === 0 ? 'Live Auction' : '2D: 12H: 34Min: 52Sec'}
              </span>
              <h3>Product Name</h3>
              <p>Variant</p>
              <p>
                $55 <span className="bid-type">({index % 2 === 0 ? 'Highest Bid' : 'Minimum Bid'})</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>

    
      
    

    
  )
}

export default Allvehicles
