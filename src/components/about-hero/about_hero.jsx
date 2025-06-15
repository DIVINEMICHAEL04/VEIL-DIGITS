import React from 'react';
import './about_hero.css'; 
import bigStar from '../../assets/Star 9.png';
import smallStar from '../../assets/Star 10.png';
function AboutHeroSection(){
    return (
        <div className="about-hero">
            <div className="about-hero-text">
                <div className='VeilDigits-lets-you'>
            <div className='star'>
                <img className='big-star' src={bigStar} alt="" />
            </div>
            <div className='with-anonymous-calling'>
        <p className='text-center'>With anonymous calling and secure messaging, VeilDigits lets you <br />
         communicate freely, protect your privacy, and stay connected with</p>
         </div>
         <div className='star'>
            <img className='big-star' src={bigStar} alt="" />
         </div>
         </div>

         <div className='star-text'>
            <img className='small-star' src={smallStar} alt="" />
            <p className='text-center p'>confidence, no matter where life takes you.</p>
            <img className='small-star' src={smallStar} alt="" />
            </div>
             
         
         {/*  */}
         </div>


        </div>

        
        )
}
export default AboutHeroSection;