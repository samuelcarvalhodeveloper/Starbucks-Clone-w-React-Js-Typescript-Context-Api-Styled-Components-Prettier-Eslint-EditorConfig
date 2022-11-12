import { useContext, useState } from "react";
import MenuToggleContext from "../../context/MenuToggleContext";
import AsideStyled from "./Styled";
import Arrow from "../../assets/img/Arrow.svg";
import Point from "../../assets/img/Point.svg";
import PointGreen from "../../assets/img/PointGreen.svg";

function Aside() {
  const [changeColor, setchangeColor] = useState(false);
  const menuToggle = useContext(MenuToggleContext);

  function handleMouseEnter(): void {
    setchangeColor(true);
  }

  function handleMouseLeave(): void {
    setchangeColor(false);
  }

  return (
    <AsideStyled toggleValue={menuToggle?.MenuToggle}>
      <div className="aside__menu">
        <div className="aside__space">{false}</div>
        <ul className="aside__list">
          <li className="aside__list__item">
            <a href="#" className="aside__list__link">
              Menu
              <img src={Arrow} alt="Go to menu" className="aside__list__icon" />
            </a>
          </li>
          <li className="aside__list__item">
            <a href="#" className="aside__list__link">
              Rewards
            </a>
          </li>
          <li className="aside__list__item">
            <a href="#" className="aside__list__link">
              Gift Cards
            </a>
          </li>
        </ul>
        <hr className="aside__hr" />
        <ul className="aside__more">
          <li className="aside__actions__item">
            <a href="#" className="aside__actions__link">
              Sign in
            </a>
          </li>
          <li className="aside__actions__item">
            <a
              href="#"
              className="aside__actions__link aside__actions__link--closer">
              Join now
            </a>
          </li>
        </ul>
        <a
          href="#"
          className="aside__findstore"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          <img
            src={changeColor ? PointGreen : Point}
            alt="Find a store"
            className="aside__findstore__icon"
          />
          Find a store
        </a>
      </div>
      <div
        className="aside__overlay"
        onClick={() => {
          menuToggle?.setMenuToggle(false);
        }}>
        {false}
      </div>
    </AsideStyled>
  );
}

export default Aside;
