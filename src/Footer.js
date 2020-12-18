import React from "react";
import "./Footer.css";
import fb from "./images/facebook.png";
import twitter from "./images/twitter.png";
import YT from "./images/youtube.png";
import Insta from "./images/instagram.png";

function Footer() {
  return (
    <footer>
      <p>What the fuck</p>
      <div className="rs-container2">
        <img className="rsicon" src={fb} alt="fb" />

        <img className="rsicon" src={twitter} alt="twitter" />

        <img className="rsicon" src={Insta} alt="insta" />

        <img className="rsicon" src={YT} alt="yt" />
      </div>
    </footer>
  );
}

export default Footer;
