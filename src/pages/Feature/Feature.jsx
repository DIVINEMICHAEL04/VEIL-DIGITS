import React from 'react';
import FeatureCard from "../../components/feature-card/FeatureCard";
import HeaderSection from "../../components/header-section/header_section";
import FeatureCardGridSection from "../../components/feature-card-grid-section/feature_card_grid_section";
// import DesignSection from "../../components/design-section/design_section";
// import FooterSection from  "../../components/footer-section/footer_section";
// import FAQSection from "../../components/frequently-ask-question-section/frequently_ask_question_section";

function Feature() {  
    return (
        <div className="Feature-page">
            <HeaderSection />
            <FeatureCard />
            <FeatureCardGridSection />
            {/* <DesignSection /> */}
            {/* <FooterSection /> */}
            {/* <FAQSection /> */}
        </div>
    );
}

export default Feature;
