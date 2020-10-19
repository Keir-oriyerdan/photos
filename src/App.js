import React from "react";
import "./App.css";
import Homepage from "./Homepage.js";
import Home from "./Home.js";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
