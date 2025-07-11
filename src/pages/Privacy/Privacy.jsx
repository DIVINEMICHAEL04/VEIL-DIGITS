import React from 'react';
import HeaderSection from "../../components/header-section/header_section";
import PrivacyPolicy from "../../components/privacy-policy/privacy_policy";
import TableOfContentSection from "../../components/table-of-content-section/table_of_content_section";
import FAQSection from "../../components/frequently-ask-question-section/frequently_ask_question_section";
import CallToActionSection from  "../../components/call-to-action-section/call_to_action_section.jsx";
import FooterSection from  "../../components/footer-section/footer_section.jsx";


function Privacy() {
    return(
    <div className="privacy-card">
       <HeaderSection />
       <PrivacyPolicy/>
       <TableOfContentSection/>
       <FAQSection/>
       <CallToActionSection/>
       <FooterSection/>
    </div>
    )
}
export default Privacy;