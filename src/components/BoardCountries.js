import React from "react";
import "./styles/BoardCountries.css";
import "./styles/CountryCard.css";

//Components
import CountryCard from "./CountryCard";

const BoardCountries = ({ dataCountryCards }) => {
  return (
    <div className="board-countries">
      {dataCountryCards.map((country, i) => (
        <CountryCard
          title={country[0]}
          flag={country[1]}
          key={i}
          link={country[2]}
        />
      ))}
    </div>
  );
};

export default BoardCountries;
