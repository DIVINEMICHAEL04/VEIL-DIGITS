import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header_section.css';
import logo from '../../assets/logo.png';
import DownloadIcon from '../../assets/Download.png';
import menuIcon from '../../assets/menu.png';
import closeIcon from '../../assets/cancel.png';

function HeaderSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  const getActiveClass = (path) => location.pathname === path ? 'active-link' : '';

  return (
    <header className="header">
      <nav className="nav-bar">
        <div className="logo-links">

          <div className="quick-links">
            <div className="menu-icon" onClick={toggleMenu}>
              <img className="menu" src={menuIcon} alt="Menu" />
            </div>

            <div className="logo">
              <img className="vd-logo" src={logo} alt="Logo" />
              <span className="veil-digit">VeilDigits</span>
            </div>
          </div>

          <div className={`nav-links-slide ${isMenuOpen ? 'open' : ''}`}>
            <div className="close-icon" onClick={toggleMenu}>
              <img src={closeIcon} alt="Close menu" />
            </div>
            <ul>
              <li><Link className={`href ${getActiveClass('/')}`} to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</Link></li>
              <li><Link className={`href ${getActiveClass('/feature')}`} to="/feature" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Feature</Link></li>
              <li><Link className={`href ${getActiveClass('/About')}`} to="/About" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>About Us</Link></li>
              <li><Link className={`href ${getActiveClass('/business')}`} to="/business"  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Business</Link></li>
              <li><Link className={`href ${getActiveClass('/pricing')}`} to="/pricing"  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Pricing</Link></li>
            </ul>
          </div>

        </div>

        <button className="download-btn">
          <p>Download</p>
          <img className="Download" src={DownloadIcon} alt="Download icon" />
        </button>
        
      </nav>
    </header>
  );
}

export default HeaderSection;
