import SectionCheerStyled from "./Styled";

function SectionCheer() {
  return (
    <SectionCheerStyled>
      <div className="section__cheer__center">
        <div className="section__cheer__content">
          <h1 className="section__cheer__title">Cheer Starts Here</h1>
          <h2 className="section__cheer__subtitle">
            <a href="#" className="section__cheer__link">
              Join Starbucks<span className="section__cheer__link__sub">®</span>{" "}
              Rewards
            </a>{" "}
            to earn free drinks and treats when you order this holiday season.*
          </h2>
        </div>
      </div>
    </SectionCheerStyled>
  );
}

export default SectionCheer;
