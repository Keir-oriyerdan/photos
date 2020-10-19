import React from "react";
import "./Slider.css";

let urls = [
  "01.jpg",
  "02.jpg",
  "03.jpg",
  "04.jpg",
  "05.jpg",
  "06.jpg",
  "07.jpg",
  "08.jpg",
];

function Slider() {
  return (
    <div className="horizontal-slider">
      <div className="slider-container">
        {urls.map((url) => (
          <div className="item">
            <img src={"./slider/" + url} className="slider-image" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
