import React from "react";
import "./grid_section.css";
import featuresIphone from "../../assets/features-15 Pro.png";

const featureData = [
  { id: 1, reverse: false },
  { id: 2, reverse: true },
  { id: 3, reverse: false },
  { id: 4, reverse: true },
];

function GridSection() {
  return (
    <main className="main">
      <div className="feature-card-grid-section column">
        {featureData.map(({ id, reverse }) => (
          <div
            key={id}
            className={`image-display ${reverse ? "row-reverse" : "row"}`}
          >
            <div className="feature-text">
              <p className="top-feature">Top Feature</p>
              <h1 className="describe-the-feature">
                Describe the feature <br /> you want to highlight
              </h1>
              <p className="a-paragraph-text">
                A paragraph text that goes more in depth about how <br className="mobile-break" />
                the feature can help the customer save time and <br className="mobile-break" />
                resources.
              </p>
            </div>
            <div className="iphone-15">
              <img className="features-iphone" src={featuresIphone} alt="Feature preview on iPhone" />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default GridSection;
