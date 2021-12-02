import React, { useState, useEffect } from "react";

import GetCSVData from "../utils/GetCSVData";
import FileCSV from "../data-csv/ocde.csv";

import TheChart from "./TheChart";

const FilterChart = ({ data, countries, param, deleteList }) => {
  const [popList, setPopList] = useState([]);
  const [areaList, setAreaList] = useState([]);
  const [salaryData, setSalaryData] = useState([]);
  const [salaryList, setSalaryList] = useState([]);
  const [count, setCount] = useState(0);

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

  useEffect(() => {
    //When the array of this hook is empty, it means -> componentDidMount() -> execute just once after rendering
    const fetchSalaryData = async () => {
      let salaryD = await GetCSVData(FileCSV);
      setSalaryData(salaryD);
    };
    fetchSalaryData();
  }, []);

  useEffect(() => {
    const lastCountry = countries.slice(-1).toString();
    console.log(count, countries.length);
    //Add values to the different arrays
    if (count < countries.length) {
      console.log("country added");
      setCount((prev) => prev + 1);
      filterObjects.forEach((obj) => {
        if (lastCountry === obj.name.common) {
          setPopList([...popList, obj.population]);
          setAreaList([...areaList, obj.area]);
          setSalaryList([...salaryList, putSalaryOfCountry(lastCountry)]);
        }
      });
    }
  }, [countries]);

  useEffect(() => {
    //Delete values to the different arrays
    if (count > 0) {
      setCount((prev) => prev - 1);
      let lastIndex = deleteList.slice(-1).toString();
      let selectedIndex = Number(lastIndex);
      setPopList((prev) => prev.splice(selectedIndex, 1));
      setAreaList((prev) => prev.splice(selectedIndex, 1));
      setSalaryList((prev) => prev.splice(selectedIndex, 1));
    }
  }, [deleteList]);

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
