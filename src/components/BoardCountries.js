import React from "react";
import "./styles/BoardCountries.css";

//Components
import CountryCard from "./CountryCard";

//API

class BoardCountries extends React.Component {
  render() {
    return (
      <div className="board-countries">
        {this.props.dataCountryCards.map((country, i) => (
          <CountryCard
            title={country[0]}
            flag={country[1]}
            key={i}
            xLink={country[2].replace(/\s/g, "-")}
          />
        ))}
      </div>
    );
  }
}

export default BoardCountries;
