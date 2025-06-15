import "./feature_card_grid_section.css";
import React from "react";
import featuresIphone from '../../assets/features-15 Pro.png'

function FeatureCardGridSection(){
    return(
        <main className="main">
        <div className="feature-card-grid-section column">
            <div className="image-display row">
              <div className="feature-text">
                <p className='top-feature'>Top Feature</p>
                <h1 className='describe-the-feature'>Describe the feature <br />you want to highlight</h1>
                <p className='a-paragraph-text'>A paragraph text that go more in depth about how <br />the 
                feature can help the customer save time and <br /> resources.</p>
              </div>
              <div className="iphone-15">
                <img className="features-iphone" src={featuresIphone} alt="" />
              </div>
            </div>

            <div className="image-display row-reverse">
              <div className="feature-text">
                <p className='top-feature'>Top Feature</p>
                <h1 className='describe-the-feature'>Describe the feature <br />you want to highlight</h1>
                <p className='a-paragraph-text'>A paragraph text that go more in depth about how <br /> the 
                feature can help the customer save time and <br /> resources.</p>
              </div>
              <div className="iphone-15">
                <img className="features-iphone" src={featuresIphone} alt="" />
              </div>
            </div>

            <div className="image-display row">
              <div className="feature-text">
                <p className='top-feature'>Top Feature</p>
                <h1 className='describe-the-feature'>Describe the feature <br />you want to highlight</h1>
                <p className='a-paragraph-text'>A paragraph text that go more in depth about how <br /> the
                feature can help the customer save time and <br /> resources.</p>
              </div>
              <div className="iphone-15">
                <img className="features-iphone" src={featuresIphone} alt="" />
              </div>
            </div>

            <div className="image-display row-reverse">
              <div className="feature-text">
                <p className='top-feature'>Top Feature</p>
                <h1 className='describe-the-feature'>Describe the feature <br />you want to highlight</h1>
                <p className='a-paragraph-text'>A paragraph text that go more in depth about how <br /> the
                feature can help the customer save time and <br /> resources.</p>
              </div>
              <div className="iphone-15">
                <img className="features-iphone" src={featuresIphone} alt="" />
              </div>
            </div>

        </div>
        </main>
    )

}
export default FeatureCardGridSection;