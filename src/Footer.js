import React from "react";
import "./Footer.css";
import fb from "./images/facebook.png";
import twitter from "./images/twitter.png";
import YT from "./images/youtube.png";
import Insta from "./images/instagram.png";
import tumblr from "./images/tumblr.png";

function Footer() {
  return (
    <footer>
      <p>What the fuck</p>
      <ul className="rs-container2">
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
          <a className="link" href="https://www.instagram.com/julie__horn/">
            <img className="rsicon" src={Insta} alt="insta" />
          </a>
        </li>
        <li>
          <a className="link" href="https://www.youtube.com/c/KeirORiyerdan">
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
    </footer>
  );
}

export default Footer;
