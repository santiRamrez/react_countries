import React from "react";

//React-router
import { Link } from "react-router-dom";

import "./styles/CountryCard.css";

function CountryCard({ title, flag, xLink }) {
  const formatName = (str) => str.replace(/\(.+\)/, "");

  return (
    <Link to={xLink} className="country-card">
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
