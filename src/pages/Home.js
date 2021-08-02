import React from "react";

//Components
import Header from "../components/Header";
import Intro from "../components/Intro";
import Countries from "../components/Countries";

function Home() {
  return (
    <div className="Home-page">
      <Header />
      <Intro intro="Search for a country's data" />
      <div className="board-countries">
        <Countries />
        <Countries />
        <Countries />
        <Countries />
        <Countries />
        <Countries />
        <Countries />
        <Countries />
        <Countries />
        <Countries />
        <Countries />
        <Countries />
        <Countries />
        <Countries />
        <Countries />
      </div>
    </div>
  );
}

export default Home;
