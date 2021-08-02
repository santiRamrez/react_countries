import React from "react";

//Components
import Header from "../components/Header";
import Intro from "../components/Intro";
import BoardCountries from "../components/BoardCountries";

function Home() {
  return (
    <div className="Home-page">
      <Header />
      <Intro intro="Search for a country's data" />
      <BoardCountries />
    </div>
  );
}

export default Home;
