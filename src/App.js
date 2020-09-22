import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./styles/css/styles.min.css"
import Landing from "./components/Landing";
import Home from "./components/Home";

const App = () => (
  <Router>
    <Switch>
      <Route exact path = "/">
        <Landing />
      </Route>
      <Route exact path = "/home">
        <Home />
      </Route>
    </Switch>
  </Router>
);

export default App;
