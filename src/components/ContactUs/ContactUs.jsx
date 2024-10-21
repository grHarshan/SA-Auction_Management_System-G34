import React from 'react';
import './ContactUs.css';
import { Link } from 'react-router-dom';
import bg2 from '../../assets/bg2.png';
import phone from '../../assets/phone.jpg';
import mail from '../../assets/mail.jpg';
import location from '../../assets/location.jpg';


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

      <div className='title'>
                <div className='tagline'>We're Here to Help</div>
                <div className='contact-heading'>Contact Us</div>
            </div>

            {/* Input Section */}
            <div className='inputs-container'>
                <div className='input'>
                    <label className='label' htmlFor='name'>Name</label>
                    <input type='text' id='name' placeholder='Enter your name...' className='input-field' />

                    <label className='label' htmlFor='email'>Email</label>
                    <input type='email' id='email' placeholder='Enter your email...' className='input-field' />

                    <label className='label' htmlFor='message'>Message</label>
                    <textarea id='message' placeholder='Write your message...' className='textarea-field'></textarea>

                    <div className='checkbox-container'>
                        <input type='checkbox' id='terms' />
                        I accept the Terms.
                        
                    </div>

                    <div className='submit-container'>
                        <button type='submit' className='submit-btn'>Submit</button>
                    </div>
                </div>
                </div>
                <div className='contact-icons'>
                  
                  <img src={phone} className='imgC'></img>
                  <h1>Vv@gmail.com</h1>

                  <img src={mail} className='imgC'></img>
                  <h1>+94 715428765</h1>

                  <img src='location' className='imgC'></img>
                  <h1>1/12 A, Pitipna Road, Homagama.</h1>


                </div>
                </div>
                


           
   
      

     );
}
 
export default ContactUs;