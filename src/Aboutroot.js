import React from "react";
import "./About.css";
import portrait from "./images/portrait.png";
import { Link } from "react-router-dom";

function Aboutroot() {
  return (
    

div className="all">
<img className="title" src={portrait} alt="portrait" />
<p class="text">
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
  occaecat cupidatat non proident, sunt in culpa qui officia deserunt
  mollit anim id est laborum."
</p>
</div>
  );
}

export default Aboutroot;
