import SugarCookieImg from "../../assets/img/Section-2.jpg";
import SectionSugarCookieStyled from "./Styled";

function SectionSugarCookie() {
  return (
    <SectionSugarCookieStyled>
      <div className="section__sugarcookie__center">
        <div className="section__sugarcookie__content">
          <div className="section__sugarcookie__content__center">
            <h2 className="section__sugarcookie__title">
              Welcome back, sugar cookie
            </h2>
            <h3 className="section__sugarcookie__subtitle">
              Celebrate the season with our festive nondairy Sugar Cookie
              Almondmilk Latte. Enjoy your drink iced or hot.
            </h3>
            <a href="#" className="section__sugarcookie__redirect">
              Order now
            </a>
          </div>
        </div>
        <div className="section__sugarcookie__img">
          <img src={SugarCookieImg} alt="Order your Sugar Cookie!" />
        </div>
      </div>
    </SectionSugarCookieStyled>
  );
}

export default SectionSugarCookie;
