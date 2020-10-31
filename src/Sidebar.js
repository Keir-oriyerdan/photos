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
        <Link to="/portraits">Portraits</Link>
        <Link to="/events">Events</Link>
        <Link to="/shows">Shows</Link>
        <Link to="/concerts">Concerts</Link>
        <Link to="/personal">Personal</Link>
      </div>
    </div>
  );
}

export default Sidebar;
