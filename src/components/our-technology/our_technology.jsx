import React from 'react';
import './our_technology.css'; 
import techOne from '../../assets/tech-1-img.png';
import techTwo from '../../assets/tech-2-img.png';
import techThree from '../../assets/tech-3-img.png';
import techFour from '../../assets/tech-4-img.png';

function OurTechnology(){
    return(
        <div className="our-technology-section">
            <div className="our-technology-container">
                <div className="technology-heading-text">
                    <p className='our-technology'>Our Technology Stack</p>
                    <p className='our-technology-paragraph'>
                     VeilDigits is built using powerful, scalable tech to ensure every <br className='mobile-break' />
                     call, message, and interaction is smooth, secure, and fast.</p>
                </div>
                <div className="technology-img-cards">

                    <div className="top-tech-card">
                    <div className="tech-card-one">
                        <img className='tech-one-img' src={techOne} alt="" />
                        <div className="sub-tech-card">
                            <div className="zero-one-container">
                              <p className='zero-one'>01</p>
                            </div>
                            <div className="flutter-container">
                            <p className='flutter'>Flutter</p>
                            <p className='built-with-flutter'>Built with Flutter for seamless cross-platform experience</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="tech-card-two">
                        <div className="sub-tech-card">
                            <div className="transparency-container">
                                <p className='flutter'>Transparency</p>
                                <p className='built-with-flutter'>End-to-end encryption (AES-256, TLS in transit)</p>
                            </div>
                            <div className="tech-imgs">
                                <img className='tech-one-img tech-two' src={techTwo} alt="" />
                                <p className='zero-one'>02</p>
                            </div>
                        </div>
                    </div>
                    </div>

                    <div className="top-tech-card">

                    <div className="tech-card-two">
                      <div className="sub-tech-card">
                          <div className="transparency-container">
                              <p className='flutter'>Payments</p>
                              <p className='built-with-flutter'>Integrated with Paystack for in-app purchases and subscription payments</p>
                          </div>
                          <div className="tech-imgs">
                              <img className='tech-one-img tech-two' src={techThree} alt="" />
                              <p className='zero-one'>03</p>
                          </div>
                      </div>
                    </div>

                    <div className="tech-card-two">
                      <div className="sub-tech-card flex-column-reverse">
                          <div className="transparency-container">
                              <p className='flutter'>Communication</p>
                              <p className='built-with-flutter'>Uses VoIP infrastructure and encrypted telecom integration</p>
                          </div>
                          <div className="tech-imgs">
                              <img className='tech-one-img tech-three' src={techFour} alt="" />
                              <p className='zero-one'>04</p>
                          </div>
                      </div>
                    </div>

                    </div>
                </div>
            </div>
        </div>
    )

}
export default OurTechnology;