import React from 'react';
import './core_value.css'; 

function CoreValue() {
    return(
        <div className="core-value-section">
            <div className="core-value-container">
                <h2 className="core-value-heading">What We Belive (Core Values)</h2>
                <p className="core-value-text">
                    Every innovation starts with a problem. Ours was simple: people were tired of sharing 
                    their real number just to make a call. From journalists and creators to everyday users,
                    we saw a growing need for private communication in an always-connected world.
                    So, we built VeilDigits—a product born out of a desire for privacy, security, and fun.
                </p>
                <ul className="core-value-list">
                    <div className="privacy-container">
                    <div className="privacy-section">
                        <p className='privacy-heading'>Privacy is a Right</p>
                        <p className='privacy-paragraph'>
                            We believe communication should be secure and confidential by default.
                        </p>
                    </div>

                    <div className="privacy-section">
                        <p className='privacy-heading'>Simplicity Matters</p>
                        <p className='privacy-paragraph'>Tech doesn’t have to be complicated. We design VeilDigits to be intuitive and easy to use.</p>
                    </div>
                    </div>
                    <div className="privacy-container">
                    <div className="privacy-section">
                        <p className='privacy-heading'>User-First Always</p>
                        <p className='privacy-paragraph'>We listen, we learn, and we build features that serve real people with real needs.</p>
                    </div>

                    <div className="privacy-section">
                        <p className='privacy-heading'>Freedom to Connect</p>
                        <p className='privacy-paragraph'>Whether it's business, personal, or playful—you should be able to communicate without compromise.</p>
                    </div>
                    </div>
                </ul>
            </div>
        </div>
    )
}
export default CoreValue;