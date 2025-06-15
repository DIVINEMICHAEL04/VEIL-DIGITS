import React from 'react';
import './call_to_action_section.css';
import googlePlay from '../../assets/Google Play logo.png';
import appleLogo from '../../assets/Apple logo.png';
import mobileDisplay from '../../assets/mobile-displays.png';
function CallToActionSection(){
    return(
        <div className='call-to-action-section'>

            <div className="call-to-action-section-text">
                <div className="call-to-action-section-download">
                    <h2 className='download-the-app'>Download The App</h2>
                    <p className='visit-your-app-store'>Visit your Google play store or Apple Store today to down load the app. <br />
                       Join the trend now.
                    </p>
                </div>

                <div className="app-download">
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


                </div>
            </div>

            <div className="call-to-action-section-img">
                <img className='mobile-display' src={mobileDisplay} alt="" />
            </div>

        </div>
    )
}
export default CallToActionSection;