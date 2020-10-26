import React from "react";
import "./App.css";
import Homepage from "./Homepage.js";
import Home from "./Home.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nature from "./Nature";
import Medieval from "./Medieval";
import Wedding from "./Wedding";

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
        <Route exact path="/nature">
          <Nature />
        </Route>
        <Route exact path="/medieval">
          <Medieval />
        </Route>
        <Route exact path="/wedding">
          <Wedding />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
