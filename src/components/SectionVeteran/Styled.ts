import styled from "styled-components";

const SectionVeteranStyled = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 3.2rem 0;

  .section__veteran__center {
    font-family: SoDo sans;
    width: 100%;
    max-width: 144rem;
    background: #d50032;
    display: flex;
    justify-content: center;
    align-items: center;

    .section__veteran__content {
      width: 100%;
      max-width: 72rem;
      padding: 3.2rem 8rem;

      .section__veteran__content__center {
        width: 100%;
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        gap: 2.4rem;
        justify-content: center;

        .section__veteran__title {
          font-size: 5rem;
          color: white;
          font-weight: 600;
          letter-spacing: .2rem;
          line-height: 6rem;
          text-align: center;
        }

        .section__veteran__subtitle {
          font-size: 2.4rem;
          color: white;
          font-weight: 400;
          letter-spacing: -.016rem;
          line-height: 3.6rem;
          text-align: center;
          margin: 0 2rem .8rem 2rem;
        }

        .section__veteran__redirect {
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

        .section__veteran__redirect:hover {
          background: hsla(0,0%,100%,.12);
        }
      }
    }

    .section__veteran__img {
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

    .section__veteran__center {

      .section__veteran__content {
        padding: 3.2rem 1.6rem;

        .section__veteran__content__center{

          .section__veteran__title {
            font-size: 2.8rem;
            letter-spacing: .1rem;
            line-height: 3.36rem;
          }
        }
      }
    }
  }

  @media screen and (max-width: 767px) {

    .section__veteran__center {
      flex-flow: column-reverse wrap;

      .section__veteran__content {
        padding: 3.2rem 1.6rem;

        .section__veteran__content__center{

          .section__veteran__title {
            font-size: 2.4rem;
            letter-spacing: .1rem;
            line-height: 2.88rem;
          }

          .section__veteran__subtitle {
            font-size: 1.9rem;
            letter-spacing: -.016rem;
            line-height: initial;
          }
        }
      }
    }
  }
`;

export default SectionVeteranStyled;
