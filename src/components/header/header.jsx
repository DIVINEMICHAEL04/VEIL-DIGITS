import React from 'react';
function Header (){
    return (
   <header className="header">
    <nav className="nav-bar">

        {/*  */}
        <div className="logo">
            <div className="logo-img"></div>
            <div className="veil-digit">VeilDigits</div>
        </div>
        {/* end of logo */}

        {/*  */}
        <div className="nav-links">
            <ul>
                <li>Home</li>
                <li>Features</li>
                <li>Business</li>
                <li>Pricing</li>
            </ul>
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
export default Header;