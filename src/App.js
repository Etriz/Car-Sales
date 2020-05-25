import React from "react";
import { Switch, Route } from "react-router";
import { Link } from "react-router-dom";

import Car from "./components/Car";

const App = () => {
  return (
    <>
      <nav>
        <p>Choose Car</p>
        <Link to="/">None</Link>
        <Link to="/mustang">Mustang</Link>
        <Link to="/camaro">Camaro</Link>
      </nav>
      <Switch>
        <Route path="/:carName">
          <Car />
        </Route>
      </Switch>
    </>
  );
};

export default App;
