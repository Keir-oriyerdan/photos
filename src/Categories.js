import React from "react";
import "./Categories.css";

let urls = [
  "concerts.png",
  "events.png",
  "mariage.png",
  "medieval.png",
  "nature.png",
  "personnal.png",
  "portraits.png",
  "shows.png",
];

function Categories() {
  return (
    <div class="iconcontainer">
      {urls.map((url) => (
        <div className="item">
          <img
            className="icon"
            src={"./categories/" + url}
            className="categories-image"
            alt="categories"
          />
        </div>
      ))}
    </div>
  );
}

export default Categories;
