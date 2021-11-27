import React, { useState, useEffect } from "react";

import TheChart from "./TheChart";

const FilterChart = ({ data, countries, param }) => {
  const [popList, setPopList] = useState([]);
  const [areaList, setAreaList] = useState([]);

  const switchParam = (p) => {
    switch (p) {
      case "Population":
        return popList;
      case "Area":
        return areaList;
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

  // useEffect(() => {
  //   //When the array of this hook is empty, it means -> componentDidMount() -> execute just once after rendering
  //   alert("Thanks a lot to ChartJS developers!");
  // }, []);

  useEffect(() => {
    const lastCountry = countries.slice(-1);
    filterObjects.forEach((obj, i) => {
      if (lastCountry[0] === obj.name.common) {
        setPopList([...popList, obj.population]);
        setAreaList([...areaList, obj.area]);
      }
    });
  }, [countries]);

  return (
    <>
      <TheChart
        countries={countries}
        label={param}
        dataParam={switchParam(param)}
      />
    </>
  );
};

export default FilterChart;
