import React from 'react';
import '../../style/aboutUsPage.scss'
import AnimWave from '../wave/AnimWave';
import Slide from '../slideAboutPage/Slide';


const AboutUsPage = () => {
    return ( 
        <div className='about_us_page'>
            <div className="container">
                <div className="about_background">
                    <div className="about_spotlight_one"></div>
                    <div className="about_spotlight_two"></div>
                    <div className="about_spotlight_three"></div>
                </div>
                <div className="main_info">
                    <div className="title">Do you still think <span>investing</span> is difficult?</div>
                    <div className="description"><span>D.A.I.Wo </span> is a platform where the user does not need in-depth knowledge of finance, macroeconomics, and investments. You buy tokens, and artificial intelligence independently invests and distributes funds.</div>
                    <button className="btn_start">Connect Wallet</button>
                </div>
                <div className="extra__info_container">
                    <div className="extra_info_text">
                        <div className="extra_info_text_ttitle">Who was <span>D.A.I.Wo</span> created for?</div>
                        <div className="extra_info_text_subtitle">
                        <p>It's for you. Yes, without exaggeration, the platform was developed for people who are interested in investing.</p>
                        <p>These can be beginners and professionals with impressive cases.</p> 
                        <p><span>Інвестувати може кожен!</span></p>
                        <p>At this stage, we are looking for investments to scale the project and bring it to a global level.</p>
                        <p>So, if you've been waiting for a sign to start investing, this is it. There has never been a safer entry into investing.</p>

                        </div>
                    </div>
                    <div className="extra__info_picture">
                        <img src='/img/aboutus_image.png' alt="about us" />
                    </div>
                </div>
                <div className="about_section">
                    <div className="about_section_small">
                        <div className="first_section_small"><span>D.A.I.Wo</span> solves the problem of poverty.
                        </div>
                        <div className="second_section_small">Transparency ensured by  <span>
                        smart contracts</span>
                        </div>
                        
                   </div>
                   <div className="about_section_big">
                        <div className="first_section_big"><span>AI</span> independently invests and distributes funds.
                        </div>
                        <div className="second_section_big">It allows market participants <span>to make money easily.</span>
                        </div>
                   </div>
                   <div className='logo_aboutus'>
                            <img className='logo_img' src='/img/logo_vertical.svg' alt="logo" />
                            <img className='logo_img2' src='/img/background_animation2.svg' alt="logo" />
                        </div>
                </div>
                <div className='slider_wraper_about_page'>
                    <Slide/>
                </div>
                <div className="why_daiwo">
                    <div className="why_daiwo_title">And why <span>D.A.I.Wo</span> , and not banks or investment funds?</div>
                    <div className="why_daiwo_description">
                    <p>In terms of efficiency, D.A.I.Wo is as good as banks, stock exchanges and investment funds. However, it differs significantly in terms of comfort.</p>
                    <p>D.A.I.Wo is the UBER of the modern world of finance. Yes, you can reach your destination by public transport, which everyone is used to using. But why, when you can do it faster and more comfortably?</p> 
                    It's the same with investing - there are two ways: hard and easy. Which one to choose is up to you
                    </div>
                </div>
                <div className="daiwo_card">
                    <div>
                        <div className="daiwo_card_one"></div>
                        <div className="daiwo_card_two">
                            <p className='card_text'>The neural network takes over the difficult process of <span>managing finances and investments</span> , giving all people of the world free access to the world of investments</p>
                            <button className="btn_start_card">Connect Wallet</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default AboutUsPage;