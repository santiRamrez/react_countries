import React, { useState, useEffect } from "react";
import "./styles/ChartsPage.css";

//Components
import SidebarFilter from "../components/SidebarFilter";
import CountriesSelected from "../components/CountriesSelected";
import FilterChart from "../components/FilterChart";
import Footer from "../components/Footer";

//CSV DATA:
import GetCSVData from "../utils/GetCSVData";
import FileCSV from "../data-csv/ocde.csv";

function Charts({ dataAutocomplete }) {
  const [toDelete, setToDelete] = useState("");
  const [data, setData] = useState([]);
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
  }, [dataAutocomplete]);

  useEffect(() => {
    if (toDelete === "") return;
    let deletingNumber = Number(toDelete);
    setSelectedCountries((prev) =>
      prev.filter((_, i) => (deletingNumber === i ? false : true))
    );
    setPopList((prev) =>
      prev.filter((_, i) => (i === deletingNumber ? false : true))
    );
    setAreaList((prev) =>
      prev.filter((_, i) => (i === deletingNumber ? false : true))
    );
    setSalaryList((prev) =>
      prev.filter((_, i) => (i === deletingNumber ? false : true))
    );
  }, [toDelete]);

  useEffect(() => {
    //Add values to the different arrays
    const lastCountry = selectedCountries.slice(-1).toString();
    if (toDelete) return;

    let filterData = data.filter((obj) =>
      selectedCountries.includes(obj.name.common)
    );

    if (toDelete === "") {
      filterData.forEach((obj) => {
        if (lastCountry === obj.name.common) {
          setPopList([...popList, obj.population]);
          setAreaList([...areaList, obj.area]);
          setSalaryList([...salaryList, putSalaryOfCountry(lastCountry)]);
        }
      });
    }
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
            countries={selectedCountries}
            param={theParam}
            popList={popList}
            areaList={areaList}
            salaryList={salaryList}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Charts;
