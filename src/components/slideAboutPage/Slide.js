import './slide.css'
import "../../style/popUp.scss";
import CarouselCompound from './carousel-compound'


export default function Slide() {

  const arrNumb = new Array(27).fill(1);
  return (
    <div className="app__main-container">
      <CarouselCompound 
      infinite
      loop
      // control
      interval={5000}
      >
        <CarouselCompound.Page>
        <div className=" slide_item first_section_small"> <p><span>D.A.I.Wo</span> вирішує проблему бідності.</p> </div>
        </CarouselCompound.Page>
        <CarouselCompound.Page>
        <div className=" slide_item second_section_small"> <p> Прозорість забезпечена <span> смарт-конктрактами</span> </p></div>
        </CarouselCompound.Page>
        <CarouselCompound.Page>
        <div className=" slide_item first_section_big"> <p> <span>Штучний інтелект</span> самостійно інвестує та розподіляє кошти. </p></div>
        </CarouselCompound.Page>
        <CarouselCompound.Page>
        <div className=" slide_item second_section_big"> <p>Дає змогу учасникам ринку <span>легко заробляти гроші.</span>  </p></div>
        </CarouselCompound.Page>
      </CarouselCompound>
    </div>
  )
}
