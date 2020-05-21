import React from "react";
import neural from "../images/neural.svg";
import website from "../images/website.svg";
import diamond from "../images/diamond.svg";

export default function Main() {
  return (
    <main>
      <div className="slider-text">
        <div className="slider">
          <img src={neural} alt="imagenes del header" />
          <img src={website} alt="imagenes del header" />
          <img src={diamond} alt="imagenes del header" />
        </div>
        <div className="main-text">
          <h2>New standard to believe</h2>
          <p>
            We are a software company that love to help in our
            customer growing. We work with the top and best
            technologies, to improve your business at any level that
            you want
          </p>
        </div>
      </div>
      <div className="cube-text">
        <div className="main-text">
          <h2>
            Designed for performance
          </h2>
          <p>
            Design the future of your business; integrate to the
            digital era in a simple, smart and sophisticated way.
          </p>
        </div>
        <div className="cube">
          <div className="cube-face cube-face-front"></div>
          <div className="cube-face cube-face-back"></div>
          <div className="cube-face cube-face-left"></div>
          <div className="cube-face cube-face-right"></div>
          <div className="cube-face cube-face-top"></div>
          <div className="cube-face cube-face-bottom"></div>
        </div>
      </div>
    </main>
  );
}