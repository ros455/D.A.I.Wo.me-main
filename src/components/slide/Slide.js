import './slide1.css'
import "../../style/popUp.scss";
import CarouselCompound from './carousel-compound'

export default function Slide() {
  return (
    <div className="app__main-container">
      <CarouselCompound 
      infinite
      loop
      // control
      interval={5000}
      >
        <CarouselCompound.Page>
        <div className={`popup_cards`}>
            <div className="popup_cards_one"></div>
            <div className="popup_cards_dublicate">
              <div className="popup_cards_dublicate_sub">
              In terms of<span> efficiency </span> D.A.I.Wo is as good as banks, exchanges and investment funds
              </div>
            </div>
          </div>
        </CarouselCompound.Page>
        <CarouselCompound.Page>
        <div className={`popup_cards `}>
            <div className="popup_cards_one"></div>
            <div className="popup_cards_dublicate">
              <div className="popup_cards_dublicate_sub">
              D.A.I.Wo was created  <span>to solve the financial problem</span> of every inhabitant of the planet
              </div>
            </div>
          </div>
        </CarouselCompound.Page>
        <CarouselCompound.Page>
        <div className={`popup_cards`}>
            <div className="popup_cards_one"></div>
            <div className="popup_cards_dublicate">
              <div className="popup_cards_dublicate_sub">
              D.A.I.Wo is a platform where <span>artificial intelligence</span>{" "}
              independently invests and distributes funds.
              </div>
            </div>
          </div>
        </CarouselCompound.Page>
      </CarouselCompound>
    </div>
  )
}
