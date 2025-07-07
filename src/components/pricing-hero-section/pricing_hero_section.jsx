import React, { useRef, useState, useEffect } from "react";
import "./pricing_hero_section.css";
import userProfile from '../../assets/userProfile.png';
import tickSquare from '../../assets/tick-square.png';
import arrowDown from '../../assets/arrow-down.png';
import arrowRight from "../../assets/arrows-right.png";
import arrowLeft from "../../assets/arrow-left.png";

function PricingHeroSection() {
  const scrollRef = useRef();
  const cardRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "right" ? 400 : -400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setActiveIndex(i);
          }
        });
      },
      {
        root: scrollRef.current,
        threshold: 0.6,
      }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <div className="pricing-card">
      <section className="pricing-section">
        {/* Top hero content */}
        <div className="hero-top-section">
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

          <div className="veil-your-digits-heading">
            <p className="veil-your-digits-heading-texts">Pricing</p>
            <p className="Powerful-self-serve-product">
              Stay anonymous while making calls and sending messages.
              Whether you're a casual user <br className="mobile-break"/>
              or need advanced privacy features, we’ve got you covered.
            </p>
          </div>
        </div>

        {/* Subscription plans carousel */}
        <div className="hero-bottom">
          <div className="subscription">
            <div className="subscription-type">
              <div className="monthly-subscription">Monthly</div>
              <div className="anual-subscription">Anually</div>
            </div>
          </div>

          <div className="subscription-section feature-iphone-16" ref={scrollRef}>
            {/* Free Plan */}
            <div className="free-plan first-free-plan m-t" ref={(el) => (cardRefs.current[0] = el)}>
              <div className="sub-free-plan">
                <div className="free-plan-top-section">
                  <div className="top-sub-section">
                    <div className="free-btn">
                      <p className="Free">Free</p>
                    </div>
                    <p className="For-occasional">
                      For occasional users who need quick, secure <br />
                      anonymous calls.
                    </p>
                  </div>
                  <div className="free-plan-middle-section">
                    <div className="free-plan-middle-horizontal">
                      <h3>$0</h3>
                      <p className="month">/month</p>
                    </div>
                  </div>
                </div>

                <div className="free-plan-bottom-section">
                  {[...Array(4)].map((_, index) => (
                    <div className="free-plan-feature" key={index}>
                      <img className="tick-square" src={tickSquare} alt="tick-square" />
                      <p className="free-plan-feature-1">Free-plan-feature 1</p>
                    </div>
                  ))}
                </div>

                <div className="get-started">
                  <p className="get-started-p">Get started</p>
                </div>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="premium-plan-best-deal premium-plan" ref={(el) => (cardRefs.current[1] = el)}>
              <div className="best-deal-icon">
                <div className="best-deal">
                  <img src={arrowDown} alt="arrow-down" />
                  <p>Best Deal</p>
                </div>
              </div>

              <div className="free-plan black-bg">
                <div className="sub-free-plan">
                  <div className="free-plan-top-section">
                    <div className="top-sub-section">
                      <div className="premium-choices">
                        <div className="Premium-btn white-button">
                          <p className="Organisation black-text">Premium</p>
                        </div>
                        <div className="subscription hide">
                          <div className="subscription-type">
                            <div className="monthly-subscription">Monthly</div>
                            <div className="anual-subscription">Anually</div>
                          </div>
                        </div>
                      </div>
                      <p className="For-occasional white-text">
                        For power users who want complete control <br />
                        over their identity.
                      </p>
                    </div>

                    <div className="free-plan-middle-section">
                      <div className="Premium-plan-price">
                        <h3 className="Premium-price">$9.99</h3>
                        <p className="duration - month">/month</p>
                      </div>
                    </div>
                  </div>

                  <div className="free-plan-bottom-section">
                    {[...Array(4)].map((_, index) => (
                      <div className="free-plan-feature" key={index}>
                        <img className="tick-square" src={tickSquare} alt="tick-square" />
                        <p className="free-plan-feature-1 white-text">Free-plan-feature 1</p>
                      </div>
                    ))}
                  </div>

                  <div className="get-started">
                    <p className="get-started-p">Get started</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Organisation Plan */}
            <div className="free-plan organisation-plan m-t" ref={(el) => (cardRefs.current[2] = el)}>
              <div className="sub-free-plan">
                <div className="free-plan-top-section">
                  <div className="top-sub-section">
                    <div className="Organisation-btn">
                      <p className="Organisation">Organisation</p>
                    </div>
                    <p className="For-occasional">
                      For businesses and teams needing confidential <br />
                      communication.
                    </p>
                  </div>

                  <div className="free-plan-middle-section">
                    <div className="Organisation-plan-price">
                      <h3 className="price">$29.99</h3>
                      <p className="month">/month</p>
                    </div>
                  </div>
                </div>

                <div className="free-plan-bottom-section">
                  {[...Array(4)].map((_, index) => (
                    <div className="free-plan-feature" key={index}>
                      <img className="tick-square" src={tickSquare} alt="tick-square" />
                      <p className="free-plan-feature-1">Free-plan-feature 1</p>
                    </div>
                  ))}
                </div>

                <div className="get-started">
                  <p className="get-started-p">Get started</p>
                </div>
              </div>
            </div>
          </div>

          {/* Indicator and navigation arrows */}
          <div className="arrow arrow-indicator">
            <div className="indicator">
              {[0, 1, 2].map((_, i) => (
                <div
                  key={i}
                  className="white-indicator"
                  style={{
                    backgroundColor: i === activeIndex ? "#014220" : "#FFFFFF",
                  }}
                />
              ))}
            </div>
            <div className="pricing-arrow">
              <div className="arrow-right" onClick={() => scroll("left")}>
                <img className="arrow-icon left" src={arrowLeft} alt="arrow-left" />
              </div>
              <div className="arrow-right" onClick={() => scroll("right")}>
                <img className="arrow-icon" src={arrowRight} alt="arrow-right" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PricingHeroSection;
