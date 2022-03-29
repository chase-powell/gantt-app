import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  console.log("nav bar here")
  return (
    <nav className="nav-bar">
      <button>
        <Link to="/login">Logout</Link>
      </button>
    </nav>
  );
};

export default Nav;