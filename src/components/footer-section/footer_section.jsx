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
              Write a short paragraph that explains what your <br />
              company helps customers with.
            </p>
          </div>
        </div>

        {/* Footer Links */}
        <div className="about-veildigits">
          {/* About Us Links */}
          <div className="about-us-text">
            <h4 className="about-us">About Us</h4>
            <ul className="about-offers">
              <li><Link className="footer-link" to="/">Blog</Link></li>
              <li><Link className="footer-link" to="#">Contact</Link></li>
              <li><Link className="footer-link" to="#">Legal Docs</Link></li>
              <li><Link className="footer-link" to="#">Cookie Policy</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="about-us-text company-quick-links">
            <h4 className="about-us">Company</h4>
            <ul className="about-offers">
              <li><Link className="footer-link" to="/">Our Story</Link></li>
              <li><Link className="footer-link" to="#">Careers</Link></li>
              <li><Link className="footer-link" to="#">Press</Link></li>
              <li><Link className="footer-link" to="#">Company</Link></li>
            </ul>
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
