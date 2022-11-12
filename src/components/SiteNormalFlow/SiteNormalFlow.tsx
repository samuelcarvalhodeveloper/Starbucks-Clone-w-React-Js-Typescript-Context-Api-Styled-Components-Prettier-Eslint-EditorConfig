import { useContext } from "react";
import MenuToggleContext from "../../context/MenuToggleContext";
import SiteNormalFlowStyled from "./Styled";
import SectionCheer from "../SectionCheer/SectionCheer";
import SectionVeteran from "../SectionVeteran/SectionVeteran";
import SectionSugarCookie from "../SectionSugarCookie/SectionSugarCookie";
import SectionSwirl from "../SectionSwirl/SectionSwirl";
import SectionNative from "../SectionNative/SectionNavite";
import SectionGift from "../SectionGift/SectionGift";
import Restrictions from "../Restrictions/Restrictions";

function SiteNormalFlow() {
  const menuToggle = useContext(MenuToggleContext);

  return (
    <SiteNormalFlowStyled toggleValue={menuToggle?.MenuToggle}>
      <SectionCheer />
      <SectionVeteran />
      <SectionSugarCookie />
      <SectionSwirl />
      <SectionNative />
      <SectionGift />
      <Restrictions />
    </SiteNormalFlowStyled>
  );
}

export default SiteNormalFlow;
