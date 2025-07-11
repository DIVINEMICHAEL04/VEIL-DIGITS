import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './our_goal.css';
import ourMissionImg from '../../assets/our-mission-img.png';
import ourPromiseImg from '../../assets/our-promise-img.png';
import usDifferentImg from '../../assets/us-different-img.png';

function OurGoal() {
    useEffect(() => {
        AOS.init({
            duration: 650,
            easing: 'ease-in-out',
            once: true,
            offset: 100,
        });
    }, []);

    return (
        <div className="our-goal-section">
            <div className="our-goal-mc">
                <div
                    className="our-goal-container white-bg"
                    data-aos="fade-up"
                    data-aos-delay="0"
                >
                    <div className="our-goal-text">
                        <p className='our-promise black-font'>Our Mission</p>
                        <p className='our-promise-first-paragraph blackish-font'>
                            To create a secure, flexible, and fun communication experience that
                            respects your privacy and gives you full control over your identity. We're on 
                            a mission to make anonymous calling and messaging not just possible—but
                            effortless, reliable, and accessible to everyone.
                        </p>
                    </div>
                    <div className="our-goal-img">
                        <img className='our-mission-img' src={ourMissionImg} alt="Our Mission" />
                    </div>
                </div>
            </div>

            <div className="our-goal-mc">
                <div
                    className="our-goal-container burlywood-bg"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    <div className="our-goal-text p-texts">
                        <p className='our-promise ghost-white'>Our Promise</p>
                        <p className='our-promise-first-paragraph ghost-white'>
                            We're building VeilDigits on the principles of privacy, performance, and
                            people-first design. From end-to-end encryption to customizable caller IDs
                            and secure message handling, everything we do is to ensure you remain in 
                            control.
                        </p>
                        <p className='our-promise-first-paragraph ghost-white'>
                            We are backed by a passionate team of product thinkers, engineers,
                            designers, and privacy advocates who are committed to making 
                            anonymous communication seamless, secure, and smart.
                        </p>
                    </div>
                    <div className="our-goal-img">
                        <img className='our-mission-img' src={ourPromiseImg} alt="Our Promise" />
                    </div>
                </div>
            </div>

            <div className="our-goal-mc">
                <div
                    className="our-goal-container greenish-bg"
                    data-aos="fade-up"
                    data-aos-delay="400"
                >
                    <div className="our-goal-text">
                        <p className='our-promise ghost-white'>What Makes Us Different</p>
                        <ul className='our-goal-list ghost-white'>
                            <li>
                                True Anonymity: More than just number masking—VeilDigits offers 
                                randomly generated IDs and caller aliases, ensuring your real identity is
                                never revealed.
                            </li>
                            <li>
                                Dual Call Options: Make calls over data (VoIP) or your regular mobile line
                                —your privacy stays intact either way.
                            </li>
                            <li>
                                Magic Voice: Play with real-time voice changers to keep things fun or
                                untraceable.
                            </li>
                            <li>
                                🇳🇬 Made for Nigeria (and beyond): Tailored for our local network
                                environment, but built to scale globally.
                            </li>
                        </ul>
                    </div>
                    <div className="our-goal-img">
                        <img className='our-mission-img' src={usDifferentImg} alt="What Makes Us Different" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurGoal;
