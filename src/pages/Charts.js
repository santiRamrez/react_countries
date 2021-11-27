import React, { useState, useEffect } from "react";
import "./styles/ChartsPage.css";

//Components
import SidebarFilter from "../components/SidebarFilter";
import CountriesSelected from "../components/CountriesSelected";
import FilterChart from "../components/FilterChart";

function Charts({ dataAutocomplete }) {
  const [data, setData] = useState(dataAutocomplete);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [theParam, setTheParam] = useState("");

  return (
    <div className="chartPage">
      <h1>Look and Compare</h1>
      <div className="containerComponts">
        <div className="sideBar-container">
          <SidebarFilter
            paramSelected={(p) => setTheParam(p)}
            countrySelected={(country) =>
              setSelectedCountries([...selectedCountries, country])
            }
            listCountries={dataAutocomplete}
          />
        </div>
        <div className="mainSection-container">
          <CountriesSelected selected={selectedCountries} />
          <FilterChart
            data={data}
            countries={selectedCountries}
            param={theParam}
          />
        </div>
      </div>
    </div>
  );
}

export default Charts;
