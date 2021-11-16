import React from "react";

//Components
import Intro from "../components/Intro";
import BoardCountries from "../components/BoardCountries";

function Home({ dataCountries }) {
  const mainData = [...dataCountries];
  //filterData -> [flag, countryName, link]
  const filterData = mainData.map((obj) => {
    let output = [];
    output.push(obj.name.common, obj.flags.svg, obj.name.common.toLowerCase());
    // output -> [countryName, flag, link]
    return output;
  });
  const justNames = (arr) => {
    let output = [];
    arr.forEach((obj) => output.push(obj.name.common));
    return output;
  };
  return (
    <div className="Home-page">
      <Intro
        dataAutocomplete={justNames(mainData)}
        intro="Search for a country's data"
      />
      <BoardCountries dataCountryCards={filterData} />
    </div>
  );
}

export default Home;
