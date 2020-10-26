import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="navbar-2">
      <div className="sidenav">
        <Link to="/nature">Nature</Link>
        <Link to="/medieval">Medieval</Link>
        <Link to="/wedding">Wedding</Link>
        <a className="textmenu" href="./gallery4.html">
          Portraits
        </a>
        <a className="textmenu" href="./gallery5.html">
          Events
        </a>
        <a className="textmenu" href="./gallery6.html">
          Shows
        </a>
        <a className="textmenu" href="./gallery7.html">
          Concerts
        </a>
        <a className="textmenu" href="./gallery8.html">
          Personal
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
