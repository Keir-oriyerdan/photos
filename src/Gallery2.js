import React from "react";
import "./Gallery2.css";

let columns = [
  [
    "01.jpg",
    "02.jpg",
    "03.jpg",
    "04.jpg",
    "05.jpg",
    "06.jpg",
    "16.jpg",
    "17.jpg",
    "18.jpg",
  ],
  [
    "07.jpg",
    "08.jpg",
    "09.jpg",
    "10.jpg",
    "11.jpg",
    "12.jpg",
    "13.jpg",
    "14.jpg",
    "15.jpg",
  ],
  [
    "19.jpg",
    "20.jpg",
    "21.jpg",
    "22.jpg",
    "23.jpg",
    "24.jpg",
    "25.jpg",
    "26.jpg",
    "27.jpg",
  ],
  [
    "28.jpg",
    "29.jpg",
    "30.jpg",
    "01.jpg",
    "02.jpg",
    "03.jpg",
    "04.jpg",
    "11.jpg",
    "12.jpg",
  ],
];

function Gallery2() {
  return (
    <div ClassName="gallery">
      <div className="row">
        {columns.map((column) => (
          <div className="columnmed">
            {column.map((url) => (
              <img className="photomed" src={"./gallery2/" + url} alt="" />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery2;
