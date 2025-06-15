import React from 'react';
import { Link } from 'react-router-dom';
import './footer_section.css'
import facebook from '../../assets/facebook-icon.png';
import twitter from '../../assets/twitter-icon.png';
import instagram from '../../assets/instagram-icon.png';
import youtube from '../../assets/youtube-icon.png';
import linkedIn from '../../assets/linkedIn-icon.png';
import tiktok from '../../assets/tiktok-icon.png';
import VeilDigitsLogo from '../../assets/vd-logo.png';

function footerSection(){
    return(
        <div className="footer-section">
            <div className="footer-section-intro-text">
            <div className="footer-text">
                <div className="veil-logo">
                    <img className='veil-digits-logo' src={VeilDigitsLogo} alt="Veil-digits-logo" />
                    <h3 className='veil-digits'>VeilDigits</h3>
                </div>
                <div className="short-paragraph">
                    <p>Write a short paragraph that explains what your <br />
                     company helps customers with.</p>
                </div>
            </div>


            <div className="about-veildigits">
              <div className="about-us-text">
                <div className="about-us">About Us</div>
                 <div className="about-offers">
                 <ul>
                <li> <Link className='footer-link blog' to="/">Blog </Link></li>
                <li> <Link className='footer-link Contact' to="">Contact </Link></li>
                <li> <Link className='footer-link legal-docs' to="">Legal Docs </Link></li>
                <li> <Link className='footer-link cookie-policy' to="">Cookie Policy </Link></li>
                    </ul>
                 </div>
              </div>

              <div className="about-us-text company-quick-links">
                <div className="about-us">Company</div>
                 <div className="about-offers">
                    <ul>
                <li> <Link className='footer-link' to="/">Our Story </Link></li>
                <li> <Link className='footer-link' to="">Careers </Link></li>
                <li> <Link className='footer-link' to="">Press </Link></li>
                <li> <Link className='footer-link' to="">Company </Link></li>
                    </ul>
                </div>
              </div>
              
            </div>
            </div>

            <div className="right-resevered">
                <div className="copyright">
                   <p>Copyright © 2016 - 2024 Your Company</p>
                </div>
                <div className="quick-links">
                    <Link to="">
                    <img className='facebook' src={facebook} alt="Facebook Logo" />
                    </Link>

                    <Link to="">
                    <img className='twitter' src={twitter} alt="Twitter Logo" />
                    </Link>

                    <Link to="">
                    <img className='instagram' src={instagram} alt="Instagram Logo" />
                    </Link>

                    <Link to="">
                    <img className='youtube' src={youtube} alt="Youtube Logo" />
                    </Link>

                    <Link to="">
                    <img className='linkedIn' src={linkedIn} alt="LinkedIn Logo" />
                    </Link>

                    <Link to="">
                    <img className='tiktok' src={tiktok} alt="Tiktok Logo" />
                    </Link>

                </div>
            </div>
        </div>
    )
}
export default footerSection;