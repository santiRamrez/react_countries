import React from "react";

//React-router
import { Link } from "react-router-dom";

function Logo({ title, theLogo }) {
  return (
    <Link to="/" className="Logo">
      <div className="container-svg">
        <img src={theLogo} alt="country logo" />
      </div>
      <h1>{title}</h1>
    </Link>
  );
}

export default Logo;
