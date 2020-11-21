import React from "react";
import "./Categories.css";
import Nature from "./Nature";
import Medieval from "./Medieval";
import Wedding from "./Wedding";
import Portraits from "./Portraits";
import Events from "./Events";
import Shows from "./Shows";
import Concerts from "./Concerts";
import Personal from "./Personal";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
        <div className="icon">
          <img
            src={"./categories/" + url}
            className="categories-image"
            alt="categories"
          />
          <Router>
            <Route exact path="./nature.png">
              <Nature />
            </Route>
            <Route exact path="/medieval">
              <Medieval />
            </Route>
            <Route exact path="/wedding">
              <Wedding />
            </Route>
            <Route exact path="/portraits">
              <Portraits />
            </Route>
            <Route exact path="/events">
              <Events />
            </Route>
            <Route exact path="/shows">
              <Shows />
            </Route>
            <Route exact path="/concerts">
              <Concerts />
            </Route>
            <Route exact path="/personal">
              <Personal />
            </Route>
          </Router>
        </div>
      ))}
    </div>
  );
}

export default Categories;
