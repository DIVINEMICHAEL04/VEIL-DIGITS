import React, { useState, useEffect } from 'react';
import './table_of_content_section.css';
import iconArrowDown from '../../assets/icon-arrow-down.svg';
import iconArrowUp from '../../assets/icon-arrow-up.svg';

function TableOfContentSection() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleDropdown = () => {
        if (isMobile) {
            setIsDropdownOpen(prev => !prev);
        }
    };

    const shouldShowDropdown = !isMobile || isDropdownOpen;

    return (
        <div className="table-of-content-section">
            <div className="table-of-content-container">
                <div className="left-content-container">
                    <p>Table of Content</p>
                    <div className="top-cookie-policy">
                        <ol className="cookie-policy-list">
                            <div className="table-of-content-img" onClick={toggleDropdown}>
                                <li className="table-of-content-first-li">Cookie Policy</li>
                                <img
                                    className="arrow-icon"
                                    src={isDropdownOpen ? iconArrowUp : iconArrowDown}
                                    alt="Toggle Dropdown Icon"
                                />
                            </div>

                            {shouldShowDropdown && (
                                <>
                                    <li className='table-content-li-two'>How We Use Cookies?</li>
                                    <li className='table-content-li-two'>Personal Information</li>
                                    <li className='table-content-li-two' value={4}>Other Policies</li>
                                </>
                            )}
                        </ol>

                        {shouldShowDropdown && (
                            <div className="corrects-updates">
                                <div className="website-contact">
                                    <p>4.1 Correct/Update</p>
                                    <p>4.2 Links</p>
                                    <p>4.3 Online Payment Methods</p>
                                    <p>4.4 Data Retention Policy</p>
                                    <p>4.5 Contacting The Web Site</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="right-content-container">
                    <div className="right-content-container-column">
                        <p className="right-content-container-column-heading">1. Cookie Policy</p>
                        <p className="right-content-container-column-paragraph">
                            What are Cookies? As is common practice with almost all professional websites, this site uses cookies to improve your experience. This section describes what information they gather, how we use it, and why we sometimes need to store these cookies.
                        </p>
                    </div>

                    <div className="right-content-container-column">
                        <p className="right-content-container-column-heading">2. How We Use Cookies?</p>
                        <div className="how-we-use-our-cookies">
                            <p className="right-content-container-column-paragraph">
                                We intend to use cookies for a variety of reasons detailed below: Recognise you as an APEXPAY user.
                            </p>
                            <p className="right-content-container-column-paragraph">
                                If you create an account with us, then we may use cookies for the management of the signup process and general administration.
                            </p>
                            <p className="right-content-container-column-paragraph">
                                Session cookies expire when you log out or close your browser. Persistent cookies stay until erased or expired.
                            </p>
                            <p className="right-content-container-column-paragraph">
                                We may use Local Shared Objects (Flash cookies) to help ensure your account security is not compromised.
                            </p>
                            <p className="right-content-container-column-paragraph">
                                Third-party cookies, such as Google Analytics, may also be used.
                            </p>
                            <p className="right-content-container-column-paragraph">
                                Understanding purchase behavior through cookie data helps us improve our services.
                            </p>
                            <p className="right-content-container-column-paragraph">
                                If unsure, it’s usually safer to leave cookies enabled.
                            </p>
                        </div>
                    </div>

                    <div className="right-content-container-column">
                        <p className="right-content-container-column-heading">3. Personal Information</p>
                        <div className="how-we-use-our-cookies">
                            <p className="right-content-container-column-paragraph">
                                "Personal information" is data that can identify a specific person. We protect it from loss or misuse.
                            </p>
                            <p className="right-content-container-column-paragraph">
                                Our purpose in collecting it is to provide a secure, customized experience.
                            </p>
                            <p className="right-content-container-column-paragraph">
                                We never use it beyond disclosed purposes without your permission.
                            </p>
                            <p className="right-content-container-column-paragraph">
                                We collect user-submitted and technical info such as browser type and IP address.
                            </p>
                            <p className="right-content-container-column-paragraph">
                                Data is processed securely using encryption, firewalls, and restricted access.
                            </p>
                            <p className="right-content-container-column-paragraph">
                                Credit card data is stored off-site (PCI DSS compliant). Personal data is retained securely for a minimum of 5 years.
                            </p>
                        </div>
                    </div>

                    <div className="right-content-container-column">
                        <p className="right-content-container-column-heading">4. Other Policies</p>
                        <div className="how-we-use-our-cookies">
                            <div className="how-we-use-our-cookies-container">
                                <p className="how-we-use-our-cookies-container-heading">4.1 Correct/Update</p>
                                <p className="how-we-use-our-cookies-container-paragraph">You may request updates to inaccurate data we hold about you.</p>
                            </div>
                            <div className="how-we-use-our-cookies-container">
                                <p className="how-we-use-our-cookies-container-heading">4.2 Links</p>
                                <p className="how-we-use-our-cookies-container-paragraph">This site may link to external websites. APEXPAY is not responsible for their practices.</p>
                            </div>
                            <div className="how-we-use-our-cookies-container">
                                <p className="how-we-use-our-cookies-container-heading">4.3 Online Payment Methods</p>
                                <p className="how-we-use-our-cookies-container-paragraph">APEXPAY is not affiliated with or endorsed by platforms like Paystack.</p>
                            </div>
                            <div className="how-we-use-our-cookies-container">
                                <p className="how-we-use-our-cookies-container-heading">4.4 Data Retention Policy</p>
                                <p className="how-we-use-our-cookies-container-paragraph">We retain personal data as long as required for business or legal purposes.</p>
                            </div>
                            <div className="how-we-use-our-cookies-container">
                                <p className="how-we-use-our-cookies-container-heading">4.5 Contacting The Web Site</p>
                                <p className="how-we-use-our-cookies-container-paragraph">Have questions about this privacy statement or our site? Contact us.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TableOfContentSection;
