import styled from "styled-components";

const SectionSugarCookieStyled = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0 0 3.2rem 0;

  .section__sugarcookie__center {
    font-family: SoDo sans;
    width: 100%;
    max-width: 144rem;
    background: #d50032;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row-reverse;

    .section__sugarcookie__content {
      width: 100%;
      max-width: 72rem;
      padding: 3.2rem 8rem;

      .section__sugarcookie__content__center {
        width: 100%;
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        gap: 2rem;
        justify-content: center;

        .section__sugarcookie__title {
          font-size: 5rem;
          color: white;
          font-weight: 600;
          letter-spacing: .2rem;
          line-height: 6rem;
          text-align: center;
          padding: 2rem;
        }

        .section__sugarcookie__subtitle {
          font-size: 2.4rem;
          color: white;
          font-weight: 400;
          letter-spacing: -.016rem;
          line-height: 3.6rem;
          text-align: center;
          margin: 0 2rem .8rem 2rem;
        }

        .section__sugarcookie__redirect {
          display: block;
          border: .1rem solid white;
          color: white;
          letter-spacing: -.016rem;
          font-weight: 600;
          text-decoration: none;
          text-align: center;
          border-radius: 3rem;
          line-height: 1.92rem;
          padding: .7rem 1.6rem;
          transition: background 150ms ease-in-out;
        }

        .section__sugarcookie__redirect:hover {
          background: hsla(0,0%,100%,.12);
        }
      }
    }

    .section__sugarcookie__img {
      width: 100%;
      display: flex;
      align-items: center;

      img {
        width: 100%;
        max-height: 62.4rem;
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {

    .section__sugarcookie__center {

      .section__sugarcookie__content {
        padding: 3.2rem 1.6rem;

        .section__sugarcookie__content__center{

          .section__sugarcookie__title {
            font-size: 2.8rem;
            letter-spacing: .1rem;
            line-height: 3.36rem;
          }
        }
      }
    }
  }

  @media screen and (max-width: 767px) {

    .section__sugarcookie__center {
      flex-flow: column-reverse wrap;

      .section__sugarcookie__content {
        padding: 3.2rem 1.6rem;

        .section__sugarcookie__content__center{

          .section__sugarcookie__title {
            font-size: 2.4rem;
            letter-spacing: .1rem;
            line-height: 2.88rem;
          }

          .section__sugarcookie__subtitle {
            font-size: 1.9rem;
            letter-spacing: -.016rem;
            line-height: initial;
          }
        }
      }
    }
  }
`;

export default SectionSugarCookieStyled;
