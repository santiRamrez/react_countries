import React, { useState, useEffect } from "react";
import "./App.css";

//React-router
import { Route, Switch } from "react-router-dom";

//Data
import getData from "./utils/GetData";

//Components
import Header from "./components/Header";
import Autocomplete from "./components/Autocomplete";
import Loader from "./components/Loader";

//Pages
import Home from "./pages/Home";
import Country from "./pages/Country";

function App() {
  const [countriesData, setCountriesData] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      let data = await getData();
      setCountriesData(data);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      {!countriesData && <Loader />}
      <div className="img-bg"></div>
      <Header />
      <Route exact path="/">
        <Home dataCountries={countriesData} />
      </Route>
      <Route exact path="/country">
        <Country />
      </Route>
    </div>
  );
}

export default App;
