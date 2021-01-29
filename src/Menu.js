import React from "react";
import "./Menu.css";
import logo from "./images/logo.png";
import { Link } from "react-router-dom";
import fb from "./images/facebook.png";
import twitter from "./images/twitter.png";
import YT from "./images/youtube.png";
import Insta from "./images/instagram.png";
import tumblr from "./images/tumblr.png";

function Menu() {
  return (
    <nav>
      <div>
        <div className="navbar">
          <div>
            <ul className="rs-container">
              <li>
                <a className="link" href="https://www.facebook.com/julhorn">
                  <img className="rsicon" src={fb} alt="fb" />
                </a>
              </li>
              <li>
                <a className="link" href="https://twitter.com/KeirORiyerdan">
                  <img className="rsicon" src={twitter} alt="twitter" />
                </a>
              </li>
              <li>
                <a
                  className="link"
                  href="https://www.instagram.com/julie__horn/"
                >
                  <img className="rsicon" src={Insta} alt="insta" />
                </a>
              </li>
              <li>
                <a
                  className="link"
                  href="https://www.youtube.com/c/KeirORiyerdan"
                >
                  <img className="rsicon" src={YT} alt="yt" />
                </a>
              </li>
              <li>
                <a
                  className="link"
                  href="https://ba-mhaith-liom-mo-saoirse.tumblr.com/"
                >
                  <img className="rsicon" src={tumblr} alt="tumblr" />
                </a>
              </li>
            </ul>
          </div>
          <div className="header-title-logo">
            <Link to="/Home">
              <img className="title" src={logo} alt="logo" />
              <p className="textlogo">IMIONN SIAD</p>
            </Link>
          </div>
          <div className="header-navbar">
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
      </div>
    </nav>
  );
}

export default Menu;
