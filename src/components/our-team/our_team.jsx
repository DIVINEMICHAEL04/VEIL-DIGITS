import React from 'react';
import './our_team.css'; 
import teamOne from '../../assets/team-1.png'
import teamTwo from '../../assets/team-2.png'
import teamThree from '../../assets/team-3.png'
import teamFour from '../../assets/team-4.png'

function OurTeamSection(){
    return(
        <div className="team-section">
            <div className="team-container">
                <div className="team-heading-text">
                   <p className="our-teams">Our Team</p>
                   <p className="team-paragraph">
                     We’re a remote-first team of developers, designers, privacy advocates, <br className='mobile-break'/>
                     and product managers passionate about putting users in control of their <br className='mobile-break'/> digital presence.</p>
                </div>
                <div className="team-img">
                   <div className="team-developers-img team-leave">
                    <img src={teamOne} alt="" />
                   </div>
                   <div className="team-developers-img">
                    <img src={teamTwo} alt="" />
                   </div>
                   <div className="team-developers-img">
                    <img src={teamThree} alt="" />
                   </div>
                   <div className="team-developers-img">
                    <img src={teamFour} alt="" />
                   </div>
                </div>
            </div>
        </div>
    )

}
export default OurTeamSection;