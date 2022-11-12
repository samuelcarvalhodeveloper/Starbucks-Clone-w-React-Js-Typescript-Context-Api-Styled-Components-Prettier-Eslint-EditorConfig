import VeteranImg from "../../assets/img/Section-1.jpg";
import SectionVeteranStyled from "./Styled";

function SectionVeteran() {
  return (
    <SectionVeteranStyled>
      <div className="section__veteran__center">
        <div className="section__veteran__content">
          <div className="section__veteran__content__center">
            <h2 className="section__veteran__title">
              Supporting our veteran community
            </h2>
            <h3 className="section__veteran__subtitle">
              This November, we’re donating $200,000 divided evenly between Team
              Red, White & Blue and Team Rubicon to support our veteran
              community.
            </h3>
            <a href="#" className="section__veteran__redirect">
              Our commitment
            </a>
          </div>
        </div>
        <div className="section__veteran__img">
          <img src={VeteranImg} alt="Suporte our veterans" />
        </div>
      </div>
    </SectionVeteranStyled>
  );
}

export default SectionVeteran;
