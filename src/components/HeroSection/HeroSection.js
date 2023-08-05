import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <main className="container">
      <div className="containerLeft">
        <h1>Lorem ipsum</h1>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd
        </p>
        <button>
          Know more
          <span>
            <i className="fa-solid fa-caret-right"></i>
          </span>
        </button>
      </div>
      <div className="containerRight">
        <img src="/herosection.jpg" alt="hero section" />
      </div>
    </main>
  );
};

export default HeroSection;
