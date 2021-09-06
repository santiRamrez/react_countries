import React from "react";
import "./App.css";

//React-router
import { BrowserRouter, Route, Switch } from "react-router-dom";

//Components
import Header from "./components/Header";

//Pages
import Home from "./pages/Home";
import Country from "./pages/Country";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div className="App">
          <div className="img-bg"></div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/country" component={Country} />
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
