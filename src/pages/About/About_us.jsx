import React from 'react';
import HeaderSection from "../../components/header-section/header_section.jsx";
import AboutVeilDigits from "../../components/about-veil-digits/about_veil_digits.jsx";
import OurGoal from "../../components/our-goal/our_goal.jsx";
import CoreValue from "../../components/core-value/core_value.jsx";
import OurTeamSection from "../../components/our-team/our_team.jsx";
import OurTechnology from "../../components/our-technology/our_technology.jsx";
import StatsSection from  "../../components/stats-section/stats_section.jsx";
import FAQSection from "../../components/frequently-ask-question-section/frequently_ask_question_section.jsx";
import FooterSection from  "../../components/footer-section/footer_section.jsx";


function AboutUs() {
    return (
        <div className="about-us-page">
            <HeaderSection />
            <AboutVeilDigits />
            <OurGoal />
            <CoreValue />
            <OurTeamSection />
            <OurTechnology />
            <StatsSection 
            headlines={<>We Are Growing</>}
            subText={<>The Numbers Behind Our Mission</>}
            mainText={<> Everything you need to build modern UI and great products. We’ve done all the <br className='mobile-break'/>
                         heavy lifting so you don’t have to — the perfect starting point for any project.</>}/>
            <FAQSection />
            <FooterSection />
        </div>
    );
}
export default AboutUs;