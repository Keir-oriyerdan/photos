import React from "react";
import "./Gallery2.css";

let columns = [
  ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"],
  ["06.jpg", "07.jpg", "08.jpg", "09.jpg", "10.jpg"],
  ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"],
  ["06.jpg", "07.jpg", "08.jpg", "09.jpg", "10.jpg"],
];

function Gallery4() {
  return (
    <div className="gallery">
      <div className="row">
        {columns.map((column) => (
          <div className="column">
            {column.map((url) => (
              <img className="photo" src={"./gallery4/" + url} alt="" />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery4;
