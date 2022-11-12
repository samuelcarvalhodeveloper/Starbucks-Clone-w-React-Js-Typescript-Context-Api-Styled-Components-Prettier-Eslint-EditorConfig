import styled from "styled-components";

const NavFull = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  max-width: 144rem;

  .nav__redirect {
    display: flex;
    flex-flow: column wrap;
    width: 100%;
    max-width: 19rem;

    .nav__header {
      font-size: 1.9rem;
      font-family: SoDo sans;
      font-weight: 400;
      letter-spacing: -.016rem;
      line-height: 2.85rem;
      color: rgba(0,0,0,.87);
      margin: 2.4rem 0;
    }

    .nav__list {
      list-style-type: none;

      .nav__item {
        display: flex;
        flex-flow: column wrap;

        .nav__link {
          color: rgba(0,0,0,.58);
          text-decoration: none;
          transition: all 150ms ease-in-out;
          padding: .8rem 0;
          margin-bottom: .8rem;
          font-family: SoDo sans;
        }

        .nav__link:hover {
          color: rgba(0,0,0,.87);
        }
      }
    }
  }

  .nav__redirect:not(:nth-child(1)) {
    margin-left: 3.2rem;
  }

  @media screen and (max-width: 1500px){
    padding: 0 4rem;
  }
`;

export default NavFull;
