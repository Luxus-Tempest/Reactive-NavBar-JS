import React, { useEffect, useRef } from "react";

const Navbar = (props) => {
  const cursorRef = useRef(null);

  const moveCursor = (e) => {
    console.log(e.target);

    const cursor = cursorRef.current;
    const item = e.target;
    const rectangle = item.getBoundingClientRect();

    //get parent position
    const parentRectangle = item.parentElement.getBoundingClientRect();
    if (cursor) {
      cursor.style.width = `${rectangle.width}px`;
      cursor.style.left = `${rectangle.left - parentRectangle.left}px`;
    }

    console.log(cursorRef.current);

    props.aboutRef.current?.classList.remove("panel-active");
    props.productRef.current?.classList.remove("panel-active");

    switch (item.innerHTML) {
      case "Notre Entreprise":
        props.aboutRef.current?.classList.add("panel-active");
        break;
      case "Categories":
        props.productRef.current?.classList.add("panel-active");
        break;
      default:
        break;
    }
  };

  //FERMER LE PANEL SI L'UTILISATEUR CLICK EN DEHORS DE LA FENETRE
  const handleClickOutside = (e) => {
    const target = e.target;
    const aboutPanel = props.aboutRef.current;
    const productPanel = props.productRef.current;

    if (aboutPanel && !aboutPanel.contains(target)) {
      aboutPanel.classList.remove("panel-active");
    }

    if (productPanel && !productPanel.contains(target)) {
      productPanel.classList.remove("panel-active");
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <img src="/disney.jpg" alt="logo" className="logo" />

        <div className="navbar__item-wrapper">
          <ul>
            <li onMouseOver={moveCursor}>Categories</li>
            <li onMouseOver={moveCursor}>Notre Entreprise</li>
            <li onMouseOver={moveCursor}>Compte</li>
          </ul>
          <span ref={cursorRef}></span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
