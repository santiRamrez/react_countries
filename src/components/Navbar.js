import React from "react";
//React-router
import { Link } from "react-router-dom";

function Navbar({ title1, link1, title2, link2 }) {
  return (
    <nav className="Navbar">
      <Link to={link1}>{title1}</Link>
      <Link to={link2}>{title2}</Link>
    </nav>
  );
}

export default Navbar;
