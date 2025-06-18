import React, { useRef } from "react";
import "./design_section.css";
import arrowRight from "../../assets/arrows-right.png";
import arrowLeft from "../../assets/arrow-left.png";
import phoneStar from "../../assets/phone-star.png";
import halfPro from "../../assets/iPhone 15 Pro half.png";

function DesignSection() {
  const scrollRef = useRef();

  // Handle horizontal scroll for feature cards
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "right" ? 300 : -300;
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
            <h1 className="you">
              Describe the feature <br />
              you want to highlight
            </h1>
            <p className="that">
              A paragraph text that goes more in depth <br />
              about how the feature can help the <br />
              customer save time and resources.
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
          {[1, 2, 3, 4].map((_, index) => (
            <div className="first-layout" key={index}>
              <div className="first-layout-img">
                <div className="layout-half-pro">
                  <img className="half-pro" src={halfPro} alt="iPhone" />
                </div>
              </div>
              <div className="star-feature">
                <div className="star">
                  <img src={phoneStar} alt="star-icon" />
                  <p>Feature {index + 1}</p>
                </div>
                <div className="help-the-customer">
                  <p className="help-the-customer-text">
                    A paragraph text that goes more in depth about how <br />
                    the feature can help the customer.
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
