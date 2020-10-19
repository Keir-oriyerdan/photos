import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="navbar-2">
      <div className="sidenav">
        <a className="textmenu" href="./gallery1.html">
          Nature
        </a>
        <a className="textmenu" href="./gallery2.html">
          Medieval
        </a>
        <a className="textmenu" href="./gallery3.html">
          Wedding
        </a>
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
