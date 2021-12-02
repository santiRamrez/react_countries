import React, { useState, useEffect } from "react";
import "./styles/ChartsPage.css";

//Components
import SidebarFilter from "../components/SidebarFilter";
import CountriesSelected from "../components/CountriesSelected";
import FilterChart from "../components/FilterChart";

function Charts({ dataAutocomplete }) {
  const [data, setData] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [theParam, setTheParam] = useState("");
  const [deleteList, setDeleteList] = useState("");

  useEffect(() => {
    setData(dataAutocomplete);
  }, []);

  useEffect(() => {
    const lastDeletedCountry = deleteList.slice(-1).toString();
    const toDelete = Number(lastDeletedCountry);
    let newCountries = [...selectedCountries];
    newCountries.splice(toDelete, 1);
    setSelectedCountries(newCountries);
  }, [deleteList]);

  return (
    <div className="chartPage">
      <h1>Look and Compare</h1>
      <div className="containerComponts">
        <div className="sideBar-container">
          <SidebarFilter
            paramSelected={(p) => setTheParam(p)}
            countrySelected={(country) => {
              if (country && !selectedCountries.includes(country)) {
                setSelectedCountries([...selectedCountries, country]);
              } else {
                alert("Please select a country");
              }
            }}
            listCountries={dataAutocomplete}
          />
        </div>
        <div className="mainSection-container">
          <CountriesSelected
            selected={selectedCountries}
            indexes={(index) =>
              deleteList.includes(index)
                ? setDeleteList(deleteList)
                : setDeleteList([...deleteList, index])
            }
          />
          <FilterChart
            data={data}
            countries={selectedCountries}
            param={theParam}
            deleteList={deleteList}
          />
        </div>
      </div>
    </div>
  );
}

export default Charts;
