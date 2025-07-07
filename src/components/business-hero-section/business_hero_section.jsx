import "./business_hero_section.css";
import React from "react";
import userProfile from '../../assets/userProfile.png';
import businessman from '../../assets/businessman-working.png';

function BusinessHeroCard() {
  return (
    <div className="feature-card">
      <section className="section">
        <div className="top-hero-section">
          <div className="announcing-product-launch auto">
            <div className="hero-paragraph">
              <div className="announcing-product-launch users-profile">
                <img className="users-prof-img" src={userProfile} alt="users-profile" />
              </div>
              <div className="announcing-product-launch text">
                <p>Announcing our latest product launch</p>
              </div>
            </div>
          </div>

          <div className="veil-your-digits">
            <p className="veil-your-digits heading-texts">Business</p>
            <p className="Powerful-self-serve-product">
              Leading organizations trust VeilDigits for
              Business to reach more customers,
              establish <br className="mobile-break"/> trust and manage risk.
            </p>
          </div>

          <div className="business-hero-frame">
            <div className="sub-hero-frame">
              <img className="feature-frame" src={businessman} alt="feature-frame" />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default BusinessHeroCard;
