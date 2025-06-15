import React from 'react';
import './stats_section.css'; 
import earpiece from '../../assets/earpiece.png';

function StatsSection(){
    return(
        <div className="stats-section">
            <div className="build-something-great">
                <p className='launch-faster'>Launch faster</p>
                <h3 className='stats-header'>Build something great</h3>
                <p className='everything-you-need'>Everything you need to build modern UI and great products. 
                    We’ve done all the <br />
                    heavy lifting so you don’t have to — the 
                    perfect starting point for any project.</p>
            </div>


            <div className="stats-achievement">
                <div className="stats-achievement-text">
                    <div className="stats-achievement-top-text">

                      <div className="global-downloads">
                        <h2 className='fourty-thousand'>40,000+</h2>
                        <p className='global-downloads-para'>Global downloads</p>
                        <p className='global-text'>Our app has been downloaded over <br /> 40,000+ times.</p>
                      </div>

                      <div className="global-downloads">
                        <h2 className='fourty-thousand'>39,000+</h2>
                        <p className='global-downloads-para'>Accounts created</p>
                        <p className='global-text'>Our customers have reported an <br /> average of ~600% ROI.</p>
                      </div>

                        </div>
                        {/*  */}

                    <div className="stats-achievement-top-text">

                        <div className="global-downloads">
                        <h2 className='fourty-thousand'>10K</h2>
                        <p className='global-downloads-para'>Global downloads</p>
                        <p className='global-text'>Our free UI kit has been downloaded <br /> over 10k times.</p>
                      </div>

                      <div className="global-downloads">
                        <h2 className="fourty-thousand">32,000+</h2>
                        <p className='global-downloads-para'>5-star reviews</p>
                        <p className='global-text'>We’re proud of our 5-star rating with <br /> over 200 reviews.</p>
                      </div>

                    </div>
                </div>
                <div className="stats-achievement-image">
                    <img className='earpiece' src={earpiece} alt="Earpiece" />
                </div>
            </div>
        </div>
    )

}
export default StatsSection;