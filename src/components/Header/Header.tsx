import { useState, useContext, useEffect } from "react";
import { Squash as Hamburger } from "hamburger-react";
import StarbucksLogo from "../../assets/img/StarbucksLogo.svg";
import Point from "../../assets/img/Point.svg";
import PointGreen from "../../assets/img/PointGreen.svg";
import HeaderStyled from "./Styled";
import MenuToggleContext from "../../context/MenuToggleContext";

function Header() {
  const [changeColor, setchangeColor] = useState(false);
  const toggleMenu = useContext(MenuToggleContext);
  function handleMouseEnter(): void {
    setchangeColor(true);
  }

  function handleMouseLeave(): void {
    setchangeColor(false);
  }

  function toggleHamburger() {
    if (toggleMenu?.MenuToggle) return toggleMenu.setMenuToggle(false);
    return toggleMenu?.setMenuToggle(true);
  }

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth === 795) {
        toggleMenu?.setMenuToggle(false);
      }
    });
  }, []);

  return (
    <HeaderStyled hamburgerToggle={toggleMenu?.MenuToggle}>
      <div className="header__center">
        <a href="#" className="header__logo">
          <img src={StarbucksLogo} alt="Starbucks logo" />
        </a>
        <div className="header__content">
          <div className="header__container">
            <ul className="header__redirect">
              <li className="header__redirect__item">
                <a href="#" className="header__redirect__link">
                  Menu
                </a>
              </li>
              <li className="header__redirect__item">
                <a href="#" className="header__redirect__link">
                  Rewards
                </a>
              </li>
              <li className="header__redirect__item">
                <a href="#" className="header__redirect__link">
                  Gift cards
                </a>
              </li>
            </ul>
          </div>
          <div className="header__more">
            <ul className="header__actions">
              <li className="header__actions__item">
                <a
                  href="#"
                  className="header__actions__link"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}>
                  <img
                    src={changeColor ? PointGreen : Point}
                    alt="Find a store"
                    className="header__actions__icon"
                  />
                  Find a store
                </a>
              </li>
              <li className="header__actions__item">
                <a
                  href="#"
                  className="header__actions__link header__actions__link--further">
                  Sign in
                </a>
              </li>
              <li className="header__actions__item">
                <a
                  href="#"
                  className="header__actions__link header__actions__link--closer">
                  Join now
                </a>
              </li>
            </ul>
          </div>
        </div>
        <button
          type="button"
          className="header__toggle"
          onClick={toggleHamburger}>
          <Hamburger
            size={20}
            toggled={toggleMenu?.MenuToggle}
            toggle={toggleMenu?.setMenuToggle}
            rounded
          />
        </button>
      </div>
    </HeaderStyled>
  );
}

export default Header;
