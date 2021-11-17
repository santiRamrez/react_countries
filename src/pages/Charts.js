import React, { useState, useEffect } from "react";
import "./styles/ChartsPage.css";

//Components
import SidebarFilter from "../components/SidebarFilter";
import CountriesSelected from "../components/CountriesSelected";
import TheChart from "../components/TheChart";

function Charts({ dataAutocomplete }) {
  const [data, setReload] = useState(dataAutocomplete);
  return (
    <div className="chartPage">
      <h1>Look and Compare</h1>
      <div className="containerComponts">
        <div className="sideBar-container">
          <SidebarFilter listCountries={dataAutocomplete} />
        </div>
        <div className="mainSection-container">
          <CountriesSelected />
          <TheChart />
        </div>
      </div>
    </div>
  );
}

export default Charts;
