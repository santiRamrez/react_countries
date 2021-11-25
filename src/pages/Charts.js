import React, { useState, useEffect } from "react";
import "./styles/ChartsPage.css";

//Components
import SidebarFilter from "../components/SidebarFilter";
import CountriesSelected from "../components/CountriesSelected";
import TheChart from "../components/TheChart";

function Charts({ dataAutocomplete }) {
  const [data, setData] = useState(dataAutocomplete);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const msg = ["There is no country selected"];
  return (
    <div className="chartPage">
      <h1>Look and Compare</h1>
      <div className="containerComponts">
        <div className="sideBar-container">
          <SidebarFilter
            countrySelected={(country) =>
              setSelectedCountries([...selectedCountries, country])
            }
            listCountries={dataAutocomplete}
          />
        </div>
        <div className="mainSection-container">
          <CountriesSelected selected={selectedCountries} />
          <TheChart showData={data} countries={selectedCountries} />
        </div>
      </div>
    </div>
  );
}

export default Charts;
