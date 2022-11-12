import { useEffect, useState, useContext } from "react";
import NavFull from "../NavFull/NavFull";
import NavMobile from "../NavMobile/NavMobile";
import FooterStyled from "./Styled";
import Spotify from "../../assets/img/Spotify.svg";
import Facebook from "../../assets/img/Facebook.svg";
import Pinterest from "../../assets/img/Pinterest.svg";
import Instagram from "../../assets/img/Instagram.svg";
import Youtube from "../../assets/img/Youtube.svg";
import Twitter from "../../assets/img/Twitter.svg";
import MenuToggleContext from "../../context/MenuToggleContext";

function Footer() {
  const [windowWidth, setWindowWidth] = useState<number | null>(null);
  const [mobile, setMobile] = useState<boolean | null>(null);
  const menuToggle = useContext(MenuToggleContext);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    if (windowWidth && windowWidth <= 1024) return setMobile(true);

    if (windowWidth && windowWidth <= 768) return setMobile(false);

    window.addEventListener("resize", () => {
      if (window.innerWidth <= 1024) return setMobile(true);
      setMobile(false);
    });
  }, [mobile, windowWidth]);

  return (
    <FooterStyled toggleValue={menuToggle?.MenuToggle}>
      {mobile ? <NavMobile /> : <NavFull />}
      <hr className="footer__hr" />
      <div className="footer__redirect">
        <a href="#" className="footer__link">
          <img src={Spotify} alt="Spotify logo" />
        </a>
        <a href="#" className="footer__link">
          <img src={Facebook} alt="Facebook logo" />
        </a>
        <a href="#" className="footer__link">
          <img src={Pinterest} alt="Pinterest logo" />
        </a>
        <a href="#" className="footer__link">
          <img src={Instagram} alt="Instagram logo" />
        </a>
        <a href="#" className="footer__link">
          <img src={Youtube} alt="Youtube logo" />
        </a>
        <a href="#" className="footer__link">
          <img src={Twitter} alt="Twitter logo" />
        </a>
      </div>
      <div className="footer__policy">
        <a href="#" className="footer__policy__link">
          Privacy Policy
        </a>
        <div className="footer__vr">{false}</div>
        <a href="#" className="footer__policy__link">
          Terms of Use
        </a>
        <div className="footer__vr">{false}</div>
        <a href="#" className="footer__policy__link">
          CA Supply Chain Act
        </a>
        <div className="footer__vr">{false}</div>
        <a href="#" className="footer__policy__link">
          Cookie Preferences
        </a>
      </div>
      <div className="footer__advise">
        <p className="footer__copyright">
          © 2022 Starbucks Coffee Company. All rights reserved.
        </p>
      </div>
    </FooterStyled>
  );
}

export default Footer;
