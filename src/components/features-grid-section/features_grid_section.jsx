import React from 'react';
import './features_grid_section.css';
import iphone from '../../assets/iPhone 15 Pro.png';

// Import your background images
import bgImage1 from '../../assets/grid 2.jpg';
import bgImage2 from '../../assets/grid 3.jpg';
import bgImage3 from '../../assets/grid 4.jpg';
import bgImage4 from '../../assets/grid gradient.jpg';

function FeaturesGridSection() {
  // FeatureItem Component
  const FeatureItem = ({ reverse, bgImage, topText, headingText, paragraphText }) => (
    <div className={`f-d-column ${reverse ? 'reverse' : ''}`}>
      <div
        className="iphone-15pro"
        style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <img className="iphone" src={iphone} alt="iPhone 15 Pro" />
      </div>
      <div className={`heading-textt ${reverse ? 'right' : ''}`}>
        <div className="feature-text">
          <p className='top-feature'>{topText}</p>
          <h1 className='describe-the-feature'>{headingText}</h1>
          <p className='a-paragraph-text'>{paragraphText}</p>
        </div>
        <div className="learn-more-btn">
          <button className='btn'>
            Learn more <i className='fa fa-arrow-right'></i>
          </button>
        </div>
      </div>
    </div>
  );

  // JSX return
  return (
    <div className="features-section">
      <div className="features-display left-column">
        <FeatureItem
          bgImage={bgImage3}
          topText="VoIP + SIM Call Support"
           headingText={
             <>
               Call over internet or your mobile line—your way
             </>
           }
           paragraphText={
             <>Choose how you call—using data or your regular airtime. <br className='mobile-break'/>
              Either way, your caller ID stays protected and private.
             </>
           }
        />
        <FeatureItem
          bgImage={bgImage4}
          topText="Encrypted & Alias-Powered History"
           headingText={
             <>
               Describe the feature you want to highlight
             </>
           }
           paragraphText={
             <>All calls are fully encrypted, and your call history only shows <br className='mobile-break'/>
              random names—never real numbers.
             </>
           }
        />
      </div>

      <div className="features-display left-column">
        <FeatureItem
           reverse
           bgImage={bgImage1}
           topText="Hidden ID Calling"
           headingText={
             <>
               Make calls without revealing your real number
             </>
           }
           paragraphText={
             <>
               Stay anonymous with every call. Use randomly generated <br className="mobile-break" />
               IDs or create a custom permanent one—your real number <br className="mobile-break" />
               stays completely hidden.
             </>
           }
        />

        <FeatureItem
          reverse
          bgImage={bgImage1}
          topText="Magic Voice"
           headingText={
             <>
              Change your voice. Add a little mystery—or fun
             </>
           }
           paragraphText={
             <>Prank a friend or protect your identity with real-time voice <br className='mobile-break'/> effects like robot, child, deep voice and more during any <br className='mobile-break'/>
              call.
             </>
           }
        />
      </div>
    </div>
  );
}

export default FeaturesGridSection;
