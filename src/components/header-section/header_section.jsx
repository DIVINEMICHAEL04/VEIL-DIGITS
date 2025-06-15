import React from 'react';
import { Link } from 'react-router-dom';
import './header_section.css'; 
import logo from '../../assets/logo.png'; 
function HeaderSection (){
    return (
   <header className="header">
    <nav className="nav-bar">

        {/*  */}
        <div className="quick-links">
        <div className="logo">
            <div className="logo-img">
                <img src={logo} alt="Logo" />
            </div>
            <div className="veil-digit">VeilDigits</div>
        </div>
        {/* end of logo */}

        {/*  */}
        <div className="nav-links">
            <ul>
                <li> <Link className='href' to="/">Home </Link></li>
                <li> <Link className='href' to="/feature">Feature </Link></li>
                <li> <Link className='href' to="">Business </Link></li>
                <li> <Link className='href' to="/pricing">Pricing </Link></li>
            </ul>
        </div>
        </div>
        {/* end of nav-links */}

        {/*  */}
        <button className="download-btn">
            Download
        </button>
        {/* end of download-btn*/}


    </nav>
   </header>
    )
}
export default HeaderSection;