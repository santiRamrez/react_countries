import React from "react";
import "./styles/CountryCard.css";

import { Link } from "react-router-dom";

//Components

function CountryCard({ title, flag, link }) {
  const formatName = (str) => str.replace(/\(.+\)/, "");
  const leadTo = formatName(link);
  return (
    <Link to={leadTo} className="country-card">
      <div className="container-img">
        <img src={flag} alt={title} />
      </div>
      <div className="container-name">
        <h3>{formatName(title)}</h3>
      </div>
    </Link>
  );
}

export default CountryCard;
