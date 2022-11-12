import styled from "styled-components";

const SectionSwirlStyled = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0 0 3.2rem 0;

  .section__swirl__center {
    font-family: SoDo sans;
    width: 100%;
    max-width: 144rem;
    background: #00b388;
    display: flex;
    justify-content: center;
    align-items: center;

    .section__swirl__content {
      width: 100%;
      max-width: 72rem;
      padding: 3.2rem;

      .section__swirl__content__center {
        width: 100%;
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        gap: 2.4rem;
        justify-content: center;

        .section__swirl__title {
          font-size: 5rem;
          color: #1e3932;
          font-weight: 600;
          letter-spacing: .2rem;
          line-height: 6rem;
          text-align: center;
        }

        .section__swirl__subtitle {
          font-size: 2.4rem;
          color: #1e3932;
          font-weight: 400;
          letter-spacing: -.016rem;
          line-height: 3.6rem;
          text-align: center;
          margin: 0 2rem .8rem 2rem;
        }

        .section__swirl__redirect {
          display: block;
          border: .1rem solid #1e3932;
          color: #1e3932;
          letter-spacing: -.016rem;
          font-weight: 600;
          text-decoration: none;
          text-align: center;
          border-radius: 3rem;
          line-height: 1.92rem;
          padding: .7rem 1.6rem;
          transition: background 150ms ease-in-out;
        }

        .section__swirl__redirect:hover {
          background: rgba(30,57,50,.1);
        }
      }
    }

    .section__swirl__img {
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

    .section__swirl__center {

      .section__swirl__content {
        padding: 3.2rem 1.6rem;

        .section__swirl__content__center{

          .section__swirl__title {
            font-size: 2.8rem;
            letter-spacing: .1rem;
            line-height: 3.36rem;
          }
        }
      }
    }
  }

  @media screen and (max-width: 767px) {

    .section__swirl__center {
      flex-flow: column-reverse wrap;

      .section__swirl__content {
        padding: 3.2rem 1.6rem;

        .section__swirl__content__center{

          .section__swirl__title {
            font-size: 2.4rem;
            letter-spacing: .1rem;
            line-height: 2.88rem;
          }

          .section__swirl__subtitle {
            font-size: 1.9rem;
            letter-spacing: -.016rem;
            line-height: initial;
          }
        }
      }
    }
  }
`;

export default SectionSwirlStyled;
