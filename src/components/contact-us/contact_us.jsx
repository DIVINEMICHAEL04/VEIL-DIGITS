import React from 'react';
import './contact_us.css'; 

function ContactUs(){
    return(
        <div className="contact-us-section about-bg-img contact-us-img">
        <div className="contact-us-container bg-overlay">
              <div className='about-veildigits contact-veildigits'>
            <p className='about-veildigits-heading'>Contact Us</p>
            <p className='about-veildigits-first-paragraph'>
              We’re Here to Help—Always <br className='mobile-break'/>
              Whether it’s a question, a bug, a partnership idea, or just a hello—we’d love to hear from you.
            </p>
          </div>
        </div>
        </div>
    )
}
export default ContactUs;