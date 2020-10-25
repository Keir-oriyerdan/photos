import React from "react";
import "./Menu.css";
import logo from "./images/logo.png";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav>
      <div>
        <div className="navbar">
          <a href="index.html" title="ImionnSiad">
            <img className="title" src={logo} alt="logo" />
          </a>
          <ul className="navbar-top">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="./categories.html">Galleries</a>
            </li>
            <li>
              <a href="about.html">About</a>
            </li>
            <li>
              <a href="./contact.html">Contact</a>
            </li>
            <li>
              <a href="#">Mentions légales</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
