import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="nav-bar">
      <p>Welcome, Username</p>
      <button className="nav-link">
        <Link to="/login" className="link">Logout</Link>
      </button>
    </nav>
  );
};

export default Nav;