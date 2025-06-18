import React from 'react';
import HeaderSection from "../../components/header-section/header_section";
import FeatureCard from "../../components/feature-card/FeatureCard";
import GridSection from "../../components/grid-section/grid_section";
import DesignSection from "../../components/design-section/design_section";
import FAQSection from "../../components/frequently-ask-question-section/frequently_ask_question_section";
import FooterSection from  "../../components/footer-section/footer_section.jsx";

function Feature() {  
    return (
        <div className="Feature-page">
            <HeaderSection />
            <FeatureCard />
            <GridSection />
            <DesignSection />
            <FAQSection />
            <FooterSection />
        </div>
    );
}

export default Feature;
