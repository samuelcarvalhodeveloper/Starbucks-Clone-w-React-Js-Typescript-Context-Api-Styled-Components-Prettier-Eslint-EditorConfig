import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import MenuToggleContext from "./context/MenuToggleContext";
import Index from "./pages/Index/Index";

function App() {
  const [MenuToggle, setMenuToggle] = useState(false);

  return (
    <MenuToggleContext.Provider value={{ MenuToggle, setMenuToggle }}>
      <Routes>
        <Route path="*" element={<Index />} />
      </Routes>
    </MenuToggleContext.Provider>
  );
}

export default App;
