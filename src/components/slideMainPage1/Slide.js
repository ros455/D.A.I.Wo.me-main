import React, { useState, useEffect } from "react";
import './slide.css'
import "../../style/popUp.scss";
import CarouselCompound from './carousel-compound'
import CounterYear from "../CounterYear";
import AirCounter from "../AirCounter";
import { BASE_URL } from "../../http/url";

export default function Slide() {

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
  },[]);

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
    <div className="app__main-container">
      <CarouselCompound 
      infinite
      loop
      interval={5000}
      >
        <CarouselCompound.Page>
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
        </CarouselCompound.Page>
        <CarouselCompound.Page>
        <div className="cart_item card_air air_main_page">
              <div className="air_duplicat">
                <div className="card_title">Air:</div>
                <div className="card_item_two">
                  <AirCounter angle={angle} lastAir={lastAir} />
                </div>
              </div>
            </div>
        </CarouselCompound.Page>
      </CarouselCompound>
    </div>
  )
}
