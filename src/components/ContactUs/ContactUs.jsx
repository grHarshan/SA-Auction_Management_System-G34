import React from 'react';
import './ContactUs.css';
import { Link } from 'react-router-dom';
import bg2 from '../../assets/bg2.png';
import phone from '../../assets/phone.jpg';
import mail from '../../assets/mail.jpg';
import locate from '../../assets/locate.jpg';


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
                    <input type='text' id='name' placeholder='Enter your name...' className='input-field' required />

                    <label className='label' htmlFor='email'>Email</label>
                    <input type='email' id='email' placeholder='Enter your email...' className='input-field'  required/>

                    <label className='label' htmlFor='message'>Message</label>
                    <textarea id='message' placeholder='Write your message...' className='textarea-field' required></textarea>

                    <div className='checkbox-container'>
                    <input type='checkbox' id='terms' required />
                    <label htmlFor='terms'>I accept the Terms.</label>
                        
                    </div>

                    <div className='submit-container'>
                        <button type='submit' className='submit-btn'>Submit</button>
                    </div>
                </div>
                </div>
                <div className='contact-icons'>
                  <div className='contact-item'>
                  <img src={phone} className='imgC'></img>
                  <h5>+94 758421523</h5>
                  </div>

                  <div className='contact-item'>
                  <img src={mail} className='imgC'></img>
                  <h5>Autovista@gmail.com</h5> 
                  </div>
                  
                  

                  <div className='contact-item'>
                  <img src={locate} className='imgC'></img>
                  <h5>1/12 A, Pitipna Road, Homagama.</h5>

                  </div>

                  


                </div>
                </div>
                


           
   
      

     );
}
 
export default ContactUs;