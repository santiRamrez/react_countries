import React from "react";

function Logo({ title, theLogo }) {
  return (
    <a href="/" className="Logo">
      <div className="container-svg">
        <img src={theLogo} alt="country logo" />
      </div>
      <h1>{title}</h1>
    </a>
  );
}

export default Logo;
