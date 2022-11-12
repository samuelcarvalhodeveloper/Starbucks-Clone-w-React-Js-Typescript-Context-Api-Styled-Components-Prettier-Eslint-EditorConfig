import styled from "styled-components";
import type { FooterStyledProps } from "../../types";

const FooterStyled = styled.footer<FooterStyledProps>`
  display: ${(props) => (props.toggleValue ? "none" : "flex")};
  justify-content: center;
  flex-flow: column wrap;
  align-items: center;
  width: 100%;
  box-shadow: 0 -.1rem .3rem rgb(0 0 0 / 10%), 0 -2px 2px rgb(0 0 0 / 6%), 0 0 2px rgb(0 0 0 / 7%);

  .footer__hr {
    border: .1rem solid rgba(0,0,0, .1);
    width: 100%;
    max-width: 144rem;
    margin: 3.1rem 0;
  }

  .footer__redirect {
    display: flex;
    width: 100%;
    max-width: 144rem;
    gap: .4rem;
    margin-bottom: 1.6rem;

    .footer__link {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: .6rem;
      transition: background 150ms ease-in-out;
      border-radius: 50%;
    }

    .footer__link:hover {
      background: rgba(0,0,0, .1);
    }

  }

  .footer__policy {
    display: flex;
    width: 100%;
    max-width: 144rem;

    .footer__policy__link {
      font-family: SoDo sans;
      color: rgba(0,0,0,.87);
      text-decoration: none;
      font-size: 1.6rem;
      font-weight: 500;
      line-height: 2.4rem;
      letter-spacing: -.016;
      padding: 0 1.6rem;
    }

    .footer__policy__link:hover {
      text-decoration: underline;
    }

    .footer__policy__link:nth-child(1){
      padding-left: 0;
    }

    .footer__vr {
      width: .1rem;
      height: 2rem;
      margin: 0 .8rem;
      background-color: rgba(0,0,0,.87);
    }
  }

  .footer__advise{
    width: 100%;
    max-width: 144rem;
    margin: 1.6rem 0 4rem;

    .footer__copyright {
      padding: 0 1rem;
      font-family: SoDo sans;
      font-size: 1.4rem;
      color: rgba(0,0,0,.58);
      font-weight: 400;
      line-height: 2.1rem;
      letter-spacing: -.016;
      text-align: left;
    }
  }

  @media screen and (min-width: 1024px) and (max-width: 1500px) {

    .footer__policy {
      padding-left: 5rem;
    }

  }

  @media screen and (max-width: 1500px) {
    .footer__hr {
      width: calc(100% - 4rem);
    }

    .footer__redirect {
      padding-left: 4rem;
    }

    .footer__advise {
      padding-left: 4rem;
    }
  }

  @media screen and (max-width: 1024px) {

    .footer__hr {
      margin-top: 1.5rem;
    }

    .footer__policy {
      flex-flow: column wrap;
      padding-left: 3rem;
      gap: 1.6rem;

      .footer__policy__link:nth-child(1) {
        padding-left: .8rem;
      }

      .footer__policy__link {
        padding: 0 .8rem;
        margin: 0 0 .4rem;
        text-align: left;
      }

      .footer__vr {
        display: none;
      }
    }

    .footer__redirect {
      padding-left: 1rem;
      margin-bottom: 2.5rem;
    }

    .footer__policy {
      padding-left: 1rem;
    }

    .footer__advise {
      padding-left: 1rem;
    }
  }

  @media screen and (max-width: 768px) {

    .footer__policy {

      .footer__policy__link {
        font-size: 1.4rem;
      }
    }

    .footer__advise {
      font-size: 1.4rem;
      margin-top: 2rem;
    }
  }
`;

export default FooterStyled;
