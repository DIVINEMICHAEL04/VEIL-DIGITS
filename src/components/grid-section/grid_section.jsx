import React from "react";
import "./grid_section.css";
import featuresIphone from "../../assets/features-15 Pro.png";

const featureData = [
  {
    id: 1,
    reverse: false,
    topFeature: "Hidden ID Calling",
    headingText: "Make calls without revealing your real number",
    paragraphText: "Stay anonymous with every call. Use randomly generated IDs or create a custom permanent one—your real number stays completely hidden.",
  },
  {
    id: 2,
    reverse: true,
    topFeature: "VoIP + SIM Call Support",
    headingText: "Call over internet or your mobile line—your way",
    paragraphText: "Choose how you call—using data or your regular airtime. Either way, your caller ID stays protected and private.",
  },
  {
    id: 3,
    reverse: false,
    topFeature: "Magic Voice",
    headingText: "Change your voice. Add a little mystery—or fun",
    paragraphText: "Prank a friend or protect your identity with real-time voice effects like robot, child, deep voice and more during any call.",
  },
  {
    id: 4,
    reverse: true,
    topFeature: "Encrypted & Alias-Powered History",
    headingText: "Describe the feature you want to highlight",
    paragraphText: "All calls are fully encrypted, and your call history only shows random names—never real numbers.",
  },
];

function BusinessGridSection() {
  return (
    <main className="main">
      <div className="feature-card-grid-section column">
        {featureData.map(({ id, reverse, topFeature, headingText, paragraphText }) => (
          <div key={id} className={`image-display ${reverse ? "row-reverse" : "row"}`}>
            <div className="feature-text">
              <p className="top-feature">{topFeature}</p>
              <h1 className="describe-the-feature">{headingText}</h1>
              <p className="a-paragraph-text">{paragraphText}</p>
            </div>
            <div className="iphone-15">
              <img className="features-iphone" src={featuresIphone} alt="Feature preview" />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default BusinessGridSection;
