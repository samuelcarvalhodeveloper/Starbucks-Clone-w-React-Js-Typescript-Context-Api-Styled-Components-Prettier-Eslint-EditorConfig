import NativeImg from "../../assets/img/Section-4.jpg";
import SectionNativeStyled from "./Styled";

function SectionNative() {
  return (
    <SectionNativeStyled>
      <div className="section__native__center">
        <div className="section__native__content">
          <div className="section__native__content__center">
            <h2 className="section__native__title">
              Native American Heritage Month
            </h2>
            <h3 className="section__native__subtitle">
              See how the Starbucks Indigenous Partner (employee) Network is
              taking action to uplift their communities. Join us in celebrating
              these diverse cultures and see how you can get involved.
            </h3>
            <a href="#" className="section__native__redirect">
              Learn more
            </a>
          </div>
        </div>
        <div className="section__native__img">
          <img src={NativeImg} alt="Suporte our natives" />
        </div>
      </div>
    </SectionNativeStyled>
  );
}

export default SectionNative;
