import React, { useRef } from "react";
import Navbar from "../components/Header/navbar";
import PanelProducts from "../components/Header/PanelProducts";
import PanelAbout from "../components/Header/PanelAbout";

const Header = () => {
  const panelProductsRef = useRef(null);
  const panelAboutRef = useRef(null);

  return (
    <>
      <Navbar aboutRef={panelAboutRef} productRef={panelProductsRef} />
      <PanelProducts ref={panelProductsRef} />
      <PanelAbout ref={panelAboutRef} />
    </>
  );
};

export default Header;
