import React from 'react';
import './Hero.css';
import bg from '../../assets/bg.png';
import bg2 from '../../assets/bg2.png';
import car1 from '../../assets/car1.png'; 
import v2 from '../../assets/v2.png'; 
import v3 from '../../assets/v3.png'; 
import v5 from '../../assets/v5.png'; 
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CountUp from 'react-countup';
import useInView from '../../hooks/useInView'; // Import the custom hook


const settings = {
  dots: true, 
  infinite: true, 
  speed: 500, 
  slidesToShow: 4, 
  slidesToScroll: 1, 
  autoplay: true, 
  autoplaySpeed: 1000, 
  responsive: [
    {
      breakpoint: 1024, 
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 600, 
      settings: {
        slidesToShow: 2
      }
    }
  ]
};

const Hero = () => {
  const [countersRef, isInView] = useInView({ threshold: 0.2 });
  
  return (
    
    <div className="Hero">
      <div className="Hero-content">
      <img src={bg} alt="bg" />
      <h1>Drive Your Dream, Bid Today</h1>
      <p>
        Bid on Your Dream Ride-From Classics to the Latest Models. Start Your Journey with Confidence.
      </p>
      <div className="bg2">
        <img src={bg2} alt="bg2" className="image" />
        <div className="overlay">
          <h2>Find Your Perfect Ride</h2>
          <p>
            Browse Our Extensive Vehicle Collection—From Luxury Cars to Budget-Friendly Options, There's Something for Everyone.
          </p>
        </div>
      </div>
      </div>

      <div className="container mt-5 featured-section">
  <div className="content">
    <span className="most-viewed">MOST VIEWED</span>
    <h2 className="title">Featured Auctions</h2>
    <p>Top Vehicles at Unbeatable Starting Bids - Place Your Bid Now and Drive Away with a Deal!</p>
  </div>
  <div className="action">
    <Link to="/allvehicles" className="btn btn-outline-dark">See more</Link>
  </div>
</div>

<div className="main-content">
      <Slider {...settings}>
        <div className="card">
          <Link to="/productdetails">
            <img src={car1} alt="car1" className="vehi" />
          </Link>
          <div className="card-info">
            <span className="auction-status live">Live Auction</span>
            <h3>Product Name</h3>
            <p>Variant</p>
            <p>$55 <span className="bid-type">(Highest Bid)</span></p>
          </div>
        </div>

        <div className="card">
          <Link to="/productdetails">
            <img src={v2} alt="v2" className="vehi" />
          </Link>
          <div className="card-info">
            <span className="auction-status live">Live Auction</span>
            <h3>Product Name</h3>
            <p>Variant</p>
            <p>$55 <span className="bid-type">(Highest Bid)</span></p>
          </div>
        </div>

        <div className="card">
          <Link to="/productdetails">
            <img src={v3} alt="v3" className="vehi" />
          </Link>
          <div className="card-info">
            <span className="auction-status timed">2D: 12H: 34Min: 52Sec</span>
            <h3>Product Name</h3>
            <p>Variant</p>
            <p>$55 <span className="bid-type">(Minimum Bid)</span></p>
          </div>
        </div>

        <div className="card">
          <Link to="/productdetails">
            <img src={v5} alt="v5" className="vehi" />
          </Link>
          <div className="card-info">
            <span className="auction-status timed">2D: 12H: 34Min: 52Sec</span>
            <h3>Product Name</h3>
            <p>Variant</p>
            <p>$55 <span className="bid-type">(Minimum Bid)</span></p>
          </div>
        </div>
      </Slider>
      </div>
      

      <div className="Hero-content">
      <div className="bg2">
        <img src={bg2} alt="bg2" className="image2" />
        <div className="overlay">
          <p>Trusted Partners</p>
          <h2>Partnering with the Most Trusted Names in the Industry</h2>
          <p>
            Our auctions are backed by reputable companies, ensuring you get the best quality and service with every bid. In Collaboration with Industry Leaders—Ensuring Quality and Reliability in Every Auction.
          </p>
        </div>
      </div>



      <div className="container mt-5 featured-section">
  <div className="content">
    <span className="most-viewed">Track Records</span>
    <h2 className="title">Our Proven Track Record Speaks
    for Itself</h2>
  </div>
</div>


      <div className="counters-section text-center mt-5" ref={countersRef}>
        <div className="counter-item">
          <h3>{isInView ? <CountUp start={0} end={1000} duration={2.5} /> : '1000'}</h3>
          <p>Happy Customers</p>
        </div>
        <div className="counter-item">
          <h3>{isInView ? <CountUp start={0} end={150} duration={2.5} /> : '500'}K</h3>
          <p>Total Auctions</p>
        </div>
        <div className="counter-item">
          <h3>{isInView ? <CountUp start={0} end={500} duration={2.5} /> : '500'}</h3>
          <p>Vehicles Sold</p>
        </div>
        <div className="counter-item">
          <h3>{isInView ? <CountUp start={0} end={98} duration={2.5} /> : '500'}%</h3>
          <p>Auction Success rate</p>
        </div>
      </div>
    </div>

      {/* Trusted Partners Section */}
      <div className="bg2">
        <img src={bg2} alt="bg2" className="image2" />
        <div className="overlay">
          <p>let's get started</p>
          <h2>Ready to Start Bidding?</h2>
          <p>
          Create an Account and Join the Excitement—Your Next Vehicle is Just a Bid Away!
          </p>
        </div>
      </div>
    </div>
    
  );
};


export default Hero;
