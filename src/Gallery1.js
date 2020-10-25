import React from "react";
import "./Gallery1.css";

let urls = [
  "01.jpg",
  "02.jpg",
  "03.jpg",
  "04.jpg",
  "05.jpg",
  "06.jpg",
  "07.jpg",
  "08.jpg",
  "09.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
  "13.jpg",
  "14.jpg",
  "15.jpg",
  "16.jpg",
  "17.jpg",
];

function Gallery1() {
  return (
    <div id="gallery">
      {urls.map((url) => (
        <div className="item">
          <img src={"./gallery1/" + url} className="gallery1" />
        </div>
      ))}
    </div>
  );
}

export default Gallery1;
