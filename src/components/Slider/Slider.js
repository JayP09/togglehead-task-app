import React, { useRef, useEffect } from "react";
import "./Slider.css";

const Slider = () => {
  // Create a reference to the slider container element
  const sliderContainerRef = useRef(null);

  // Function to highlight the middle item in the slider
  const highlightMiddleItem = () => {
    const container = sliderContainerRef.current;
    const items = container.querySelectorAll(".sliderItem");

    // Get the bounding rectangle of the container and calculate its center
    const containerRect = container.getBoundingClientRect();
    const containerCenterX = containerRect.left + containerRect.width / 2;

    // Remove "highlighted" class from all items
    items.forEach((item) => {
      item.classList.remove("highlighted");
    });

    // Find the closest item to the center
    let closestItem = items[0];
    let closestDistance = Number.MAX_SAFE_INTEGER;
    items.forEach((item) => {
      // Get the bounding rectangle of the current item and calculate its center
      const itemRect = item.getBoundingClientRect();
      const itemCenterX = itemRect.left + itemRect.width / 2;
      const distanceFromCenter = Math.abs(itemCenterX - containerCenterX);
      if (distanceFromCenter < closestDistance) {
        closestDistance = distanceFromCenter;
        closestItem = item;
      }
    });

    // Add "highlighted" class to the closest item
    closestItem.classList.add("highlighted");
  };

  useEffect(() => {
    const handleScroll = () => {
      highlightMiddleItem();
    };

    const container = sliderContainerRef.current;
    container.addEventListener("scroll", handleScroll);

    // Call the function once initially to set the initial state
    highlightMiddleItem();

    // Clean up the event listener on unmount
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="sliderContainer" ref={sliderContainerRef}>
      {Array.from({ length: 15 }, (_, index) => index + 1).map((index) => (
        <div className="sliderItem" key={index}>
          <h3>Lorem ipsum {index}</h3>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod
          </p>
          <button>
            Know More
            <span>
              <i className="fa-solid fa-circle-chevron-right"></i>
            </span>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Slider;
