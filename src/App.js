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
  useEffect(() => {
    const fetchData = async () => {
      let data = await getData();
      //Sorting data from a -> z bellow
      let sorted = sortAlphabetAZ(data);
      setCountriesData(sorted);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      {!countriesData && <Loader />}
      <div className="img-bg"></div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home dataCountries={countriesData} />
        </Route>
        <Route exact path="/country">
          <Country />
        </Route>
        <Route exact path="/charts">
          <Charts dataAutocomplete={countriesData} />
        </Route>
        <Route>
          <Error404 />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
