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
                За<span> ефективністю </span> D.A.I.Wo нічим не поступається
                банкам, біржам та інвестиційним фондам.
              </div>
            </div>
          </div>
        </CarouselCompound.Page>
        <CarouselCompound.Page>
        <div className={`popup_cards `}>
            <div className="popup_cards_one"></div>
            <div className="popup_cards_dublicate">
              <div className="popup_cards_dublicate_sub">
                D.A.I.Wo створений для того, щоб <span>вирішити</span> фінансову
                проблему кожного жителя планети
              </div>
            </div>
          </div>
        </CarouselCompound.Page>
        <CarouselCompound.Page>
        <div className={`popup_cards`}>
            <div className="popup_cards_one"></div>
            <div className="popup_cards_dublicate">
              <div className="popup_cards_dublicate_sub">
                D.A.I.Wo – це платформа, де <span>штучний інтелект</span>{" "}
                самостійно інвестує та розподіляє кошти.
              </div>
            </div>
          </div>
        </CarouselCompound.Page>
      </CarouselCompound>
    </div>
  )
}
