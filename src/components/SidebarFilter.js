import React, { useState } from "react";
import "./styles/SidebarFilter.css";

import Autocomplete from "../components/Autocomplete";

const SidebarFilter = ({
  listCountries,
  countrySelected = (f) => f,
  paramSelected = (f) => f,
}) => {
  const [param, setParam] = useState("");

  const handleChange = (e) => {
    setParam(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const justNames = (arr) => {
    let output = [];
    arr.forEach((obj) => output.push(obj.name.common));
    return output;
  };
  return (
    <form onSubmit={handleSubmit} className="SidebarFilter">
      <div className="selectCountry">
        <Autocomplete
          hasSelected={countrySelected}
          countryList={justNames(listCountries)}
          size={"13.5px"}
        />
      </div>
      <div className="compareSection">
        <div className="check-container">
          <input
            id="people"
            type="radio"
            name="parameter"
            value="Population"
            onChange={handleChange}
            onClick={paramSelected(param)}
          />
          <label htmlFor="people">Population</label>
        </div>
        <div className="check-container">
          <input
            id="area"
            type="radio"
            name="parameter"
            value="Area"
            onChange={handleChange}
            onClick={paramSelected(param)}
          />
          <label htmlFor="area">Area</label>
        </div>
        <div className="check-container">
          <input
            id="currency"
            type="radio"
            name="parameter"
            value="Salary"
            onChange={handleChange}
            onClick={paramSelected(param)}
          />
          <label htmlFor="currency">Minimum Wage</label>
        </div>
      </div>
    </form>
  );
};

export default SidebarFilter;
