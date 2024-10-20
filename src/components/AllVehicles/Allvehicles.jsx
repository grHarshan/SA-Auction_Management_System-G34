import React, { useEffect, useState } from 'react';
import bg2 from '../../assets/bg2.png';
import car1 from '../../assets/car1.png';
import v2 from '../../assets/v2.png';
import v6 from '../../assets/v6.png';
import v5 from '../../assets/v5.png';
import p1 from '../../assets/p1.jpg'; 
import { Link } from 'react-router-dom';  
import './allvehicles.css';

const Allvehicles = () => {
  const vehicleData = [
    {
      image: car1,
      name: "Luxury Car",
      variant: "Model X",
      price: 55000,
      auctionStatus: "Live Auction",
      auctionType: "live", // or "scheduled"
      countdownTime: 0, // No countdown for live auctions
      details: "Luxury vehicle with premium features. This car boasts a sleek design and advanced technology to ensure a superior driving experience. Equipped with leather interiors, a powerful engine, and the latest safety features, it's perfect for those who demand the best.",
      shippingDetails: "Free shipping available within 500 miles. Delivery time is approximately 5-7 business days after the auction ends.",
      returnDetails: "Returns accepted within 30 days of delivery. The vehicle must be in the same condition as received, with all original documentation."
    },
    {
      image: v2,
      name: "SUV",
      variant: "Model Y",
      price: 35000,
      auctionStatus: "Starts in 2D: 12H: 34Min",
      auctionType: "scheduled",
      countdownTime: 2 * 24 * 3600 + 12 * 3600 + 34 * 60, // Initial countdown time in seconds
      details: "Spacious and rugged SUV designed for adventure. With ample cargo space and seating for up to 7 passengers, this SUV is perfect for family outings or off-road adventures. It features an all-wheel-drive system, making it versatile for all terrains.",
      shippingDetails: "Shipping costs will vary based on location. Estimated delivery is within 7-10 business days.",
      returnDetails: "30-day return policy if the vehicle has not been driven more than 500 miles from the delivery location. Vehicle must be returned in the same condition."
    },
    {
      image: v6,
      name: "Sedan",
      variant: "Model Z",
      price: 25000,
      auctionStatus: "Live Auction",
      auctionType: "live",
      countdownTime: 0, // No countdown for live auctions
      details: "Stylish and fuel-efficient sedan perfect for daily commuting. The vehicle offers a smooth ride, with advanced safety features and a spacious interior. Ideal for anyone looking for a reliable and economical option without compromising on comfort.",
      shippingDetails: "Standard shipping within the continental US. Delivery typically takes 5-7 business days.",
      returnDetails: "Returns are accepted within 15 days if the vehicle is in original condition. A 10% restocking fee will apply."
    },
    {
      image: v5,
      name: "Compact",
      variant: "Model A",
      price: 15000,
      auctionStatus: "Starts in 1D: 10H: 20Min",
      auctionType: "scheduled",
      countdownTime: 1 * 24 * 3600 + 10 * 3600 + 20 * 60, // Initial countdown time in seconds
      details: "Compact car with great mileage and an eco-friendly engine. This model is perfect for city driving, offering easy parking and low running costs. Enjoy features such as Bluetooth connectivity, a rearview camera, and a spacious interior for a compact car.",
      shippingDetails: "Shipping available with a flat fee of $300. Delivery in 5-7 business days after purchase.",
      returnDetails: "Returns allowed within 14 days. Vehicle must have less than 300 miles driven since delivery."
    }
  ];

  const CountdownCard = ({ vehicle }) => {
    const [timeLeft, setTimeLeft] = useState(vehicle.countdownTime);

    useEffect(() => {
      if (vehicle.auctionType === 'live') return; // No countdown for live auctions

      const timerId = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 0) {
            clearInterval(timerId);
            return 0; // Stop the countdown at 0
          }
          return prevTime - 1; // Decrease by 1 second
        });
      }, 1000);

      return () => clearInterval(timerId); // Cleanup the timer on component unmount
    }, [vehicle.auctionType]);

    const formatTime = (time) => {
      const days = Math.floor(time / (3600 * 24));
      const hours = Math.floor((time % (3600 * 24)) / 3600);
      const minutes = Math.floor((time % 3600) / 60);
      const seconds = time % 60;
      return `${days}D: ${hours}H: ${minutes}Min: ${seconds}Sec`;
    };

    return (
      <div className="card">
        <Link to="/productdetails" state={{ vehicle }}>
          <img src={vehicle.image} alt={vehicle.name} className="vehi" />
        </Link>
        <div className="card-info">
          {vehicle.auctionType === "live" ? (
            <span className="auction-status live">{vehicle.auctionStatus}</span>
          ) : (
            <span className="auction-status timed">{formatTime(timeLeft)}</span>
          )}
          <h3>{vehicle.name}</h3>
          <p>${vehicle.price}</p>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="bg2">
        <img src={bg2} alt="bg2" className="image" />
        <div className="overlay">
          <h2>Find Your Perfect Ride</h2>
          <p>Browse Our Extensive Vehicle Collection—From Luxury Cars to Budget-Friendly Options, There's Something for Everyone.</p>
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
        {vehicleData.map((vehicle, index) => (
          <CountdownCard key={index} vehicle={vehicle} />
        ))}
      </div>
      <div className="card-container">
        {vehicleData.map((vehicle, index) => (
          <CountdownCard key={index} vehicle={vehicle} />
        ))}
      </div>
      <div className="card-container">
        {vehicleData.map((vehicle, index) => (
          <CountdownCard key={index} vehicle={vehicle} />
        ))}
      </div><div className="card-container">
        {vehicleData.map((vehicle, index) => (
          <CountdownCard key={index} vehicle={vehicle} />
        ))}
      </div>
    </div>
  );
}

export default Allvehicles;
