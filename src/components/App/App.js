import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "../../styles/css/styles.min.css"
import Landing from "../Landing";
import Home from "../Home";
import Games from "../Games";
import Winner from "../Winner";

const App = ({ submitted, winners, games }) => (
  <Router>
    <Switch>
      <Route exact path = "/">
        <Landing />
      </Route>
      <Route exact path = "/home">
        {
          submitted ? (
            winners.length !== games.length ? <Games /> : <Winner />
          )
          :
          <Home />
        }
      </Route>
    </Switch>
  </Router>
);

export default App;
