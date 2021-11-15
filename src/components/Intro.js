import React from "react";

//Styles
import "./styles/Intro.css";
import "./styles/Autocomplete.css";

//Components
import Autocomplete from "./Autocomplete";

function Intro({ intro, dataAutocomplete }) {
  return (
    <div className="intro-container">
      <h2>{intro}</h2>
      <Autocomplete countryList={dataAutocomplete} />
    </div>
  );
}

export default Intro;
