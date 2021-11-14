import React, { useState, useEffect } from "react";
import "./App.css";

//React-router
import { Route, Switch } from "react-router-dom";

//Data
import getData from "./utils/GetData";

//Components
import Header from "./components/Header";
import Autocomplete from "./components/Autocomplete";

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
  }, []);

  return (
    <div className="App">
      <div className="img-bg"></div>
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/country" component={Country} />
    </div>
  );
}

export default App;
