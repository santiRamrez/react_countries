import React from "react";
import theLogo from "../assets/images/svg/earth.svg";

function Logo() {
  return (
    <div className="Logo">
      <div className="container-svg">
        <img src={theLogo} alt="country logo" />
      </div>
      <h1>Country Data 2.0</h1>
    </div>
  );
}

export default Logo;
