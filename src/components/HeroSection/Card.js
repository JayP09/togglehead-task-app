import React from "react";

const Card = ({ slide }) => {
  return (
    <div className="card">
      <div className="containerLeft">
        <h1>{slide.title}</h1>
        <p>{slide.content}</p>
        <button>
          Know more
          <span>
            <i className="fa-solid fa-caret-right"></i>
          </span>
        </button>
      </div>
      <div className="containerRight">
        <img src={slide.imgSrc} alt="hero section" />
      </div>
    </div>
  );
};

export default Card;
