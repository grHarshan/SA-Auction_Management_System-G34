import React from 'react'
import bg2 from '../../assets/bg2.png';
import './productdetails.css';
import car1 from '../../assets/car1.png';
import v2 from '../../assets/v2.png'; 
import v3 from '../../assets/v3.png'; 
import v5 from '../../assets/v5.png'; 
import { Link } from 'react-router-dom'; 


const productdetails = () => {
  return (
    
    <div>
      <div>
         <div className="bg2">
             <img src={bg2} alt="bg2" className="image" />
               <div className="overlay">
                <h2>Detailed Vehicle Information</h2>
                      <p>
                      Get Comprehensive Insights on Every Vehicle—Specifications,
                       History, and More to Make an Informed Bid.<br /> <br />
                     </p>  <br /> <br />
                <p>
       
    </p>
  </div>
</div>
    </div>
    <div className="container">
    <div className="cardx">
        
        <img src={car1} alt="car1" className="vehi" /> 
           
      
      </div>
      
      <div className="form-container">
        <div className="input-container">
          <h1>Vehicle Name</h1>
          <p>$55 </p> <br />
          <button className="button">Live Auction</button><br /><br />
           <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi 
           quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
           </p>
           <br />

           <p>Variant</p>
        </div><br />
        <div className="search-sort1">
           
          <select>
            <option value="default">Select here</option>
            <option value="rank">Rank</option>
            <option value="item">Item</option>
            <option value="status">Status</option>
          </select>
        </div><br />
        <p>Variant</p><br />
         <div className="buttnvar">
          <button type="submit">Option one</button>
          <button type="submit">Option two</button>
          <button type="submit">Option three</button>
         </div>
         <br /><br />

         <div className="bidbutton"><Link to="/bid" >
         <button className="button33">BID Now</button></Link>
        
         </div><br /><br />
         <div className="bidbutton2">
         <button className="button333">Add to Favourite</button>
         </div>
       <div className="details"> <br />
        <p>Details</p><br />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et 
          justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
       </div><br /><br />
       <div className="shipp">
        <p>Shipping</p> <br />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus 
          id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
       </div> <br /><br />
       <div className="returns">
        <p>Returns</p><br />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo c
          ursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
       </div>
      </div>
    </div>
    <div className="container">
      <div className="auction-info">
        <span className="most-viewed">MOST VIEWED</span>
        <h2 className="title">Featured Auctions</h2>
        <p>Top Vehicles at Unbeatable Starting Bids - Place Your Bid Now and Drive Away with a Deal!</p>
      </div>
      <Link to="/allvehicles" className="btn">See more</Link>
    </div>

    <div className="card-container">
        <div className="card">
        <Link to="/productdetails" >
        <img src={car1} alt="car1" className="vehi" /></Link>
          <div className="card-info">
            <span className="auction-status live">Live Auction</span>
            <h3>Product Name</h3>
            <p>Variant</p>
            <p>
              $55 <span className="bid-type">(Highest Bid)</span>
            </p>
          </div>
        </div>

        <div className="card">
        <img src={v2} alt="v2" className="vehi" />
          <div className="card-info">
            <span className="auction-status live">Live Auction</span>
            <h3>Product Name</h3>
            <p>Variant</p>
            <p>
              $55 <span className="bid-type">(Highest Bid)</span>
            </p>
          </div>
        </div>


        <div className="card">
        <img src={v3} alt="v3" className="vehi" />
          <div className="card-info">
            <span className="auction-status timed">2D: 12H: 34Min: 52Sec</span>
            <h3>Product Name</h3>
            <p>Variant</p>
            <p>
              $55 <span className="bid-type">(Minimum Bid)</span>
            </p>
          </div>
        </div>

        <div className="card">
        <img src={v5} alt="v5" className="vehi" />
          <div className="card-info">
            <span className="auction-status timed">2D: 12H: 34Min: 52Sec</span>
            <h3>Product Name</h3>
            <p>Variant</p>
            <p>
              $55 <span className="bid-type">(Minimum Bid)</span>
            </p>
          </div>
        </div>
      </div>




    </div>
    
  )
}

export default productdetails
