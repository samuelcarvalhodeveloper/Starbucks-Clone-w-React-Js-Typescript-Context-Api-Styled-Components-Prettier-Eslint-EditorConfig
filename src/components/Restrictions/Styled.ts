import styled from "styled-components";

const RestrictionsStyled = styled.section`
  padding: 3.2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .restrictions__title {
    font-family: SoDo sans;
    font-size: 1.4rem;
    font-weight: 400;
    color: black;
    letter-spacing: -.016rem;
    line-height: 2.52rem;
    text-align: center;

    .restrictions__link {
      font-family: SoDo sans;
    font-size: 1.4rem;
    font-weight: 400;
    color: black;
    letter-spacing: -.016rem;
    line-height: 2.52rem
    }

    .restrictions__link:hover {
      text-decoration: none;
    }
  }


`;

export default RestrictionsStyled;
