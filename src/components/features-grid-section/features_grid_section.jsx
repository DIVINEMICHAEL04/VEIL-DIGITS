import React from 'react';
import './features_grid_section.css'; 
import iphone from '../../assets/iPhone 15 Pro.png';

function FeaturesGridSection() {
  const FeatureItem = ({ reverse, gradient }) => (
    <div className={`f-d-column ${reverse ? 'reverse' : ''}`}>
      <div className={`iphone-15pro ${gradient ? 'linear-gradient' : ''}`}>
        <img className="iphone" src={iphone} alt="iPhone 15 Pro" />
      </div>
      <div className={`heading-textt ${reverse ? 'right' : ''}`}>  
        <div className="feature-text">
          <p className='top-feature'>Top Feature</p>
          <h1 className='describe-the-feature'>
            Describe the feature <br className='mobile-phone' />
            you want to highlight
          </h1>
          <p className='a-paragraph-text'>
            A paragraph text that go more in depth about how the <br className='mobile-break' />
            feature can help the customer save time and resources.
          </p>
        </div>
        <div className="learn-more-btn">
          <button className='btn'>Learn more <i className='fa fa-arrow-right'></i></button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="features-section">
      <div className="features-display-image">
        <div className="features-display left-column">
          <FeatureItem />
          <FeatureItem gradient />
        </div>
      </div>

      <div className="features-text">
        <div className="features-display left-column">
          <FeatureItem reverse />
          <FeatureItem reverse />
        </div>
      </div>
    </div>
  );
}

export default FeaturesGridSection;
