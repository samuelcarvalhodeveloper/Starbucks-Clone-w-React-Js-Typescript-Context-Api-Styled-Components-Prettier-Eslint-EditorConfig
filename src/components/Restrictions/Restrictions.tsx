import RestrictionsStyled from "../Restrictions/Styled";

function Restrictions() {
  return (
    <RestrictionsStyled>
      <h4 className="restrictions__title">
        *At participating stores. Some restrictions apply. See
        <a href="#" className="restrictions__link">
          {" "}
          starbucks.com/rewards
        </a>
        .
      </h4>
    </RestrictionsStyled>
  );
}

export default Restrictions;
