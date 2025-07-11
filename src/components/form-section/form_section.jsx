import React from 'react';
import './form_section.css'; 
import { Link } from 'react-router-dom';


function FormSection() {
    return (
        <div className="form-container">
            <div className="form-section">
          <div className="users-form">
            <h2 className="form-heading">Get in Contact with Us</h2>
            <form className="contact-form">
                <div className="users-name">
                    <div className="user-surname">
                    <div className="users-first-name">
                        <p className='first-name'>First Name</p>
                        <input className='input-text' type="text" placeholder="first name" required />
                    </div>
                    <div className="users-first-name">
                        <p className='first-name'>Last Name</p>
                        <input className='input-text' type="text" placeholder="last name" required />
                    </div>
                    </div>
                </div>
                <div className="users-name">
                    <div className="users-first-name">
                    <p className='first-name'>Email Address</p>
                    <input className='input-text' type="email" placeholder="input your email address" required />
                    </div>
                </div>
                <div className="users-name">
                    <div className="users-first-name">
                    <p className='first-name'>Message</p>
                    <textarea className='text-box' placeholder="leave us a message" required></textarea>
                    </div>
                </div>
            </form>
            <div className="sub-btn">
              <button className='submit-btn' type="submit">Send message</button>
              </div>
          </div>
        </div>


          <div className="general-enquiries">
            <div className="business-and-partnerships">
                <div className="business-and-partnerships-top">
                    <p className='enquiries-text'>General Enquiries</p>
                    <p className='enquiries-paragraph'>For support, questions, or suggestions</p>
                </div>
                <div className="business-and-partnerships-top">
                    <Link className="veildigits-link" to="/"> support@veildigits.com</Link>
                </div>
            </div>
            <div className="business-and-partnerships">
                <div className="business-and-partnerships-top">
                    <p className='enquiries-text'>Business & Partnerships</p>
                    <p className='enquiries-paragraph'>Let’s build something great together</p>
                </div>
                <div className="business-and-partnerships-top">
                    <Link className="veildigits-link" to="/"> biz@veildigits.com</Link>
                </div>
            </div>
            <div className="business-and-partnerships">
                <div className="business-and-partnerships-top">
                    <p className='enquiries-text'>Location</p>
                    <p className='enquiries-paragraph'>785 15h Street, Office 478, Berlin, De 81566</p>
                </div>
                <div className="business-and-partnerships-top">
                    <Link className="veildigits-link" to="/"> View on Google Maps</Link>
                </div>
            </div>
            <div className="business-and-partnerships">
                <div className="business-and-partnerships-top">
                    <p className='enquiries-text'>Call Us</p>
                    <p className='enquiries-paragraph'>Mon-Fri 8am to 5pm</p>
                </div>
                <div className="business-and-partnerships-top">
                    <p className="veildigits-link">+234 000 000 0000 </p>
                </div>
            </div>
          </div>
        </div>
    );
}

export default FormSection;