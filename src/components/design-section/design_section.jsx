import "./design_section.css";
import React from "react";
// import twoPhones from '../../assets/two-15pro.png'

function DesignSection(){
    return(
        <div className="design-section">
            <div className="linear-background">
              <div className="design-text">
                <p className='other-features'>Other Features</p>
                <h1 className='describe-features'>Describe the feature <br />you want to highlight</h1>
                <p className='a-paragraph-text-that'>A paragraph text that go more in depth <br /> about how the
                feature can help the <br /> customer save time and resources.</p>
              </div>
              <div className="iphone-15">
                <img className="two-phones" src={twoPhones } alt="" />
              </div>
            </div>
        </div>
    )

}
export default DesignSection;