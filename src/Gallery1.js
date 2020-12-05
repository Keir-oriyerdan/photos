import React from "react";
import "./Gallery1.css";
import { PopupboxManager } from "react-popupbox";

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
          <img src={"./gallery1/" + url} className="gallery1" alt="" />
        </div>
      ))}
    </div>
  );
}

export class Example extends Gallery1 {
  openPopupbox() {
    const content = (
      <div>
        <p className="quotes">Work like you don't need the money.</p>
        <p className="quotes">Dance like no one is watching.</p>
        <p className="quotes">And love like you've never been hurt.</p>
        <span className="quotes-from">― Mark Twain</span>
      </div>
    );
    PopupboxManager.open({ content });
  }

  render() {
    return (
      <div>
        <button onClick={this.openPopupbox}>Click me</button>
        <Gallery1 />
      </div>
    );
  }
}
export default Gallery1;
