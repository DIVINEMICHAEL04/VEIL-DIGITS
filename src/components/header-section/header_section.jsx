import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header_section.css';
import logo from '../../assets/logo.png';
import DownloadIcon from '../../assets/Download.png';
import menuIcon from '../../assets/menu.png';
import closeIcon from '../../assets/cancel.png';

function HeaderSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  return (
    <header className="header">
      <nav className="nav-bar">

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
            <li><Link className="href" to="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link className="href" to="/feature" onClick={toggleMenu}>Feature</Link></li>
            <li><Link className="href" to="#" onClick={toggleMenu}>Business</Link></li>
            <li><Link className="href" to="/pricing" onClick={toggleMenu}>Pricing</Link></li>
          </ul>
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
