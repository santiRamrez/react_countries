import React from "react";
import "./styles/CountriesSelected.css";

const CountrySelected = ({ countryName, idx, sendIdx = (f) => f }) => {
  const handleClick = (e) => {
    e.preventDefault();
    sendIdx(idx);
  };
  return (
    <div className="CountriesSelected">
      <p>{countryName}</p>
      <button onClick={handleClick}>X</button>
    </div>
  );
};

const CountriesSelected = ({ selected = [], indexes = (f) => f }) => {
  return (
    <div className="CountriesSelected-container">
      {selected.map((country, i) => (
        <CountrySelected
          key={i}
          idx={i}
          countryName={country}
          sendIdx={indexes}
        />
      ))}
    </div>
  );
};

export default CountriesSelected;
