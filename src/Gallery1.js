import React from "react";
import "./Gallery2.css";
import { SRLWrapper } from "simple-react-lightbox";

let columns = [
  ["01.jpg", "28.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg"],
  ["24.jpg", "22.jpg", "27.jpg", "10.jpg", "11.jpg", "12.jpg"],
  ["13.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg", "18.jpg"],
  ["19.jpg", "20.jpg", "21.jpg", "22.jpg", "23.jpg", "24.jpg"],
  ["25.jpg", "26.jpg", "27.jpg", "28.jpg", "07.jpg", "08.jpg"],
];

function Gallery1() {
  return (
    <div className="gallery">
      <SRLWrapper>
        <div className="row">
          {columns.map((column) => (
            <div className="column">
              {column.map((url) => (
                <img src={"./gallery1/" + url} alt="" />
              ))}
            </div>
          ))}
        </div>
      </SRLWrapper>
    </div>
  );
}

export default Gallery1;
