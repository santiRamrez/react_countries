import React from "react";
import "./styles/CountriesSelected.css";

const CountrySelected = ({ countryName }) => {
  return <p>{countryName}</p>;
};

const CountriesSelected = ({ selected = [] }) => {
  return (
    <div className="CountriesSelected">
      {selected.map((countryName, i) => (
        <CountrySelected key={i} countryName={countryName} />
      ))}
    </div>
  );
};

export default CountriesSelected;
