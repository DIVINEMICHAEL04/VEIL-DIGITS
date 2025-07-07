import React, { useRef } from "react";
import "./business_design_section.css";
import arrowRight from "../../assets/design-right-arrow.png";
import arrowLeft from "../../assets/design-left-arrow.png";
import phoneStar from "../../assets/phone-star.png";
import halfPro from "../../assets/iPhone 15 Pro half.png";

function BusinessDesign() {
  const scrollRef = useRef();

  // Feature data with unique titles and descriptions
  const featureData = [
    {
      title: "Caller ID Shield",
      description: "Your real number stays hidden, no matter who you call or how often.",
    },
    {
      title: "Voicemail Drop",
      description: "Send a pre-recorded voicemail without the phone ringing at the other end.",
    },
    {
      title: "Call Reminders",
      description: "Set call reminders directly in the app so you never forget to follow up.",
    },
    {
      title: "Number Masking",
      description: "Mask your number during calls for an extra layer of privacy and control.",
    },
  ];

  // Handle horizontal scroll for feature cards
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -680 : 680;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="design-section section-background">
      <div className="green-background design-background">
        {/* Text content */}
        <div className="design-text">
          <div className="design-text-top">
            <p className="other-features">Other Features</p>
            <h1 className="describe-the-feature you">
              We offer more, much more to the mix.
            </h1>
            <p className="a-paragraph-text that">
              You lose nothing when you use VeilDigits,
              with all the functionalities of regular call apps still in our product.
            </p>
          </div>

          {/* Desktop arrow controls */}
          <div className="arrow">
            <div className="arrow-right" onClick={() => scroll("left")}>
              <img className="arrow-icon" src={arrowLeft} alt="arrow-left" />
            </div>
            <div className="arrow-right" onClick={() => scroll("right")}>
              <img className="arrow-icon" src={arrowRight} alt="arrow-right" />
            </div>
          </div>
        </div>

        {/* Feature cards carousel */}
        <div className="feature-iphone-15 phone-reverse" ref={scrollRef}>
          {featureData.map((feature, index) => (
            <div className="first-layout" key={index}>
              <div className="first-layout-img">
                <div className="layout-half-pro">
                  <img className="half-pro" src={halfPro} alt="iPhone" />
                </div>
              </div>
              <div className="star-feature">
                <div className="star">
                  <img src={phoneStar} alt="star-icon" />
                  <p>{feature.title}</p>
                </div>
                <div className="help-the-customer">
                  <p className="help-the-customer-text">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile arrow controls */}
        <div className="arrow mobile-screen">
          <div className="arrow-right" onClick={() => scroll("left")}>
            <img className="arrow-icon" src={arrowLeft} alt="arrow-left" />
          </div>
          <div className="arrow-right" onClick={() => scroll("right")}>
            <img className="arrow-icon" src={arrowRight} alt="arrow-right" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessDesign;
