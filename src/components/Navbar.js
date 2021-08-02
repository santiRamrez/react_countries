import React from "react";

function Navbar({ title1, link1, title2, link2 }) {
  return (
    <nav className="Navbar">
      <a href={link1} rel="noreferrer" target="_blank">
        {title1}
      </a>
      <a href={link2} rel="noreferrer" target="_blank">
        {title2}
      </a>
    </nav>
  );
}

export default Navbar;
