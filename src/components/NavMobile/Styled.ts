import styled from "styled-components";

const NavMobileStyled = styled.nav`
  width: 100%;

  .nav__redirect {
    width: 100%;
    padding: 0 2.4rem;

    .nav__toggle {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 1.9rem;
      font-weight: 400;
      font-family: SoDo sans;
      letter-spacing: -.016rem;
      line-height: 2.85rem;
      padding: .8rem 0 2.4rem;
      cursor: pointer;

      .nav__toggle__button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 4.4rem;
        height: 4.4rem;
        transform: rotate(90deg);
        border-radius: 50%;
        border: none;
        background: none;
        transition: background 150ms ease-in-out;
        cursor: pointer;
      }

      .nav__toggle__button:hover {
        background: rgba(0,0,0,.1);
      }
    }

    .nav__list {
      list-style-type: none;
      margin-bottom: .8rem;

      .nav__item {
        height: 3.8rem;
        display: flex;
        align-items: center;
        margin-bottom: .8rem;

        .nav__link {
          color: rgba(0,0,0,.58);
          text-decoration: none;
          padding: .8rem 0;
          font-size: 1.6rem;
          font-weight: 400;
          letter-spacing: -.016rem;
          line-height: 2.4rem;
        }

        .nav__link:hover {
          color: rgba(0,0,0,.87);
        }
      }
    }
  }

  .nav__redirect:nth-child(1) {
    margin-top: 2.4rem;
  }

  @media screen and (max-width: 767px) {

    .nav__redirect {
      padding: 0 1.6rem;

      .nav__toggle {
        font-size: 1.6rem;
      }

      .nav__list {

        .nav__item{

          .nav__link {
            font-size: 1.4rem;
            letter-spacing: -.014rem;
            line-height: 2.1rem;
          }
        }
      }
    }
  }
`;

export default NavMobileStyled;
