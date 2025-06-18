import React from 'react';
import HeaderSection from "../../components/header-section/header_section";
import PricingHeroSection from "../../components/pricing-hero-section/pricing_hero_section";
import DesignSection from "../../components/design-section/design_section";
import FAQSection from "../../components/frequently-ask-question-section/frequently_ask_question_section";
import FooterSection from  "../../components/footer-section/footer_section.jsx";


function Pricing() {
  return (
    <div className='Pricing-card'>
      <HeaderSection />
      <PricingHeroSection />
      <DesignSection />
      <FAQSection />
      <FooterSection />
    </div>
  );
}

export default Pricing;
