import React, { useState, useEffect } from "react";
import "../../style/popUp.scss";
import Slide from "../slide/Slide.js";

const PopUp = () => {



  return (
    <div>
      <div className="slide_amalog">
        <div className="about_popup_wrapper">
          <div className={`popup_cards`}>
            <div className="popup_cards_one"></div>
            <div className="popup_cards_dublicate">
              <div className="popup_cards_dublicate_sub">
              In terms of<span> efficiency </span> D.A.I.Wo is as good as banks, exchanges and investment funds
              </div>
            </div>
          </div>
          <div className={`popup_cards `}>
            <div className="popup_cards_one"></div>
            <div className="popup_cards_dublicate">
              <div className="popup_cards_dublicate_sub">
              D.A.I.Wo was created <span>to solve the financial problem</span> of every inhabitant of the planet
              </div>
            </div>
          </div>
          <div className={`popup_cards`}>
            <div className="popup_cards_one"></div>
            <div className="popup_cards_dublicate">
              <div className="popup_cards_dublicate_sub">
              D.A.I.Wo is a platform where <span>artificial intelligence</span>{" "}
              independently invests and distributes funds.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='slider_wraper_aboutus'>
          <Slide/>
      </div>
    </div>
  );
};

export default PopUp;
