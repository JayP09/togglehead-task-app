import React, { useRef, useState } from "react";
import "./HeroSection.css";
import Card from "./Card";

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
  const heroContainerRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0); // useState to keep track of the current slide

  const nextSlide = () => {
    let width = heroContainerRef.current.clientWidth;
    const totalSlides = slides.length;
    if (currentSlide === totalSlides - 1) {
      // If it's the last slide, reset to the first slide (index 0)
      heroContainerRef.current.scrollLeft = 0;
      setCurrentSlide(0);
    } else {
      // Otherwise, move to the next slide
      heroContainerRef.current.scrollLeft =
        heroContainerRef.current.scrollLeft + width;
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    let width = heroContainerRef.current.clientWidth;
    const totalSlides = slides.length;
    if (currentSlide === 0) {
      // If it's the first slide, move to the last slide
      heroContainerRef.current.scrollLeft = width * (totalSlides - 1);
      setCurrentSlide(totalSlides - 1);
    } else {
      // Otherwise, move to the previous slide
      heroContainerRef.current.scrollLeft =
        heroContainerRef.current.scrollLeft - width;
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <main>
      <div className="container" ref={heroContainerRef}>
        {slides.map((slide, index) => (
          <Card key={index} slide={slide} />
        ))}
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
