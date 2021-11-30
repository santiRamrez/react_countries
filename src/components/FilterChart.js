import React, { useState, useEffect } from "react";

import GetCSVData from "../utils/GetCSVData";
import FileCSV from "../data-csv/ocde.csv";

import TheChart from "./TheChart";

const FilterChart = ({ data, countries, param }) => {
  const [popList, setPopList] = useState([]);
  const [areaList, setAreaList] = useState([]);
  const [salaryData, setSalaryData] = useState([]);
  const [salaryList, setSalaryList] = useState([]);

  const switchParam = (p) => {
    switch (p) {
      case "Population":
        return popList;
      case "Area":
        return areaList;
      case "Salary":
        return salaryList;
      default:
        return [];
    }
  };

  let filterObjects;

  if (data) {
    filterObjects = data.filter((obj) => {
      let country = obj.name.common;
      return countries.includes(country);
    });
  }

  const putSalaryOfCountry = (c) => {
    let output = 0;
    salaryData.forEach((obj) => {
      if (c === obj.country) output = obj.salary;
    });
    return output;
  };

  useEffect(async () => {
    //When the array of this hook is empty, it means -> componentDidMount() -> execute just once after rendering
    let salaryD = await GetCSVData(FileCSV);
    setSalaryData(salaryD);
  }, []);

  useEffect(() => {
    const lastCountry = countries.slice(-1).toString();

    filterObjects.forEach((obj) => {
      if (lastCountry === obj.name.common) {
        setPopList([...popList, obj.population]);
        setAreaList([...areaList, obj.area]);
        setSalaryList([...salaryList, putSalaryOfCountry(lastCountry)]);
      }
    });
  }, [countries]);

  return (
    <>
      <TheChart
        countries={countries}
        label={param}
        dataParam={switchParam(param)}
        param={param}
      />
    </>
  );
};

export default FilterChart;
