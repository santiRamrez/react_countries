import React from "react";
import "./styles/SidebarFilter.css";

import Autocomplete from "../components/Autocomplete";

const SidebarFilter = ({ listCountries }) => {
  const justNames = (arr) => {
    let output = [];
    arr.forEach((obj) => output.push(obj.name.common));
    return output;
  };
  return (
    <form className="SidebarFilter">
      <div className="selectCountry">
        <p>Select a country</p>
        <Autocomplete countryList={justNames(listCountries)} size={"13.5px"} />
      </div>
      <div className="compareSection">
        <div className="check-container">
          <input id="people" type="checkbox" />
          <label htmlFor="people">Population</label>
        </div>
        <div className="check-container">
          <input id="area" type="checkbox" />
          <label htmlFor="area">Area</label>
        </div>
        <div className="check-container">
          <input id="currency" type="checkbox" />
          <label htmlFor="currency">Currency</label>
        </div>
      </div>
    </form>
  );
};

export default SidebarFilter;
