import React from "react";
import "./Gallery2.css";
import { SRLWrapper } from "simple-react-lightbox";

let columns = [
  ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg"],
  ["07.jpg", "08.jpg", "09.jpg", "10.jpg", "11.jpg", "12.jpg"],
  ["13.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg", "18.jpg"],
  ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg"],
];

function Gallery6() {
  return (
    <div className="gallery">
      <SRLWrapper>
        <div className="row">
          {columns.map((column) => (
            <div className="column">
              {column.map((url) => (
                <img src={"./gallery6/" + url} alt="" />
              ))}
            </div>
          ))}
        </div>
      </SRLWrapper>
    </div>
  );
}

export default Gallery6;
