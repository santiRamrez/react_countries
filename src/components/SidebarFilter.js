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
          <input id="people" type="radio" name="parameter" value="population" />
          <label htmlFor="people">Population</label>
        </div>
        <div className="check-container">
          <input id="area" type="radio" name="parameter" value="area" />
          <label htmlFor="area">Area</label>
        </div>
        <div className="check-container">
          <input id="currency" type="radio" name="parameter" value="salary" />
          <label htmlFor="currency">Minimum Wage</label>
        </div>
      </div>
    </form>
  );
};

export default SidebarFilter;
