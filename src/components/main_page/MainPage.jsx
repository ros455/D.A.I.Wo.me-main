import React, { useState, useEffect } from "react";
import "../../style/mainPage.scss";
import "../../style/another-style/calc.css";
import "../../style/another-style/circule.scss";
import AboutUs from "../main_page/AboutUs";
import Service from "../main_page/Service";
import AnimWave from "../wave/AnimWave";
import FAQ from "../main_page/FAQ";
import Contacts from "../main_page/Contacts";
import Slide from "../slideMainPage1/Slide";
import CounterYear from "../CounterYear";
import AirCounter from "../AirCounter";
import { BASE_URL } from "../../http/url";

const MainPage = () => {
  const [allData, setAllData] = useState([]);
  const [lastRate, setaLastRate] = useState(0);
  const [lastAir, setLastAir] = useState(0);
  const [time, setTime] = useState(0);
  const [totalbalance, setTotalbalance] = useState(0);
  const [totalbalanceFinal, setTotalbalanceFinal] = useState(0);
  const [angle, setAngle] = useState(0);
  const [lastEmission, setLastEmission] = useState(0);

  useEffect(() => {
    fetch(`${BASE_URL}/getall`)
      .then((res) => res.json())
      .then((res) => setAllData(res))
      .catch((error) => {
        console.log('error',error);
      })
  }, []);

  useEffect(() => {
    if (allData.length != 0) {
      let totalSumHeader = 0;
      let totalSum = 0;
      allData.forEach((item) => {
        totalSumHeader = item.balans + totalSumHeader;
      });
      setTotalbalanceFinal(totalSumHeader.toFixed(0));

      for (let i = 0; i < allData.length - 1; i++) {
        totalSum = allData[i].balans + totalSum;
      }
      setTotalbalance(totalSum.toFixed(0));
      returnLastItem(allData);
    }
  }, [allData]);

  const returnLastItem = (arr) => {
    setaLastRate(arr[arr.length - 1]?.rate);
    setLastEmission(arr[arr.length - 1]?.emission);
    setLastAir(arr[arr.length - 1]?.air * 100);
    const dateString = arr[arr.length - 1].createdAt;
    const dateObject = new Date(Date.parse(dateString));
    const dateMilliseconds = dateObject.getTime();
    setTime(dateMilliseconds);
  };

  useEffect(() => {
    const num = lastAir;

    if (num == 0) {
      setAngle(num + 215);
    } else if (num <= 5) {
      setAngle(num + 222);
    } else if (num <= 10) {
      setAngle(num + 232);
    } else if (num <= 15) {
      setAngle(num + 240);
    } else if (num <= 20) {
      setAngle(num + 251);
    } else if (num <= 25) {
      setAngle(num + 265);
    } else if (num <= 30) {
      setAngle(num + 275);
    } else if (num <= 35) {
      setAngle(num + 280);
    } else if (num <= 40) {
      setAngle(num + 292);
    } else if (num <= 45) {
      setAngle(num + 305);
    } else if (num <= 50) {
      setAngle(num + 312);
    } else if (num <= 55) {
      setAngle(num + 320);
    } else if (num <= 60) {
      setAngle(num + 330);
    } else if (num <= 65) {
      setAngle(num + 342);
    } else if (num <= 70) {
      setAngle(num + 349);
    } else if (num <= 75) {
      setAngle(num + 358);
    } else if (num <= 80) {
      setAngle(num + 370);
    } else if (num <= 85) {
      setAngle(num + 382);
    } else if (num <= 90) {
      setAngle(num + 389);
    } else if (num <= 95) {
      setAngle(num + 395);
    } else if (num <= 100) {
      setAngle(num + 405);
    }
  }, [lastAir]);

  const arrNumb = new Array(27).fill(1);

  return (
    <div className="main_page">
      <div className="container">
        <div className="main_page_background">
          <div className="main_spotlight_one"></div>
          <div className="main_spotlight_two"></div>
          <div className="main_spotlight_three"></div>
        </div>
        <div className="main_wrap">
          <div className="main_text">
            <div className="main_title">
              <span>Start building</span> your financial independence {" "}
              <span>today</span>
            </div>
            <div className="main_subtitle">
            That's right, not from $100, $10, or $1, but from 1 cent! 
This is the cheapest way to invest in the world.
            </div>
            <div className="main_btn">
              <button className="main_btn_one">Connect Wallet</button>
              <button className="main_btn_two">Learn more</button>
            </div>
            <div className="email">
              <img src="/icons/icon_email.svg" alt="email" />
              <p>info@daiwo.ai</p>
            </div>
          </div>
          <div className="main_card">
            <div className="cart_item card_rate">
              <div className="duplicat_rate">
                <div className="card_title">Rate:</div>
                <div className="card_item_one">
                  {lastRate && (
                    <CounterYear
                      firstValue={Number(lastRate)}
                      val={Number(lastRate * (lastAir / 100) + lastRate)}
                      time={time}
                      isBool={false}
                    />
                  )}
                </div>
              </div>
            </div>

            <div className="cart_item card_air air_main_page">
              <div className="air_duplicat">
                <div className="card_title">Air:</div>
                <div className="card_item_two">
                  <AirCounter angle={angle} lastAir={lastAir} />
                </div>
              </div>
            </div>
          </div>
          <div className="first_slide">
            <Slide />
          </div>
        </div>
        <AboutUs />
        <Service />
        <FAQ />
        <Contacts />
      </div>
    </div>
  );
};

export default MainPage;
