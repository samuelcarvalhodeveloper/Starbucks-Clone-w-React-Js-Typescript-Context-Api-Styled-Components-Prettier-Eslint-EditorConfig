import GiftImg from "../../assets/img/Section-5.jpg";
import SectionGiftStyled from "./Styled";

function SectionGift() {
  return (
    <SectionGiftStyled>
      <div className="section__gift__center">
        <div className="section__gift__content">
          <div className="section__gift__content__center">
            <h2 className="section__gift__title">A gift to you, from us</h2>
            <h3 className="section__gift__subtitle">
              Alicia’s new Christmas album Santa Baby has us feeling all kinds
              of festive. Hear her curated playlist filled with holiday classics
              and original tracks, in stores or stream it now.
            </h3>
            <a href="#" className="section__gift__redirect">
              Listen now on Apple Music
            </a>
          </div>
        </div>
        <div className="section__gift__img">
          <img src={GiftImg} alt="Suporte our gifts" />
        </div>
      </div>
    </SectionGiftStyled>
  );
}

export default SectionGift;
