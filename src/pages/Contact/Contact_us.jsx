import React from 'react';
import HeaderSection from "../../components/header-section/header_section";
import ContactUs from "../../components/contact-us/contact_us";
import FormSection from "../../components/form-section/form_section";
import MapSection from "../../components/map-section/map_section";
import OurTeamSection from "../../components/our-team/our_team.jsx";
import CallToActionSection from  "../../components/call-to-action-section/call_to_action_section.jsx";
import FAQSection from "../../components/frequently-ask-question-section/frequently_ask_question_section";
import FooterSection from  "../../components/footer-section/footer_section.jsx";


function ContactUsSection() {
    return (
        <div className="contact-us-page">
            <HeaderSection/>
            <ContactUs/>
            <FormSection/>
            <MapSection/>
            <OurTeamSection/>
            <CallToActionSection/>
            <FAQSection/>
            <FooterSection/>
        </div>
    )}

        export default ContactUsSection;