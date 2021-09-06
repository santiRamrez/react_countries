import React from "react";

//Components
import Intro from "../components/Intro";
import BoardCountries from "../components/BoardCountries";

function Home() {
  return (
    <div className="Home-page">
      <Intro intro="Search for a country's data" />
      <BoardCountries />
    </div>
  );
}

export default Home;
