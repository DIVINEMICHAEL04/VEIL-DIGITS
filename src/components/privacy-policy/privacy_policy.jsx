import React from 'react';
import './privacy_policy.css'; 
import privacyImg from '../../assets/privacy-image.jpg';

function PrivacyPolicy(){
    return(
        <div className="privacy-policy-section about-bg-img privacy-img">
            <div className="contact-us-container bg-overlay">
              <div className='about-veildigits contact-veildigits'>
            <p className='about-veildigits-heading'>privacy Policy</p>
            <p className='about-veildigits-first-paragraph'>
              Your Privacy Comes First.
              At VeilDigits, we’re committed to protecting your privacy. 
              Our platform is designed to give you control over your identity and how you communicate—without compromise.
            </p>
          </div>
        </div>
        </div>
    )
}
export default PrivacyPolicy