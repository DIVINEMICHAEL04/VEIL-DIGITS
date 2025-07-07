import React from "react";
import "./business_grid_section.css";
import featuresIphone from "../../assets/features-15 Pro.png"; 

const featureData = [
  {
    id: 1,
    reverse: false,
    topText: "Brand Security",
    heading: "Threat Monitoring",
    description:
      "Advanced brand protection platform using AI and community feedback to detect and monitor fraudulent activity.",
  },
  {
    id: 2,
    reverse: true,
    topText: "Brand Authenticity",
    heading: "Risk Intelligence",
    description:
      "Risk assessment and intelligence to mitigate potential frauds and minimize fraud.",
  },
];

function BusinessGridSection() {
  return (
    <main className="main">
      <div className="feature-card-grid-section column">
        {featureData.map(({ id, reverse, topText, heading, description }) => (
          <div
            key={id}
            className={`image-display ${reverse ? "row-reverse" : "row"}`}
          >
            <div className="feature-text">
              <p className="top-feature">{topText}</p>
              <h1 className="describe-the-feature business-feature">{heading}</h1>
              <p className="a-paragraph-text">{description}</p>
            </div>
            <div className="iphone-15">
              <img
                className="features-iphone"
                src={featuresIphone}
                alt="Feature preview on iPhone"
              />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default BusinessGridSection;
