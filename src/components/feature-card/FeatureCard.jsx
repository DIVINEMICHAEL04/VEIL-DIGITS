import "./FeatureCard.css";
import React from "react";
import userProfile from '../../assets/userProfile.png';
import featureFrame from '../../assets/feature-frame.png';

function FeatureCard() {
  return (
    <div className="feature-card">
      <section className="section">
      <div className="top-hero-section">
       <div className="announcing-product-launch">
                     <div className="hero-text">
                  <div className="announcing-product-launch users-profile">
                     <img className='users-profile-img' src={userProfile} alt="users-profile" />
                  </div>
                   <div className="announcing-product-launch text">
                      <p>Announcing our latest product launch</p>
                   </div>
                   </div>
                 </div>

           <div className="veil-your-digits">
            <p className='veil-your-digits heading-texts'>Features</p>
            <p className='Powerful-self-serve-product'>
              What makes us the best choice for all 
              your anonymous call and messaging <br />
              needs, personal or business, we got you!!!</p>
           </div>

           <div className="hero-farme">
            <img className="feature-frame" src={featureFrame} alt="feature-frame" />
           </div>
           {/* todo.... complete the image designs */}
           </div>
           </section>
     </div>
  );
}
export default FeatureCard;