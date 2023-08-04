import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">Logo</h1>
      <div className="navMenuContainer">
        <ul className="navMenu">
          <li>
            <a href="/">Qualifications</a>
            <i class="fa-solid fa-chevron-down icon"></i>
          </li>
          <li>
            <a href="/">Organizations</a>
            <i class="fa-solid fa-chevron-down icon"></i>
          </li>
          <li>
            <a href="/">Research & Analysis</a>
            <i class="fa-solid fa-chevron-down icon"></i>
          </li>
          <li>
            <a href="/">Lorem ipsum</a>
            <i class="fa-solid fa-chevron-down icon"></i>
          </li>
          <li>
            <a href="/">Lorem ipsum</a>
            <i class="fa-solid fa-chevron-down icon"></i>
          </li>
        </ul>
        <div className="navAction">
          <i class="fa-solid fa-magnifying-glass search"></i>
          <button>Enrolment</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
