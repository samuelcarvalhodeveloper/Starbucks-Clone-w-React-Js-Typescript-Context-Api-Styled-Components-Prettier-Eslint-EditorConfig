import styled from "styled-components";
import { AsideStyledProps } from "../../types";

const AsideStyled = styled.aside<AsideStyledProps>`
  display: none;

  .aside__menu {
    display: flex;
    flex-flow: column wrap;

    .aside__list {
      display: flex;
      flex-flow: column wrap;
      margin: 3.2rem 0 0;

      .aside__list__item {
        list-style-type: none;

        .aside__list__link {
          color: rgba(0, 0, 0, 0.87);
          text-decoration: none;
          font-family: SoDo sans;
          font-size: 1.9rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.8rem 3.2rem;

          .aside__list__icon {
            width: 2.4rem;
          }
        }
      }
    }

    .aside__hr {
      border: .1rem solid rgba(0, 0, 0, 0.1);
      width: calc(100% - 7rem);
      margin: 1.6rem 3.2rem 3.2rem;
      align-self: center;
    }

    .aside__more {
      display: flex;
      margin: 0 2.4rem;
      list-style: none;
      gap: 1.6rem;

      .aside__actions__item {

        .aside__actions__link {
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          color: rgba(0, 0, 0, 0.87);
          font-weight: 600;
          font-family: SoDO sans;
          font-size: 1.4rem;
          padding: .7rem 1.5rem;
          border-radius: 3rem;
          border: 1px solid rgba(0, 0, 0, 0.87);
          transition: all 150ms ease-in-out;
        }

        .aside__actions__link:hover {
          background: rgba(0,0,0,.06);
        }

        .aside__actions__link--closer {
          background: black;
          color: white;
        }

        .aside__actions__link--closer:hover {
          background: rgba(0,0,0,.7);
          border: 1px solid rgba(0,0,0,.7);
          color: white;
        }
      }
    }

    .aside__findstore {
      display: flex;
      margin: 1.6rem 2.4rem 0;
      align-items: center;
      color: rgba(0, 0, 0, 0.87);
      text-decoration: none;
      font-size: 1.4rem;
      font-weight: 600;
      gap: .8rem;

      .aside__findstore__icon {
        width: 2.4rem;
      }
    }

    .aside__findstore:hover {
      color: #00754a;
    }
  }

  @media screen and (max-width: 794px) {
    display: ${(props) => (props.toggleValue ? "block" : "none")};

    .aside__menu {
      position: absolute;
      width: ${(props) => (props.toggleValue ? "80%" : "0")};
      max-width: 60rem;
      height: 100vh;
      background: white;
      right: 0;
      z-index: 2;

      .aside__space {
        width: 100%;
        height: 7.2rem;
      }
    }

    .aside__overlay {
      position: absolute;
      width: 100vw;
      height: 100vh;
      background: black;
      opacity: .5;
      z-index: 1;
      display: ${(props) => (props.toggleValue ? "block" : "none")};
    }
  }
`;

export default AsideStyled;
