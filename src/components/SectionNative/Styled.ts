import styled from "styled-components";

const SectionNativeStyled = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0 0 3.2rem 0;

  .section__native__center {
    font-family: SoDo sans;
    width: 100%;
    max-width: 144rem;
    background: #1e3932;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row-reverse nowrap;

    .section__native__content {
      width: 100%;
      max-width: 72rem;
      padding: 3.2rem 8rem;

      .section__native__content__center {
        width: 100%;
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        gap: 2.4rem;
        justify-content: center;

        .section__native__title {
          font-size: 2.4rem;
          color: white;
          font-weight: 600;
          line-height: 3.6rem;
          letter-spacing: -.016rem;
          text-align: center;
        }

        .section__native__subtitle {
          font-size: 1.9rem;
          color: white;
          font-weight: 400;
          letter-spacing: -.016rem;
          line-height: 3.325rem;
          text-align: center;
          margin: 0 2rem .8rem 2rem;
        }

        .section__native__redirect {
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

        .section__native__redirect:hover {
          background: hsla(0,0%,100%,.12);
        }
      }
    }

    .section__native__img {
      width: 100%;
      display: flex;
      align-items: center;

      img {
        width: 100%;
        max-height: 62.4rem;
      }
    }
  }

  @media screen and (max-width: 767px) {

    .section__native__center {
      flex-flow: column-reverse wrap;

      .section__native__content {
        padding: 3.2rem 1.6rem;

        .section__native__content__center{

          .section__native__title {
            font-size: 2.4rem;
            letter-spacing: .1rem;
            line-height: 2.88rem;
          }

          .section__native__subtitle {
            font-size: 1.9rem;
            letter-spacing: -.016rem;
            line-height: initial;
          }
        }
      }
    }
  }
`;

export default SectionNativeStyled;
