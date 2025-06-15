import React from 'react';
import './hero_section.css'; 
import userProfile from '../../assets/userProfile.png';
import googlePlay from '../../assets/Google Play logo.png';
import appleLogo from '../../assets/Apple logo.png';
import mobilePhone from '../../assets/mobilePhone.png';

function HeroSection({ title, description, showMobileStore = true }){
    return(
     <main className='hero-section'>
        <section className='section'>
          <div className="top-heroSection">

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

            <div className="veil-heading">
           <div className="veil-your-digits">
            <p className='veil-your-digits heading-texts'>{title}<br /></p>
            <p className='Powerful-self-serve-product'>{description}</p>
           </div>
             {showMobileStore && (
           <div className="mobile-app-store">
            <div className="google-play">
               <div className="google-icon">
               <img className='googlePlayLogo' src={googlePlay} alt="Google Play logo" />
               </div>
               <div className="app-store-text">
               <p className='download-on-the'>GET IT ON</p>
               <p className='app-store-download'>Google Play</p>
               </div>
            </div>

            <div className="app-store">
               <div className="apple-icon">
               <img className='appleLogo' src={appleLogo} alt="Apple Logo" />
               </div>
               <div className="app-store-text">
               <p className='download-on-the'>Download on the</p>
               <p className='app-store-download'>App Store</p>
               </div>
               </div>
           </div>
           )}

           </div>
         </div>

         {}
         <div className="bottom-hero-section">
          {showMobileStore && (
            <div className="hero-img">
              <img className='mobilePhone' src={mobilePhone} alt="" />
            </div>
            )}
            
         </div>
        </section>
     </main>
    )
}
export default HeroSection;