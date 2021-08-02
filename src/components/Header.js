import React from "react";
import "./styles/Header.css";

//Components
import Logo from "./Logo";
import Navbar from "./Navbar";

//images
import theLogo from "../assets/images/svg/earth.svg";

function Header() {
  return (
    <div className="Header">
      <Logo title="Country Data 2.0" theLogo={theLogo} />
      <Navbar
        title1="Show Charts"
        link1="https://tecnolatam.cl/"
        title2="About"
        link2="https://tecnolatam.cl/"
      />
    </div>
  );
}

export default Header;
