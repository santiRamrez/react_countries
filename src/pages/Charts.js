import React, { useState, useEffect } from "react";
import "./styles/ChartsPage.css";

//Components
import SidebarFilter from "../components/SidebarFilter";
import CountriesSelected from "../components/CountriesSelected";
import TheChart from "../components/TheChart";

function Charts({ dataAutocomplete }) {
  const [data, setData] = useState([]);
  const selectedCountries = [];
  return (
    <div className="chartPage">
      <h1>Look and Compare</h1>
      <div className="containerComponts">
        <div className="sideBar-container">
          <SidebarFilter
            countrySelected={(country) => {
              const selectedObj = data.filter(
                (obj) => country === obj.name.common
              );
              setData(selectedObj);
            }}
            listCountries={dataAutocomplete}
          />
        </div>
        <div className="mainSection-container">
          <CountriesSelected selected={selectedCountries} />
          <TheChart showData={data} />
        </div>
      </div>
    </div>
  );
}

export default Charts;
