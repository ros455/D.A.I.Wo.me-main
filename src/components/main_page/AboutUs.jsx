import React from 'react';
import '../../style/aboutUs.scss'
import PopUp from './PopUp';
import Slide from '../slide/Slide.js'
import { Link, useNavigate } from 'react-router-dom';



const AboutUs = () => {
    const navigate = useNavigate();

    const handleKnowMoreClick = () => {
      navigate('/about-us');
      window.scrollTo(0, 0); // Прокрутка сторінки вгору
    };
    return (
        <div className='about_us'>
            <div className="about_wrap">
                <div className="about_info">
                        <button className="btn_slider">About Us</button>
                        <div className="about_info_title">Meet the <span>D.A.I.Wo</span> – your personal  <span>artificial intelligence</span> digital worker. </div>
                    <div className="about_info_text">
                        <div className="about_info_subtitle">It operates 24/7/365, never gets tired, and helps to make money on investments. A platform for tokenizing businesses, business processes, any financial services, assets, and liabilities.</div>
                    <div className="about_info_pictures">
                        <img className='img_about' src='/img/aboutus_image.png' alt="image" />
                        <div className='logo'>
                            <img className='logo_img' src='/img/logo_vertical.svg' alt="logo" />
                            <img className='logo_img2' src='/img/background_animation2.svg' alt="logo" />
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <PopUp/>
            <div className="know_more">
            <button className="btn_know_more" onClick={handleKnowMoreClick}>
      <p>Learn More</p>
    </button>
                <img src='/icons/icon_arrow-forward.svg'alt="" />
            </div>
            
        </div>
        
    );
};

export default AboutUs;