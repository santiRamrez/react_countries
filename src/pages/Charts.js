import React, { useState, useEffect } from "react";
import "./styles/ChartsPage.css";

//Components
import SidebarFilter from "../components/SidebarFilter";
import CountriesSelected from "../components/CountriesSelected";
import FilterChart from "../components/FilterChart";

//CSV DATA:
import GetCSVData from "../utils/GetCSVData";
import FileCSV from "../data-csv/ocde.csv";

function Charts({ dataAutocomplete }) {
  const [toDelete, setToDelete] = useState("");
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [theParam, setTheParam] = useState("");
  const [salaryData, setSalaryData] = useState([]);
  const [popList, setPopList] = useState([]);
  const [areaList, setAreaList] = useState([]);
  const [salaryList, setSalaryList] = useState([]);

  const putSalaryOfCountry = (c) => {
    let output = 0;
    salaryData.forEach((obj) => {
      if (c === obj.country) output = obj.salary;
    });
    return output;
  };

  useEffect(() => {
    setData(dataAutocomplete);

    const fetchSalaryData = async () => {
      let salaryD = await GetCSVData(FileCSV);
      setSalaryData(salaryD);
    };
    fetchSalaryData();

    setFilterData(() => {
      let output = data.filter((obj) => {
        let country = obj.name.common;
        return selectedCountries.includes(country);
      });
      return output;
    });
  }, []);

  useEffect(() => {
    if (toDelete === "") return;
    let deletingNumber = Number(toDelete);
    let newCountries = selectedCountries.filter((c, i) =>
      deletingNumber === i ? false : true
    );
    setSelectedCountries(newCountries);
  }, [toDelete]);

  useEffect(() => {
    const lastCountry = selectedCountries.slice(-1).toString();

    //Add values to the different arrays
    filterData.forEach((obj) => {
      if (lastCountry === obj.name.common) {
        console.log("Executed");
        setPopList([...popList, obj.population]);
        setAreaList([...areaList, obj.area]);
        setSalaryList([...salaryList, putSalaryOfCountry(lastCountry)]);
      }
    });
  }, [selectedCountries]);

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
            indexes={(index) => {
              setToDelete(index);
              setTimeout(() => setToDelete(""), 2000);
            }}
          />
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
