import React from "react";
import "./styles/BoardCountries.css";
import "./styles/CountryCard.css";

//Components
import CountryCard from "./CountryCard";

class BoardCountries extends React.Component {
  render() {
    return (
      <div className="board-countries">
        {this.props.dataCountryCards.map((country, i) => (
          <CountryCard title={country[0]} flag={country[1]} key={i} />
        ))}
      </div>
    );
  }
}

export default BoardCountries;
