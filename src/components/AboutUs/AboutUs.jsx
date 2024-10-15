import React from 'react'
import bg2 from '../../assets/bg2.png';
import './AboutUs.css';
 

const AboutUs = () => {
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
    </div>
  )
}

export default AboutUs
