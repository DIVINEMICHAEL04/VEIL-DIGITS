import React from 'react';
import HeaderSection from "../../components/header-section/header_section";
import BusinessHeroCard from "../../components/business-hero-section/business_hero_section";
import AboutHero from "../../components/about-hero/about_hero";
import BusinessDesign from "../../components/business-design-section/business_design_section";
import BusinessGridSection from "../../components/business-grid-section/business_grid_section";
import CallToAction from "../../components/call-to-action-section/call_to_action_section";
import FAQSection from "../../components/frequently-ask-question-section/frequently_ask_question_section";
import Footersection from "../../components/footer-section/footer_section";

function Business(){
    return(
        <div className="business-page">
        <HeaderSection/>
        <BusinessHeroCard/>
        <AboutHero
        heading={<>VeilDigits business products support businesses from large to small, <br className='mobile-break'/>
</>} 
        info={<>see which product best fits your needs.</>}
       />
       <BusinessDesign/>
       <BusinessGridSection/>
       <CallToAction/>
       <FAQSection/>
       <Footersection/>
        </div>
    )
}
export default Business;