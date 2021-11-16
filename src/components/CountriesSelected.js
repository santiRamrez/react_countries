import React from "react";
import "./styles/CountriesSelected.css";

const CountriesSelected = ({ selected = [] }) => {
  return (
    <div className="CountriesSelected">
      <p>Venezuela</p>
      <p>Brazil</p>
    </div>
  );
};

export default CountriesSelected;
