import React, { useRef } from "react";
import "./styles/SidebarFilter.css";

import Autocomplete from "../components/Autocomplete";

//Insted of using useState, I can declare a variable outside of the component
let param = "";

const SidebarFilter = ({
  listCountries,
  countrySelected = (f) => f,
  paramSelected = (f) => f,
}) => {
  const inpSalary = useRef(null);

  const handleChange = (e) => {
    param = e.target.value;
    paramSelected(param);
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
      {listCountries && (
        <div className="selectCountry">
          <Autocomplete
            hasSelected={countrySelected}
            countryList={justNames(listCountries)}
            size={"13.5px"}
          />
        </div>
      )}
      <div className="compareSection">
        <div className="check-container">
          <input
            id="people"
            type="radio"
            name="parameter"
            value="Population"
            onChange={handleChange}
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
            ref={inpSalary}
          />
          <label htmlFor="currency">Minimum Wage (Annual)</label>
        </div>
      </div>
      <div className="caption-salary-container">
        {inpSalary.current && (
          <p>
            The minimum wage was taken from OECD database as PPP (Purchasing
            Power Parities)
          </p>
        )}
      </div>
    </form>
  );
};

export default SidebarFilter;
