import styled from "styled-components";
import type { SiteNormalFlowStyledProps } from "../../types";

const SiteNormalFlowStyled = styled.main<SiteNormalFlowStyledProps>`
  display: flex;
  flex-flow: column wrap;

@media screen and (max-width: 794px) {
    position: ${(props) => (props.toggleValue ? "fixed" : "relative")};
    margin: ${(props) => (props.toggleValue ? "7.2rem 0" : "0")};
  }
`;

export default SiteNormalFlowStyled;
