import SwirlImg from "../../assets/img/Section-3.jpg";
import SectionSwirlStyled from "./Styled";

function SectionSwirl() {
  return (
    <SectionSwirlStyled>
      <div className="section__swirl__center">
        <div className="section__swirl__content">
          <div className="section__swirl__content__center">
            <h2 className="section__swirl__title">Sweet new swirl</h2>
            <h3 className="section__swirl__subtitle">
              Introducing the Chocolate Pistachio Swirl with a creamy chocolaty
              filling and chopped pistachios.
            </h3>
            <a href="#" className="section__swirl__redirect">
              Order now
            </a>
          </div>
        </div>
        <div className="section__swirl__img">
          <img src={SwirlImg} alt="Order your Swirl!" />
        </div>
      </div>
    </SectionSwirlStyled>
  );
}

export default SectionSwirl;
