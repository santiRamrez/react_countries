import React from "react";

import TheChart from "./TheChart";

const FilterChart = ({ countries, param, popList, areaList, salaryList }) => {
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
  return (
    <>
      <TheChart
        countries={countries}
        label={param}
        param={param}
        dataParam={switchParam(param)}
      />
    </>
  );
};

export default FilterChart;
