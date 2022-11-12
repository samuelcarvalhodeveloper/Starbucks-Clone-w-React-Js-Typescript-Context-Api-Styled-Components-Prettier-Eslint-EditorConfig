import styled from "styled-components";

const SectionCheer = styled.section`
  display: flex;
  width: 100%;
  max-width: 144rem;
  align-self: center;

  .section__cheer__center {
    padding: 3.2rem 4.8rem;
    background: #d50032;
    width: 100%;
    display: flex;
    justify-content: center;

    .section__cheer__content {
      width: 100%;
      max-width: 76rem;
      display: flex;
      justify-content: center;
      flex-flow: column wrap;
      text-align: center;
      gap: 2.4rem;

      .section__cheer__title {
        font-size: 5rem;
        color: white;
        font-weight: 600;
        font-family: SoDO sans;
        text-transform: uppercase;
        letter-spacing: .2rem;
        line-height: 6rem;
      }

      .section__cheer__subtitle {
        font-family: SoDO sans;
        font-size: 2.4rem;
        color: white;
        font-weight: 400;
        letter-spacing: -.016rem;
        line-height: 3.6rem;

        .section__cheer__link {
          color: white;

          .section__cheer__link__sub {
            font-size: 1rem;
          }
        }
        .section__cheer__link:hover {
          text-decoration: none;
        }
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {

    .section__cheer__center {

      .section__cheer__content {
        max-width: 55rem;
        gap: 1rem;

        .section__cheer__title {
          font-size: 2.8rem;
          letter-spacing: .1rem;
        }
      }
    }
  }

  @media screen and (max-width: 767px) {

    .section__cheer__center {
      padding: 1.8rem 2rem 3.3rem 2rem;

      .section__cheer__content {
        gap: .8rem;

        .section__cheer__title {
          font-size: 2.8rem;
          letter-spacing: .1rem;
        }

        .section__cheer__subtitle {
          font-size: 2.2rem;
          line-height: 3.3rem;
        }
      }
    }
  }
`;

export default SectionCheer;
