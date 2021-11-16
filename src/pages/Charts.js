import React from "react";
import "./styles/ChartsPage.css";

//Components
import SidebarFilter from "../components/SidebarFilter";
import CountriesSelected from "../components/CountriesSelected";

function Charts({ dataAutocomplete }) {
  return (
    <div className="chartPage">
      <h1>Look and Compare</h1>
      <div className="containerComponts">
        <SidebarFilter listCountries={dataAutocomplete} />
        <CountriesSelected />
      </div>
    </div>
  );
}

export default Charts;
