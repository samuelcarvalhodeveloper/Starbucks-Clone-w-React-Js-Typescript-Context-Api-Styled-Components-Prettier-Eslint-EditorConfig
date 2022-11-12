import { createContext } from "react";
import type { MenuToggleContextType } from "../types";

const MenuToggleContext = createContext<MenuToggleContextType | null>(null);

export default MenuToggleContext;
