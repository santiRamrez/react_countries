import React from "react";
import "./styles/CountryCard.css";

import { Link } from "react-router-dom";

//Components

function CountryCard({ data, index }) {
  const formatName = (str) => str.replace(/\(.+\)/, "");
  const leadTo = formatName(data[index][2]);
  return (
    <Link to={leadTo} className="country-card">
      <div className="container-img">
        <img src={data[index][1]} alt={data[index][0]} />
      </div>
      <div className="container-name">
        <h3>{formatName(data[index][0])}</h3>
      </div>
    </Link>
  );
}

export default CountryCard;
