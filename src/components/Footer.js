import React from "react";
import "./styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footerContainer">
      <h1>Source of data:</h1>
      <ul>
        <li>
          <p>General data of countries:</p>
          <a href="https://restcountries.com/" target="_blank" rel="noreferrer">
            REST Countries API
          </a>
        </li>
        <li>
          <p>Minimum wage of 2020 according:</p>
          <a
            href="https://stats.oecd.org/index.aspx?DataSetCode=RMW"
            target="_blank"
            rel="noreferrer"
          >
            OECD Database (Downloaded as a CSV file)
          </a>
        </li>
      </ul>
      <p>
        <span>Made with 🧡 by</span>
        <a
          href="https://tecnolatam.cl/portfolio.html"
          target="_blank"
          rel="noreferrer"
        >
          Santiago Ramírez
        </a>
      </p>
    </footer>
  );
};

export default Footer;
