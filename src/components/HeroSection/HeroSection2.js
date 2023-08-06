import React, { useState } from "react";
import "./HeroSection.css";

const slides = [
  {
    title: "Slide 1",
    content:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
    imgSrc: "/herosection.jpg",
  },
  {
    title: "Slide 2",
    content:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
    imgSrc: "/herosection.jpg",
  },
  {
    title: "Slide 3",
    content:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
    imgSrc: "/herosection.jpg",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  const { title, content, imgSrc } = slides[currentSlide];

  return (
    <main className="container">
      <div>
        <div className="containerLeft">
          <h1>{title}</h1>
          <p>{content}</p>
          <button>
            Know more
            <span>
              <i className="fa-solid fa-caret-right"></i>
            </span>
          </button>
        </div>
        <div className="containerRight">
          <img src={imgSrc} alt="hero section" />
        </div>
      </div>
      <div>
        <button className="sliderButtons" onClick={prevSlide}>
          {"<"}
        </button>
        <button className="sliderButtons" onClick={nextSlide}>
          {">"}
        </button>
      </div>
    </main>
  );
};

export default HeroSection;
