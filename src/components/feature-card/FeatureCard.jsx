import "./FeatureCard.css";
import React from "react";
import userProfile from '../../assets/userProfile.png';
import featureFrame from '../../assets/feature-frame.png';
import verified from '../../assets/verified.png';
import sdCard from '../../assets/sd-card.png';
import uniyime from '../../assets/uniyime.png';
import microphone from '../../assets/microphone-slash.png';
import message from '../../assets/message-icon.png';
import pause from '../../assets/pause.png';
import bluetooth from '../../assets/bluetooth.png';
import record from '../../assets/record-circle.png';
import speaker from '../../assets/speaker (1).png';
import callSlash from '../../assets/call-slash.png';

function FeatureCard() {
  return (
    <div className="feature-card">
      <section className="section">
        <div className="top-hero-section">
          <div className="announcing-product-launch auto">
            <div className="hero-paragraph">
              <div className="announcing-product-launch users-profile">
                <img className="users-prof-img" src={userProfile} alt="users-profile" />
              </div>
              <div className="announcing-product-launch text">
                <p>Announcing our latest product launch</p>
              </div>
            </div>
          </div>

          <div className="veil-your-digits">
            <p className="veil-your-digits heading-texts">Features</p>
            <p className="Powerful-self-serve-product">
              What makes us the best choice for all
              your anonymous call and messaging <br />
              needs, personal or business, we got you!!!
            </p>
          </div>

          <div className="hero-frame">
            <div className="sub-hero-frame">
              <div className="hero-frame-left">
                <div className="hero-frame-text">
                  <div className="hero-frame-top-text">
                    <p className="Action-Succesful">Action Succesful</p>
                    <p className="New-member-added">New member added</p>
                  </div>
                  <div className="verification-badge">
                    <div className="verification-badge-img">
                      <img className="verified" src={verified} alt="Verification Badge" />
                    </div>
                  </div>
                </div>

                <div className="got-you-covered">
                  <div className="assurance-text">
                    <p>VeilDigit’s got you covered! 😁</p>
                  </div>
                  <div className="sim">
                    <img className="simcard" src={sdCard} alt="simcard" />
                    <p className="Internet-chat">Internet Chat • 13:15</p>
                  </div>
                </div>
              </div>
               
              <img className="feature-frame" src={featureFrame} alt="feature-frame" />

              <div className="hero-frame-right-top">
                <div className="linear-green-background">
                  <div className="green-background-top">
                    <div className="female-user">
           
                      <img src={uniyime} alt="female-user" />
                    </div>
                    <div className="users-id">
                      <div className="users-name">
                        <p className="Unyime">Unyime Ekpo</p>
                        <p className="ID-call">(ID call)</p>
                      </div>
                      <div className="call-in-progress">
                        <p className="timing">call in progress 00:45</p>
                      </div>
                    </div>
                  </div>

                  <div className="call-icon">
                    {[microphone, pause, bluetooth, record, speaker].map((icon, i) => (
                      <div key={i} className="microphone">
                        <img src={icon} alt="icon" />
                      </div>
                    ))}
                    <div className="microphone red-bg">
                      <img src={callSlash} alt="call-slash" />
                    </div>
                  </div>
                </div>

                <div className="hero-frame-left-bottom">
                  <div className="hero-para-text">
                    <p>
                      Anonymous messaging just got a whole lot <br />
                      better. With SMS and Data connections, <br />
                      message with with no limits
                    </p>
                  </div>
                  <div className="msg-icon">
                    <img className="simcard" src={message} alt="message-icon" />
                    <p className="Internet-chat">SMS • 13:10</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FeatureCard;
