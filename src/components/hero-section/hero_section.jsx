import React from 'react';
import './hero_section.css'; 
import userProfile from '../../assets/userProfile.png';
import googlePlay from '../../assets/Google Play logo.png';
import appleLogo from '../../assets/Apple logo.png';
import mobilePhone from '../../assets/mobilePhone.png';

function HeroSection({ title, description, showMobileStore = true }) {
  return (
    <main className="hero-section">
      <section className="section">
        <div className="top-heroSection">
          {/* Product launch announcement */}
           <div className="announcing-product-launch auto">
             <div className="hero-paragraph">
               <div className="announcing-product-launch users-profile">
                 <img className="users-prof-img" src={userProfile} alt="users-profile" />
               </div>
               <div className="announcing-product-launch text">
                 <p>Announcing our latest product launch</p>
               </div>
             </div>
           </div>

          {/* Title and description */}
          <div className="veil-heading">
            <div className="veil-your-digits">
              <p className="heading-texts">{title}</p>
              <p className="Powerful-self-serve-product">{description}</p>
            </div>

            {/* App store links */}
            {showMobileStore && (
              <div className="mobile-app-store">
                <div className="google-play">
                  <img className="googlePlayLogo" src={googlePlay} alt="Google Play logo" />
                  <div className="app-store-text">
                    <p className="download-on-the">GET IT ON</p>
                    <p className="app-store-download">Google Play</p>
                  </div>
                </div>

                <div className="app-store">
                  <img className="appleLogo" src={appleLogo} alt="Apple logo" />
                  <div className="app-store-text">
                    <p className="download-on-the">Download on the</p>
                    <p className="app-store-download">App Store</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Phone mockup image */}
        {showMobileStore && (
          <div className="bottom-hero-section">
            <div className="hero-img">
              <img className="mobilePhone" src={mobilePhone} alt="Mobile phone preview" />
            </div>
          </div>
        )}
      </section>
    </main>
  );
}

export default HeroSection;
