import React from "react";
import "./FooterSection.css";

const FooterSection = () => {
  return (
    <footer>
      <div className="infoContainer">
        <div className="contactUs">
          <h2>Contact us</h2>
          <p>Address: amet, consetetur sadipscing elitr, sed diam</p>
          <p>Email id: test@gmail.com </p>
          <p>Phone no: 123456789</p>
        </div>
        <div className="socials">
          <h2>Follow us</h2>
          <div className="socialIcons">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a href="https://www.quora.com/" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-quora"></i>
            </a>
          </div>
        </div>
        <div className="officeInfo">
          <h2>Head Office</h2>
          <div className="officeInfoContainer">
            <div>
              <i className="fa-solid fa-location-dot"></i>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam
              </p>
            </div>
            <div>
              <i className="fa-regular fa-clock"></i>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,</p>
            </div>
            <div>
              <i className="fa-regular fa-clock"></i>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,</p>
            </div>
            <div>
              <i className="fa-solid fa-train"></i>
              <p>Lorem ipsum Lorem ipsum dolor</p>
            </div>
          </div>
        </div>
        <div className="bgImage">
          <img src="/bg.png" alt="background" />
        </div>
      </div>
      <div className="copyright">
        &copy; 2021 All Right Reserved. Privacy Policy
      </div>
    </footer>
  );
};

export default FooterSection;
