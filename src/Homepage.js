import React from "react";
import "./Homepage.css";
import logo from "./images/logo.png";
import background from "./images/background.jpg";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div>
      <div className="containerlogo">
        <Link to="/home">
          <img className="logo" src={logo} alt="logo" />
        </Link>
        <p className="textpseudo">IMIONN SIAD</p>
      </div>
      <img className="homepage" src={background} alt="background" />
    </div>
  );
}

export default Homepage;
