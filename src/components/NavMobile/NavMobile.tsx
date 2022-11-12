import { useEffect, useState } from "react";
import Arrow from "../../assets/img/Arrow.svg";
import NavMobileStyled from "./Styled";

function NavMobile() {
  const [aboutVisibility, setAboutVisibility] = useState(false);
  const [careersVisibility, setCareersVisibility] = useState(false);
  const [socialVisibility, setSocialVisibility] = useState(false);
  const [partnersVisibility, setPartnersVisibility] = useState(false);
  const [orderVisibility, setOrderVisibility] = useState(false);

  function handleAboutClick(): any {
    if (aboutVisibility) return setAboutVisibility(false);
    return setAboutVisibility(true);
  }

  function handleCareersClick(): any {
    if (careersVisibility) return setCareersVisibility(false);
    return setCareersVisibility(true);
  }

  function handleSocialClick(): any {
    if (socialVisibility) return setSocialVisibility(false);
    return setSocialVisibility(true);
  }

  function handlePartnersClick(): any {
    if (partnersVisibility) return setPartnersVisibility(false);
    return setPartnersVisibility(true);
  }

  function handleOrderClick(): any {
    if (orderVisibility) return setOrderVisibility(false);
    return setOrderVisibility(true);
  }

  useEffect(() => {}, [aboutVisibility, careersVisibility, socialVisibility]);

  return (
    <NavMobileStyled>
      <div className="nav__redirect">
        <div className="nav__toggle" onClick={handleAboutClick}>
          About Us
          <button
            type="button"
            className="nav__toggle__button"
            style={{
              transform: aboutVisibility ? "rotate(-90deg)" : "rotate(90deg)",
            }}
            onClick={handleAboutClick}>
            <img src={Arrow} alt="Toggle arrow" width="19px" />
          </button>
        </div>
        <ul
          className="nav__list"
          style={{ display: aboutVisibility ? "block" : "none" }}>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Our Company
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Our Coffee
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Stories and News
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Starbucks Archive
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Investor Relations
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Customer Service
            </a>
          </li>
        </ul>
      </div>
      <div className="nav__redirect">
        <div className="nav__toggle" onClick={handleCareersClick}>
          Careers
          <button
            type="button"
            className="nav__toggle__button"
            style={{
              transform: careersVisibility ? "rotate(-90deg)" : "rotate(90deg)",
            }}
            onClick={handleCareersClick}>
            <img src={Arrow} alt="Toggle arrow" width="19px" />
          </button>
        </div>
        <ul
          className="nav__list"
          style={{ display: careersVisibility ? "block" : "none" }}>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Culture and Values
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Inclusion, Diversity, and Equity
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              College Achievement Plan
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Alumni Community
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              U.S. Careers
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              International Careers
            </a>
          </li>
        </ul>
      </div>
      <div className="nav__redirect">
        <div className="nav__toggle" onClick={handleSocialClick}>
          Social Impact
          <button
            type="button"
            className="nav__toggle__button"
            style={{
              transform: socialVisibility ? "rotate(-90deg)" : "rotate(90deg)",
            }}
            onClick={handleSocialClick}>
            <img src={Arrow} alt="Toggle arrow" width="19px" />
          </button>
        </div>
        <ul
          className="nav__list"
          style={{ display: socialVisibility ? "block" : "none" }}>
          <li className="nav__item">
            <a href="#" className="nav__link">
              People
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Planet
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Environmental and Social Impact Reporting
            </a>
          </li>
        </ul>
      </div>
      <div className="nav__redirect">
        <div className="nav__toggle" onClick={handlePartnersClick}>
          For Business Partners
          <button
            type="button"
            className="nav__toggle__button"
            style={{
              transform: partnersVisibility
                ? "rotate(-90deg)"
                : "rotate(90deg)",
            }}
            onClick={handlePartnersClick}>
            <img src={Arrow} alt="Toggle arrow" width="19px" />
          </button>
        </div>
        <ul
          className="nav__list"
          style={{ display: partnersVisibility ? "block" : "none" }}>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Landlord Support Center
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Suppliers
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Corporate Gift Card Sales
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Office and Foodservice Coffee
            </a>
          </li>
        </ul>
      </div>
      <div className="nav__redirect">
        <div className="nav__toggle" onClick={handleOrderClick}>
          Order and Pickup
          <button
            type="button"
            className="nav__toggle__button"
            style={{
              transform: orderVisibility ? "rotate(-90deg)" : "rotate(90deg)",
            }}
            onClick={handleOrderClick}>
            <img src={Arrow} alt="Toggle arrow" width="19px" />
          </button>
        </div>
        <ul
          className="nav__list"
          style={{ display: orderVisibility ? "block" : "none" }}>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Order on the App
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Order on the Web
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Delivery
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Order and Pickup Options
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Explore and Find Coffee for Home
            </a>
          </li>
        </ul>
      </div>
    </NavMobileStyled>
  );
}

export default NavMobile;
