import React, { useState } from "react";
import "./Navbar.css";
import NavMenu from "../NavMenu/NavMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <h1 className="logo">Logo</h1>
      <div className="navMenuContainer">
        <NavMenu isOpen={isOpen} closeMenu={() => setIsOpen(false)} />
        <div className="navAction">
          <i className="fa-solid fa-magnifying-glass searchIcon"></i>
          <button>Enrolment</button>
          <i
            className="fa-solid fa-bars menuIcon"
            onClick={() => setIsOpen(true)}
          ></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
