import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import bg2 from '../../assets/bg2.png';
import './productdetails.css';
import FeaturedAuctions from '../FeaturedAuctions/FeaturedAuctions';

const ProductDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { vehicle } = location.state || {}; 

    if (!vehicle) {
        return <p>No vehicle data found. Please go back and select a vehicle.</p>;
    }

    const handleBidClick = () => {
        navigate('/bid', { state: { vehicle } }); 
      };

    const isLiveAuction = vehicle.auctionType === 'live';

    return (
        <div>
            <div className="bg2">
                <img src={bg2} alt="Background" className="image" />
                <div className="overlay">
                    <h2>Detailed Vehicle Information</h2>
                    <p>Get Comprehensive Insights on Every Vehicle—Specifications, History, and More to Make an Informed Bid.</p>
                </div>
            </div>

            <div className="container">
                <div className="cardx">
                    <img src={vehicle.image} alt={vehicle.name} className="vehi" />
                </div>

                <div className="form-container">
                    <div className="input-container">
                        <h1>{vehicle.name}</h1>
                        <p>{"Minimum Bid = $"+vehicle.price}</p>
                        <button className="button" style={{ backgroundColor: isLiveAuction ? 'green' : 'orange', color: '#fff' }}>
                            {isLiveAuction ? 'LiveAuction' : 'Auction Starts Soon'}
                        </button>
                        
                        <p>Variant: {vehicle.variant}</p>
                    </div>

                    

                    <div className="details">
                        <h3>Details</h3>
                        <p>{vehicle.details}</p>
                    </div>

                    <div className="shipp">
                        <h3>Shipping</h3>
                        <p>{vehicle.shippingDetails}</p>
                    </div>

                    <div className="returns">
                        <h3>Returns</h3>
                        <p>{vehicle.returnDetails}</p>
                    </div>

                    <div className="bidbutton">
                        <button className="button33" onClick={handleBidClick}>BID Now</button>
                    </div>
                </div>
            </div>
            <FeaturedAuctions />
            
        </div>
    );
};

export default ProductDetails;
