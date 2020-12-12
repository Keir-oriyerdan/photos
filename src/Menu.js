import React from "react";
import "./Menu.css";
import logo from "./images/logo.png";
import { Link } from "react-router-dom";
import fb from "./images/facebook.png";
import twitter from "./images/twitter.png";
import YT from "./images/youtube.png";
import Insta from "./images/instagram.png";

function Menu() {
  return (
    <nav>
      <div>
        <div className="navbar">
          <Link to="/Home">
            <img className="title" src={logo} alt="logo" />
          </Link>
          <Link to="/Home">
            <p className="textlogo">IMIONN SIAD</p>
          </Link>
          <div>
            <ul className="rs-container">
              <li>
                <img className="rsicon" src={fb} alt="fb" />
              </li>
              <li>
                <img className="rsicon" src={twitter} alt="twitter" />
              </li>
              <li>
                <img className="rsicon" src={Insta} alt="insta" />
              </li>
              <li>
                <img className="rsicon" src={YT} alt="yt" />
              </li>
            </ul>
          </div>

          <ul className="navbar-top">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Galleries">Galleries</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            <li>
              <Link to="/Legaldisclaimer">Mentions légales</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
