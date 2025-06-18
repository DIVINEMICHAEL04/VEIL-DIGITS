import React, { useState } from "react";
import "./frequently_ask_question_section.css";

import plus from "../../assets/plus.png";
import cancel from "../../assets/cancel.png";
import arrowUpRight from "../../assets/Arrow Up Right.png";

const faqs = [
  {
    title: "General FAQs",
    content:
      "With the help of Produce UI’s Elements and Components, you no longer need to design from scratch. We’ve built reusable components to reduce your design time from weeks to hours.",
  },
  {
    title: "Quick Guide to VeilDigits",
    content:
      "Our reusable UI elements help you save time and effort. Skip the lengthy design process and get started faster with VeilDigits components.",
  },
  {
    title: "How to Get Started?",
    content:
      "Just pick a component, customize it, and you're ready to launch. Our guide walks you through everything step-by-step.",
  },
  {
    title: "Need Developer Support?",
    content:
      "You can always contact our support team for help on integrating or customizing VeilDigits UI elements into your project.",
  },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="FAQSection">
      <div className="main-faq-section">
        {/* Header */}
        <div className="FAQ">
          <h3>Frequently Asked Questions</h3>
          <p>
            Still have questions? Contact our team via{" "}
            <span className="support-email">support@veildigits.co.nz</span>
          </p>
        </div>

        {/* FAQ List */}
        <div className="general-faqs">
          <div className="sub-general-faqs">
            {faqs.map((faq, index) => (
              <div className="general-faqs-text" key={index}>
                <div className="dropdown" onClick={() => toggleFAQ(index)}>
                  <h5>{faq.title}</h5>
                  <img
                    className={openIndex === index ? "cancel-icon" : "plus-icon"}
                    src={openIndex === index ? cancel : plus}
                    alt={openIndex === index ? "Close" : "Expand"}
                  />
                </div>
                {openIndex === index && (
                  <div className="dropdown-content">
                    <p>{faq.content}</p>
                  </div>
                )}
              </div>
            ))}

            {/* CTA Link */}
            <div className="dropdown see-all-faqs">
              <h5 className="see-all">See all FAQs</h5>
              <img src={arrowUpRight} alt="Arrow pointing up-right" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
