import React from "react";
import "./App.css";
import Homepage from "./Homepage.js";
import Home from "./Home.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nature from "./Nature";
import Medieval from "./Medieval";
import Wedding from "./Wedding";
import Portraits from "./Portraits";
import Events from "./Events";
import Shows from "./Shows";
import Concerts from "./Concerts";
import Personal from "./Personal";
import Galleries from "./Galleries";
import About from "./About";
import Contact from "./Contact";

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
        <Route exact path="/portraits">
          <Portraits />
        </Route>
        <Route exact path="/events">
          <Events />
        </Route>
        <Route exact path="/shows">
          <Shows />
        </Route>
        <Route exact path="/concerts">
          <Concerts />
        </Route>
        <Route exact path="/personal">
          <Personal />
        </Route>
        <Route exact path="/Galleries">
          <Galleries />
        </Route>
        <Route exact path="/About">
          <About />
        </Route>
        <Route exact path="/Contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
