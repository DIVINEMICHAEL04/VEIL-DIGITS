import React from 'react';
import './about_veil_digits.css'; 
import userProfile from '../../assets/userProfile.png';

function AboutVeilDigits() {
    return(
        <div className="about-bg-img">
            <div className="bg-overlay">
          <div className="announcing-product-launch launched">
            <div className="hero-paragraph">
              <div className="announcing-product-launch users-profile">
                <img className="users-prof-img" src={userProfile} alt="users-profile" />
              </div>
              <div className="announcing-product-launch text">
                <p>Announcing our latest product launch</p>
              </div>
            </div>
          </div>
          <div className='about-veildigits'>
            <p className='about-veildigits-heading'>About Us</p>
            <p className='about-veildigits-first-paragraph'>
              VeilDigits is more than just an app—it's a digital privacy revolution. We believe in empowering <br className='mobile-break'/>
              people to connect, communicate, and express themselves—without compromising their <br className='mobile-break'/>
              identity. In a world where personal data is constantly exposed, VeilDigits puts the control back in <br className='mobile-break'/> your hands.
            </p>
            <p className="about-veildigits-first-paragraph">
               We are a privacy-first communication platform built for individuals who want to stay in touch <br className='mobile-break'/>
               without revealing their personal phone number. Whether you're a journalist protecting a source,<br className='mobile-break'/>
               a parent engaging service providers, a creator managing public attention, or simply someone<br className='mobile-break'/>
               who values discretion—VeilDigits was made for you.
            </p>
          </div>
          </div>
        </div>
    )

}
export default AboutVeilDigits;