import React, { useEffect, useRef, useState } from 'react';
import { useWindowScroll } from 'react-use';
import '../../style/service.scss'
import { Link, useNavigate } from 'react-router-dom';



const Service = () => {

    const navigate = useNavigate();

  const handleKnowMoreClick = () => {
    navigate('/service');
    window.scrollTo(0, 0); // Прокрутка сторінки вгору
  };

  const coinOneRef = useRef(null);
  const coinTwoRef = useRef(null);
  const [coinOneInView, setCoinOneInView] = useState(false);
  const [coinTwoInView, setCoinTwoInView] = useState(false);
  const { y: scrollY } = useWindowScroll();

  useEffect(() => {
    const coinOneElement = coinOneRef.current;
    const coinTwoElement = coinTwoRef.current;
    if (coinOneElement) {
      const { top, bottom } = coinOneElement.getBoundingClientRect();
      setCoinOneInView(top < window.innerHeight && bottom >= 0);
    }
    if (coinTwoElement) {
      const { top, bottom } = coinTwoElement.getBoundingClientRect();
      setCoinTwoInView(top < window.innerHeight && bottom >= 0);
    }
  }, [scrollY]);

    return (
        <div className='service'>
            <div className="service_wrap">
                <div className="service_info">
                    <div className="service_info_text">
                        <button className="btn_slider">Services</button>
                        <div className="service_info_title">The <span>D.A.I.Wo</span> neural network will issue its own asset coins, i.e. investment to <span>smart contracts.</span> </div>
                        {/* <div className='coin_adaptive'>
                            <div className="pictures_coin">
                                <img className='coin_one_adaptive' src='/img/coin1.svg' alt="Coin img" />
                                <img className='coin_two_adaptiv' src='/img/coin2.svg' alt="Coin img" />
                            </div>
                        </div> */}
                        <div className="service_info_subtitle"><p className='p_one'>They will be provided with the network's program code, which will contain data on the assets in which the network will invest.</p>
                        <p className='p_two'> Investors will be monetized through interest rate arbitrage. This will allow market participants to easily earn money by pooling their financial resources.</p>
                       </div>
                    </div>
                    <div className="service_info_pictures">
                        <img 
                        ref={coinOneRef}
                        className={`coin_one ${coinOneInView ? 'coin_anim' : ''}`} 
                        src='/img/coin1.svg' alt="Coin img" />
                        <img
                        ref={coinTwoRef}
                        className={`coin_two ${coinTwoInView ? 'coin_anim2' : ''}`}  
                        src='/img/coin2.svg' alt="Coin img" />
                        <div className="main_small_animation">
                            <img src="./img/main_small_bg-anim.svg" alt="animation" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="service_info_extra">
                <div className="info_block">
                  <p> <span>  D.A.I.Wo</span> takes over the difficult process of managing finances and investments </p></div> 
                <div className="info_block"> <p><span>Artificial intelligence </span> independently invests and distributes funds. </p> </div>
                <div className="info_block"> <p>Transparency and security ensured by <span> smart contracts</span> </p>  </div>
            </div>
            <div className="know_more">
            <button className="btn_know_more" onClick={handleKnowMoreClick}>
      <p>Learn More</p>
    </button>
                <img src='/icons/icon_arrow-forward.svg' alt="" />
            </div>
        </div>
    );
};

export default Service;