import React, { useRef } from "react";
import "./design_section.css";
import arrowRight from "../../assets/arrows-right.png";
import arrowLeft from "../../assets/arrow-left.png";
import phoneStar from "../../assets/phone-star.png";
import halfPro from "../../assets/iPhone 15 Pro half.png";

const featureData = [
  {
    title: "Quick ID Switch",
    description: "Toggle between permanent and temporary caller IDs instantly before each call or message.",
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
    title: "Caller ID Shield",
    description: "Your real number stays hidden, no matter who you call or how often.",
  },
];

function DesignSection() {
  const scrollRef = useRef();

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "right" ? 620 : -620;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="design-section">
      <div className="green-background">
        {/* Text content */}
        <div className="design-text">
          <div className="design-text-top">
            <p className="other-features">Other Features</p>
            <h1 className="describe-the-feature you">
              We offer more, much more to the mix.
            </h1>
            <p className="a-paragraph-text that">
              You lose nothing when you use VeilDigits, <br className="mobile-break" />
              with all the functionalities of regular call <br className="mobile-break" /> apps still in our product.
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
        <div className="feature-iphone-15" ref={scrollRef}>
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

export default DesignSection;
