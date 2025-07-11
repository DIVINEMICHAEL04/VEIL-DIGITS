import React from 'react';
import { Link } from 'react-router-dom';
import './footer_section.css';

import facebook from '../../assets/facebook-icon.png';
import twitter from '../../assets/twitter-icon.png';
import instagram from '../../assets/instagram-icon.png';
import youtube from '../../assets/youtube-icon.png';
import linkedIn from '../../assets/linkedIn-icon.png';
import tiktok from '../../assets/tiktok-icon.png';
import VeilDigitsLogo from '../../assets/vd-logo.png';
import googlePlay from '../../assets/Google Play logo.png';
import appleLogo from '../../assets/Apple logo.png';

function FooterSection() {
  return (
    <footer className="footer-section">
      <div className="footer-section-intro-text">
        {/* Logo & Description */}
        <div className="footer-text">
          <div className="veil-logo">
            <img src={VeilDigitsLogo} alt="Veil Digits Logo" className="veil-digits-logo" />
            <h3 className="veil-digits">VeilDigits</h3>
          </div>
          <div className="short-paragraph">
            <p>
              Powerful, self-serve product and growth <br className='mobile-break'/>
              analytics to help you convert, engage, and <br className='mobile-break'/> retain more.
            </p>
          </div>
        </div>

        {/* Footer Links */}
        <div className="about-veildigitss">
          {/* About Us Links */}
          <div className="about-us-text">
            <h4 className="about-us">About Us</h4>
            
            <ul className="about-offers">
              <li><Link className="footer-link" to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Blog</Link></li>
              <li><Link className="footer-link" to="/Contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Contact Us</Link></li>
              <li><Link className="footer-link" to="/Privacy" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Privacy Policy</Link></li>
            </ul>
          </div>

          <div className="app-download">
          <div className="mobile-app-store footer-mobile-app-store">
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
      </div>

      {/* Footer Bottom */}
      <div className="right-resevered">
        <div className="copyright">
          <p>Copyright © 2016 - 2024 Your Company</p>
        </div>

        <div className="quick-links">
          <Link to="#"><img src={facebook} alt="Facebook" /></Link>
          <Link to="#"><img src={twitter} alt="Twitter" /></Link>
          <Link to="#"><img src={instagram} alt="Instagram" /></Link>
          <Link to="#"><img src={youtube} alt="YouTube" /></Link>
          <Link to="#"><img src={linkedIn} alt="LinkedIn" /></Link>
          <Link to="#"><img src={tiktok} alt="TikTok" /></Link>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
