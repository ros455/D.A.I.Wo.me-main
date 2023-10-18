import React, { useEffect, useRef, useState } from 'react';
import { useWindowScroll } from 'react-use';
import '../../style/servicePage.scss'
import AnimWave from '../wave/AnimWave';




const ServicePage = () => {
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

    const [arr2,setArr2] = useState([

      {
        title:'Conducting an issue of stock',
        description:'The neural network will issue its asset coins, i.e. investment smart contracts.'
      },
      {
        title:'Investment',
        description:"It will be provided with the network's software code, which will contain data on the assets in which the network will invest."
      },
      {
        title:'Rewards',
        description:'Investors will be monetised through interest rate arbitrage.'
      },

    ])

    const [arr,setArr] = useState([
        {
            title:'Decentralisation',
            description:'The blockchain foundation in the platform offers a decentralised infrastructure',
            img: 'elipse_icon1.svg',
        },
        {
          title:'Speed and efficiency',
          description:'The platform significantly speeds up investment and settlement processes',
          img: 'elipse_icon4.svg',
        },
        {
            title:'Clarity',
            description:'The technology ensures transparency and inaccessibility to data manipulation.',
            img: 'elipse_icon2.svg',
        },
        {
          title:'Advanced capabilities',
          description:'D.A.I.Wo opens up new opportunities for investing in digital assets',
          img: 'elipse_icon5.svg',
        },
        {
            title:'Global access',
            description:'The D.A.I.Wo platform is accessible from anywhere in the world with an internet connection.',
            img: 'elipse_icon3.svg',
        },


        {
            title:'Safety',
            description:'Smart contracts are based on cryptographic principles, which ensures a high level of security.',
            img: 'elipse_icon6.svg',
        },
    ])

    return (
      <div className="service_page">
        {/* <div className="background">
          <AnimWave />
        </div> */}
        <div className="main_background">
          <div className="service_spotlight_one"></div>
          <div className="service_spotlight_two"></div>
          <div className="service_spotlight_three"></div>
          <div className="service_spotlight_four"></div>
        </div>
        <div className="container">
          <div className="service_title_block">
            <div className="service_title">
              <h1 className="title_h1">
              With <span>D.A.I.Wo</span> you can start investing from as little as 1 cent.
              </h1>
              <h3 className="subtitle_h3">
              That's right, not from $100, $10, or $1, but from 1 cent! 
This is the cheapest way to invest in the world.
              </h3>
              <div className='btn_wrap'>
                   <button className="btn_start service_title_btn">Connect Wallet</button>
              </div>
            </div>

            <div className="service_title_img">
              <img
                ref={coinOneRef}
                className={`page_coin_one ${coinOneInView ? 'coin_anim' : ''}`} 
                src="/img/coin1.svg"
                alt="Coin img"
              />
              <img
               ref={coinTwoRef}
               className={`page_coin_two ${coinTwoInView ? 'coin_anim2' : ''}`}  
                src="/img/coin2.svg"
                alt="Coin img"
              />
            </div>
          </div>
          <div className="how_work">
            <div className="how_work_title">
              <h2>
              How <span>it</span> work?
              </h2>
              <h2>
              <span>Easier</span> than you think !
              </h2>
            </div>
            <div className="how_work_wrap">
              <div className="how_work_animation">
                    <img
                    className="service_anim"
                    src="/img/section1_animation1.svg"
                    alt="animation"
                  />
                <img
                  className="service_anim2"
                  src="/img/section1_animation2.svg"
                  alt="animation"
                />
              </div>
              <div className="how_work_info">
                <img
                  className="item_bar"
                  src="/img/item_bar_service.svg"
                  alt="item"
                />
                {arr2.map((item, index) => (
                  <div className="info_blok" key={index}>
                    <p className="info_blok_title">{item.title}</p>
                    <p className="info_blok_subtitle">{item.description}</p>
                  </div>
                ))}
                <div className='btn_wraper'>
                    <button className="btn_start">Connect Wallet</button>
                    <div className="how_work_animation how_work_animation_2 ">
                    <img
                      className="service_anim"
                      src="/img/section1_animation.svg"
                      alt="animation"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="service_why_info">
            <h2>
            Why should you choose us?
            </h2>
            <h3 className="subtitle_h3">
            nvesting in <span>D.A.I.Wo</span> is one of the most attractive investment opportunities that provides investors with a number of advantages.
            </h3>
          </div>
          <div className="service_card_columns">
            <div className="service_column">
              {arr.map((item, index) => (
                <div className="column_item" key={index}>
                  <div className="column_item_border"></div>
                  <div className="column_item_card">
                    <p className="card_header">{item.title}</p>
                    <p className="card_info">{item.description}</p>
                    <img
                      className="elipse_icon"
                      src={`./img/${item.img}`}
                      alt="icon"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default ServicePage;