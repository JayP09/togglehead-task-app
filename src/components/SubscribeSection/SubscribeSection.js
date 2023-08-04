import React from "react";
import "./SubscribeSection.css";

const SubscribeSection = () => {
  return (
    <div className="subscribeContainer">
      <div className="subscribeLeft">
        <h1>Subscribe</h1>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna
        </p>
        <div className="inputContainer">
          <input
            type="email"
            name="email"
            placeholder="Enter your Email Address"
          />
          <button>
            Subscribe Now
            <span>
              <i class="fa-solid fa-caret-right"></i>
            </span>
          </button>
        </div>
      </div>
      <div className="subscribeRight">
        <img src="/subscribe.jpg" alt="subscribe" />
      </div>
    </div>
  );
};

export default SubscribeSection;
