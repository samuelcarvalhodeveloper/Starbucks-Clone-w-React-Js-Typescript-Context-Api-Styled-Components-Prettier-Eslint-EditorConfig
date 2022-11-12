import styled from "styled-components";
import { HeaderStyledProps } from "../../types";

const HeaderStyled = styled.header<HeaderStyledProps>`
  width: 100%;
  box-shadow: 0 1px 3px rgba(0,0,0,.1),0 2px 2px rgba(0,0,0,.06),0 0 2px rgba(0,0,0,.07);
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  position: ${(props) => (props.hamburgerToggle ? "fixed" : "relative")};

  .header__center {
    padding: 0 4rem;
    display: flex;
    width: 100%;
    max-width: 171.5rem;
    align-items: center;
    gap: 4rem;

    .header__logo {
      flex: 0 0 5rem;
      height: 5.1rem;
      display: flex;
      align-items: center;

      img {
        width: 100%;
      }
    }

    .header__content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      max-width: 144.5rem;

      .header__container {
        display: flex;
        align-items: center;
        justify-content: center;

        .header__redirect {
          display: flex;
          justify-content: center;
          align-items: center;
          list-style-type: none;
          gap: 2.4rem;

          .header__redirect__item {
            font-size: 1.4rem;
            font-weight: 700;
            font-family: SoDo Sans;
            display: block;
            letter-spacing: .14rem;
            line-height: 2.1rem;
            text-transform: uppercase;

            .header__redirect__link {
              display: block;
              color: rgba(0, 0, 0, 0.87);
              text-decoration: none;
              padding: 4rem 0;
            }

            .header__redirect__link:hover {
              color: #00754a;
            }
          }
        }

      }
      .header__more {
        gap: 2.4rem;

        .header__actions {
          display: flex;
          justify-content: center;
          align-items: center;
          list-style-type: none;
          gap: 1.5rem;

          .header__actions__item {

            .header__actions__link {
              display: flex;
              gap: .5rem;
              align-items: center;
              justify-content: center;
              text-decoration: none;
              color: rgba(0, 0, 0, 0.87);
              font-weight: 600;
              font-family: SoDO sans;
              font-size: 1.4rem;

              .header__actions__icon {
                width: 2.4rem;
              }
            }

            .header__actions__link:hover {
              color: #00754a;
            }

            .header__actions__link--further {
              padding: .7rem 1.5rem;
              border: 1px solid rgba(0, 0, 0, 0.87);
              border-radius: 3rem;
              margin-left: 2.5rem;
              display: flex;
              align-items: center;
              justify-content: center;
            }

            .header__actions__link--further:hover {
              background: rgba(0,0,0,.06);
              color: rgba(0, 0, 0, 0.87);
            }

            .header__actions__link--closer {
              padding: .7rem 1.5rem;
              border: 1px solid rgba(0, 0, 0, 0.87);
              border-radius: 3rem;
              background-color: rgba(0, 0, 0, 0.87);
              color: white;
            }

            .header__actions__link--closer:hover {
              background: rgba(0,0,0,.7);
              color: white;
            }
          }
        }
      }
    }

    .header__toggle {
      display: none;
      justify-content: center;
      align-items: center;
      font-weight: 900;
      border-radius: 50%;
      flex: 0 0 3.8rem;
      border: none;
      background: none;
      color: rgba(0, 0, 0, 0.58);
      transition: all 150ms ease-in-out;
      margin: 0;
    }

    .header__toggle:hover {
      background:rgba(0,0,0,.06);
    }
  }

  @media screen and (min-width: 1700px) {

    .header__center {
      max-width: 1700px;
      justify-content: center;

      .header__logo {
        position: relative;
        left: -3.5rem;
      }

      .header__content {
        max-width: 144rem;
        position: relative;
        left: -3.5rem;
      }
    }
  }

  @media screen and (min-width: 795px) and (max-width: 1024px) {

  .header__center {

    .header__content {

      .header__container {

        .header__redirect {

          .header__redirect__item {

            .header__redirect__link {
              padding: 3.2rem 0;
            }
          }
        }
      }
    }
  }
  }

  @media screen and (max-width: 794px) {

    .header__center {
      justify-content: space-between;
      padding: 0 1.7rem;

      .header__logo {
        flex: 0 0 4rem;
        height: 4rem;
      }


      .header__content {
        display: none;
      }

      .header__toggle {
        display: flex;
        margin: 1.2rem 0;

        svg{
          height: 2rem;

          path{
            stroke: rgba(0, 0, 0, 0.58);
          }
        }
      }
    }
  }
`;

export default HeaderStyled;
