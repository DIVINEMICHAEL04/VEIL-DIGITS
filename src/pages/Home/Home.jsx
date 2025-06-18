import React from 'react';
import HeaderSection from  "../../components/header-section/header_section.jsx";
import HeroSection from  "../../components/hero-section/hero_section.jsx";
import AboutHeroSection from  "../../components/about-hero/about_hero.jsx";
import FeaturesGridSection from  "../../components/features-grid-section/features_grid_section.jsx";
import StatsSection from  "../../components/stats-section/stats_section.jsx";
import CallToActionSection from  "../../components/call-to-action-section/call_to_action_section.jsx";
import FooterSection from  "../../components/footer-section/footer_section.jsx";

function Home() {
  return (
    <div className="App">
       <HeaderSection/>
       <HeroSection 
       title={<>Veil your Digits, make calls and <br className='mobile-break' /> send sms securely</>} 
       description={<>Powerful, self-serve product and growth <br className='mobile-break'/>
               analytics to help you convert, engage, and retain <br className='desktop-break' /> more.</>}
       />
       <AboutHeroSection/>
       <FeaturesGridSection/>
       <StatsSection/>
       <CallToActionSection/>
       <FooterSection/>
    </div>
  );
}

export default Home;