import React from 'react';
import './sell.css';
import bg2 from '../../assets/bg2.png';
import car1 from '../../assets/car1.png';

const sell = () => {
  return (
    <div>
       <div className="bg2">
        <img src={bg2} alt="bg2" className="image" />
        <div className="overlay">
          <h2>Meet the Team</h2>
          <p>
          Together, We Achieve More.
          </p>
        </div>
      </div>
      
      <div className="para">
       
       <h1>
       Vehicle Details
       </h1>
       <p>Describe Your Vehical Details To Make Easy To Find</p>
      </div> <br /><br />
      <div className="vehicle-inputs">
          <input type="text" placeholder="SELECT YOUR VEHICLE TYPE" />
          <input type="text" placeholder="VEHICAL BRAND NAME" />
          <input type="text" placeholder="DESCRIPTION ABOUT VEHICLE " />
          <input type="text" placeholder="DESCRIPTION ABOUT CONDITION   " />
          <input type="text" placeholder="LOCATE ADDRESS  " />
           
           
        </div>
        <div className="vapp">
        <h1>Vehicle APPEAPPEARANCE </h1>
        <p>Make Sure To Add Detailed Pictures</p>
        </div>
        <div className="container">
           
    <div className="cardx">
        
        <img src={car1} alt="car1" className="vehi" /> 
           
      
      </div>
      
      <div className="form-containerx">
        <div className="input-container">

        <input type="text" placeholder="SELECT YOUR VEHICLE TYPE" />
          <input type="text" placeholder="VEHICAL BRAND NAME" />
          <input type="text" placeholder="DESCRIPTION ABOUT VEHICLE " />
          <input type="text" placeholder="DESCRIPTION ABOUT CONDITION   " />
          <input type="text" placeholder="LOCATE ADDRESS  " />


           </div>
         </div>
         </div>
    </div>
  )
}

export default sell
