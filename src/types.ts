import React from "react";

export type HeaderStyledProps = {
  hamburgerToggle: boolean | undefined;
}

export type MenuToggleContextType = {
  MenuToggle: boolean;
  setMenuToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

export type AsideStyledProps = {
  toggleValue: boolean | undefined;
}

export type SiteNormalFlowStyledProps = {
  toggleValue: boolean | undefined;
}

export type FooterStyledProps = {
  toggleValue: boolean | undefined;
}
