import React from 'react';
import './ContactUs.css';
import { Link } from 'react-router-dom';
import bg2 from '../../assets/bg2.png';

const ContactUs = () => {
    return ( 
        <div>
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
      <div className='Inputs'>
        <div className='input'>
        <label className='name'>Name</label>
        <input type='text' name='name' placeholder='Type Yor Name...'></input>

        <label className='email'>Email</label>
        <input type='email' name='email' placeholder='Type Yor Email..'></input>

        <label className='message'>Message</label>
        <input type='text' name='message' rows={4} placeholder='Type Your Message..'/>

        </div>

        {/*terms section*/}
        <div className='aceept'>
            <input type='textbox' name='terms' required> I Accept the Terms</input>
           

        </div>
        

      </div>

      </div>
      

     );
}
 
export default ContactUs;