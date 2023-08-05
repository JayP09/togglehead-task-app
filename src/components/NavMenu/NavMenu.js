import React from "react";
import "./NavMenu.css";

const NavMenu = ({ isOpen, closeMenu }) => {
  return (
    <ul className={`navMenu ${isOpen ? "" : "hide"}`}>
      <li>
        <a href="/">Qualifications</a>
        <i className="fa-solid fa-chevron-down icon"></i>
      </li>
      <li>
        <a href="/">Organizations</a>
        <i className="fa-solid fa-chevron-down icon"></i>
      </li>
      <li>
        <a href="/">Research & Analysis</a>
        <i className="fa-solid fa-chevron-down icon"></i>
      </li>
      <li>
        <a href="/">Lorem ipsum</a>
        <i className="fa-solid fa-chevron-down icon"></i>
      </li>
      <li>
        <a href="/">Lorem ipsum</a>
        <i className="fa-solid fa-chevron-down icon"></i>
      </li>
      <i className="fa-solid fa-xmark closeIcon" onClick={closeMenu}></i>
    </ul>
  );
};

export default NavMenu;
