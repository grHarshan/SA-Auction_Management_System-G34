import React from 'react';
import './ContactUs.css';
import { Link } from 'react-router-dom';
import bg2 from '../../assets/bg2.png';
import Con1 from '../../assets/Con1.jpg';

const ContactUs = () => {
    return ( 
        <div >
      {/* Background Image Section */}
      <div className="bg2">
        <img src={bg2} alt="bg2" className="image" />
        <div className="overlay">
          <h2>Get in Touch with Us</h2>
          <p>Reach out with your quesctions,comments or concerns.We are here to assist.</p>
        </div>
      </div>

      {/*title section*/}

      <div className='title'>
        <div className='tagline'>Tagline</div>
        <div className='ContactUs'>Contact Us</div>
      </div>

      {/*input section*/}
      <div className='form-section'>
      <div className='Inputs'>
        <div className='input'>
        <label className='name'>Name</label>
        <input type='text' name='name' placeholder='Type Yor Name...'></input>

        <label className='email'>Email</label>
        <input type='email' name='email' placeholder='Type Yor Email..'></input>

        <label className='message1'>Message</label>
        <textarea type='text' name='message2'placeholder='Type Your Message..'/>

        <div className=' checkbox-container'>
          <label><input type='checkbox' name='terms'></input>
          <span>I Accept the Terms</span></label>
        

        </div>

        <div className='submit-container'>
          <button type='button' name='submit'>Submit</button>
        </div>

        </div>
      
        </div>
        <div className='image'>
      <img src={Con1} alt="Contact" className="Contact-image" />
      </div>
        
        

      </div>

      
      </div>
      
      
      

     );
}
 
export default ContactUs;