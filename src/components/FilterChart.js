import React from "react";

import TheChart from "./TheChart";

const FilterChart = ({ data, countries, param }) => {
  // const switchParam = (p) => {
  //   switch (p) {
  //     case "Population":
  //       return popList;
  //     case "Area":
  //       return areaList;
  //     case "Salary":
  //       return salaryList;
  //     default:
  //       return [];
  //   }
  // };

  return (
    <>
      <TheChart countries={countries} label={param} param={param} />
    </>
  );
};

export default FilterChart;
