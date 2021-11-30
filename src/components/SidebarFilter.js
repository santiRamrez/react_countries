import React, { useState, useRef } from "react";
import "./styles/SidebarFilter.css";

import Autocomplete from "../components/Autocomplete";

const SidebarFilter = ({
  listCountries,
  countrySelected = (f) => f,
  paramSelected = (f) => f,
}) => {
  const [param, setParam] = useState("");

  const inpSalary = useRef(null);

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
            ref={inpSalary}
          />
          <label htmlFor="currency">Minimum Wage (Annual)</label>
        </div>
      </div>
      <div className="caption-salary-container">
        {inpSalary.current && (
          <p>
            The minimum wage was taken from OCDE database as PPP (Purchasing
            Power Parities)
          </p>
        )}
      </div>
    </form>
  );
};

export default SidebarFilter;
