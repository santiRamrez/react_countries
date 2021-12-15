import React, { useState, useEffect } from "react";
import "./App.css";

//React-router
import { Route, Switch } from "react-router-dom";

//Data
import getData from "./utils/GetData";

//Components
import Header from "./components/Header";
import Loader from "./components/Loader";

//Pages
import Home from "./pages/Home";
import Country from "./pages/Country";
import Charts from "./pages/Charts";
import Error404 from "./pages/404";

//Sorting data
import sortAlphabetAZ from "./utils/SortingData";

function App() {
  const [countriesData, setCountriesData] = useState("");
  const [countryList, setCountryList] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      let data = await getData();
      //Sorting data from a -> z bellow
      let sorted = sortAlphabetAZ(data);
      let list = sorted.map((obj) => obj.name.common.toLowerCase());
      setCountriesData(sorted);
      setCountryList(list);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="img-bg"></div>
      {!countriesData && <Loader />}
      <Header />
      <Switch>
        <Route exact path="/">
          <Home dataCountries={countriesData} />
        </Route>
        <Route exact path="/charts">
          <Charts dataAutocomplete={countriesData} />
        </Route>
        <Route exact path="/about">
          <Error404 />
        </Route>
        <Route path="/:id">
          <Country list={countryList} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
