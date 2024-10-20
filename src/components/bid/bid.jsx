import React from 'react'
import bg2 from '../../assets/bg2.png';
import './bid.css';
import car1 from '../../assets/car1.png';
import v2 from '../../assets/v2.png'; 
import v3 from '../../assets/v3.png'; 
import v5 from '../../assets/v5.png'; 
import { Link } from 'react-router-dom'; 
import FeaturedAuctions from '../FeaturedAuctions/FeaturedAuctions';


const productdetails = () => {
  return (
    
    <div>
      <div>
         <div className="bg2">
             <img src={bg2} alt="bg2" className="image" />
               <div className="overlay">
                <h2>Seamless Bidding and Secure Payments</h2>
                      <p>
                      Participate in Auctions with Confidence,Easy Bidding Process 
                      and Safe Payment Options for a Smooth Experience.<br /> <br />
                     </p>  <br /> <br />
                <p>
       
    </p>
  </div>
</div>
    </div>
    <div className="container">
      {/* Bidding Section */}
      <div className="bid-section">
        <h2>Place a Bid</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
        <ul className="bid-list">
          <li className="bid-item">
            <span>01</span>
            <span>Kumara Hettiarachi</span>
            <span>$ 400.00</span>
          </li>
          <li className="bid-item">
            <span>02</span>
            <span>Kumara Hettiarachi</span>
            <span>$ 380.00</span>
          </li>
          <li className="bid-item">
            <span>03</span>
            <span>Kumara Hettiarachi</span>
            <span>$ 370.00</span>
          </li>
          <li className="bid-item">
            <span>04</span>
            <span>Kumara Hettiarachi</span>
            <span>$ 240.00</span>
          </li>
          <li className="bid-item">
            <span>05</span>
            <span>Kumara Hettiarachi</span>
            <span>$ 220.00</span>
          </li>
        </ul>
        <div className="new-bid">
          <span>NEW</span>
          <input type="text" className="bid-name" placeholder="Your full name here" />
          <input type="text" className="bid-value" placeholder="Enter The Bid Value" />
        </div>
      </div>

      {/* Payment Section */}
      <div className="payment-section">
        <h2>Payment method</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
        <form className="payment-form">
          <div className="form-group">
            <label>Name on invoice</label>
            <input type="text" placeholder="Enter name on invoice" />
          </div>

          <div className="form-group">
            <label>Card number</label>
            <div className="card-number">
              <input type="text" placeholder="Enter card number" />
               
            </div>
          </div>

          <div className="form-group expiry-cvv">
            <div>
              <label>Expiry</label>
              <input type="text" placeholder="MM/YY" />
            </div>
            <div>
              <label>CVV</label>
              <input type="text" placeholder="CVV" />
            </div>
          </div>

          <div className="form-group">
            <label>Email address</label>
            <div className="card-number">
              <input type="email" value="hello@relume.io" disabled />
               
            </div>
          </div>

          <div className="form-group city-state-zip">
            <div>
              <label>City</label>
              <input type="text" placeholder="Enter city" />
            </div>
            <div>
              <label>State / Province</label>
              <input type="text" placeholder="Enter state" />
            </div>
            <div>
              <label>ZIP / Postal code</label>
              <input type="text" placeholder="Enter ZIP" />
            </div>
          </div>

          <div className="button-group">
          <button type="submit" className="save-btn">Save</button>
            <button type="button" className="cancel-btn">Cancel</button>
           
          </div>
        </form>
      </div>
    </div>

    <FeaturedAuctions />




    </div>
    
  )
}

export default productdetails
