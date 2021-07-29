import React from "react";

function Logo({ title, theLogo }) {
  return (
    <div className="Logo">
      <div className="container-svg">
        <img src={theLogo} alt="country logo" />
      </div>
      <h1>{title}</h1>
    </div>
  );
}

export default Logo;
