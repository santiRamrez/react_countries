import React from "react";
import { FixedSizeList as List } from "react-window";
import "./styles/BoardCountries.css";
import "./styles/CountryCard.css";

//Components
import CountryCard from "./CountryCard";

class BoardCountries extends React.Component {
  render() {
    return (
      <List
        height={window.innerHeight}
        width={window.innerWidth - 20}
        itemCount={this.props.dataCountryCards.length}
        itemSize={50}
      >
        <CountryCard />
      </List>
    );
  }
}

export default BoardCountries;
