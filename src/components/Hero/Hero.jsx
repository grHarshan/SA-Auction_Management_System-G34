import React, { useState, useEffect } from 'react';
import './Hero.css';
import bg from '../../assets/bg.png';
import bg2 from '../../assets/bg2.png';
import car1 from '../../assets/car1.png';
import v2 from '../../assets/v2.png';
import v5 from '../../assets/v5.png';
import v6 from '../../assets/v6.png';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CountUp from 'react-countup';
import useInView from '../../hooks/useInView'; 
import FeaturedAuctions from '../FeaturedAuctions/FeaturedAuctions';



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
      </div>


      <div className="Hero-content">
        <div className="bg2">
          <img src={bg2} alt="bg2" className="image2" />
          <div className="overlay">
            
            <h2>Explore Our Wide Selection</h2>
            <p>
            Discover a Diverse Range of Vehicles—From Everyday Cars to Exotic Models. Find the Perfect Fit for You.
            </p>
          </div>
        </div>
        </div>


        <FeaturedAuctions />

        <div className="Hero">


        <div className="Hero-content">
        <div className="bg2">
          <img src={bg2} alt="bg2" className="image2" />
          <div className="overlay">
           
            <h2>Partnering with the Most Trusted Names in the Industry</h2>
            <p>
              Our auctions are backed by reputable companies, ensuring you get the best quality and service with every bid. In Collaboration with Industry Leaders—Ensuring Quality and Reliability in Every Auction.
            </p>
          </div>
        </div>
        </div>




        <div className="container mt-5 featured-section">
          <div className="content">
            <span className="most-viewed">Track Records</span>
            <h2 className="title">Our Proven Track Record Speaks for Itself</h2>
          </div>
        </div>
        

        <div className="counters-section text-center mt-5" ref={countersRef}>
          <div className="counter-item">
            <h3>{isInView ? <CountUp start={0} end={1000} duration={2.5} /> : '1000'}</h3>
            <p>Happy Customers</p>
          </div>
          <div className="counter-item">
            <h3>{isInView ? <CountUp start={0} end={150} duration={2.5} /> : '150'}K</h3>
            <p>Total Auctions</p>
          </div>
          <div className="counter-item">
            <h3>{isInView ? <CountUp start={0} end={500} duration={2.5} /> : '500'}</h3>
            <p>Vehicles Sold</p>
          </div>
          <div className="counter-item">
            <h3>{isInView ? <CountUp start={0} end={98} duration={2.5} /> : '98'}%</h3>
            <p>Auction Success rate</p>
          </div>
        </div>
      

      <div className="Hero-content">
        <div className="bg2">
          <img src={bg2} alt="bg2" className="image2" />
          <div className="overlay">
            
            <h2>Explore Our Wide Selection</h2>
            <p>
           Discover a Diverse Range of Vehicles—From Everyday Cars to Exotic Models. Find the Perfect Fit for You.
            </p>
          </div>
        </div>
        </div>
        </div>
        
        <FeaturedAuctions />

        
        </div>

  );
};

export default Hero;
