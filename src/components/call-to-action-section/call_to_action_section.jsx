import React from 'react';
import './call_to_action_section.css';

import googlePlay from '../../assets/Google Play logo.png';
import appleLogo from '../../assets/Apple logo.png';
import phone1 from '../../assets/phone-1.png';
import phone2 from '../../assets/phone-2.png';
import phone3 from '../../assets/phone-3.png';
import phone4 from '../../assets/phone-4.png';
import phone5 from '../../assets/phone-5.png';

function CallToActionSection() {
  return (
    <div className="call-to-action-section">

      {/* Text and download buttons */}
      <div className="call-to-action-section-text">
        <div className="call-to-action-section-download">
          <h2 className="download-the-app">Download The App</h2>
          <p className="visit-your-app-store">
            Visit your Google Play Store or Apple Store today to download the app. <br />
            Join the trend now.
          </p>
        </div>

        <div className="app-download">
          <div className="mobile-app-store">
            {/* Google Play Store Button */}
            <div className="google-play">
              <div className="google-icon">
                <img className="googlePlayLogo" src={googlePlay} alt="Google Play logo" />
              </div>
              <div className="app-store-text">
                <p className="download-on-the">GET IT ON</p>
                <p className="app-store-download">Google Play</p>
              </div>
            </div>

            {/* Apple Store Button */}
            <div className="app-store">
              <div className="apple-icon">
                <img className="appleLogo" src={appleLogo} alt="Apple App Store logo" />
              </div>
              <div className="app-store-text">
                <p className="download-on-the">Download on the</p>
                <p className="app-store-download">App Store</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* App preview phone images */}
      <div className="call-to-action-section-img">
        <div className="phone1">
          <img src={phone1} alt="Phone 1 preview" />
        </div>
        <div className="phone2">
          <img src={phone2} alt="Phone 2 preview" />
        </div>
        <div className="phone3">
          <img src={phone3} alt="Phone 3 preview" />
        </div>
        <div className="phone4">
          <img src={phone4} alt="Phone 4 preview" />
        </div>
        <div className="phone5">
          <img src={phone5} alt="Phone 5 preview" />
        </div>
      </div>
    </div>
  );
}

export default CallToActionSection;
