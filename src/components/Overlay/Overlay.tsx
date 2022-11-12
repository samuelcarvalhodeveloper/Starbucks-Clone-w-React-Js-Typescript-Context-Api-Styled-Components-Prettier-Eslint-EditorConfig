import Aside from "../Aside/Aside";
import Header from "../Header/Header";
import OverlayStyled from "./Styled";

function Overlay() {
  return (
    <OverlayStyled>
      <Header />
      <Aside />
    </OverlayStyled>
  );
}

export default Overlay;
