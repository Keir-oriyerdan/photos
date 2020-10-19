import React from "react";
import "./Menu.css";
import logo from "./images/logo.png";

function Menu() {
  return (
    <nav>
      <div>
        <div class="navbar">
          <a href="index.html" title="ImionnSiad">
            <img class="title" src={logo} alt="logo" />
          </a>
          <ul class="navbar-top">
            <li>
              <a href="index.html">Home</a>
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
