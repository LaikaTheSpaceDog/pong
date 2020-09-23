import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "../../styles/css/styles.min.css"
import Landing from "../Landing";
import Home from "../Home";
import Games from "../Games";

const App = ({ submitted }) => (
  <Router>
    <Switch>
      <Route exact path = "/">
        <Landing />
      </Route>
      <Route exact path = "/home">
        {
          submitted ?
          <Games /> :
          <Home />
        }
      </Route>
    </Switch>
  </Router>
);

export default App;
