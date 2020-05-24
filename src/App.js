import React from "react";
import { Switch, Route } from "react-router";
import { Link } from "react-router-dom";

import Car from "./components/Car";

const App = () => {
  return (
    <>
      <nav>
        Choose Car
        <Link to="/">None</Link>
        <Link to="/mustang">Mustang</Link>
        <Link to="/camaro">Camaro</Link>
      </nav>
      <div>
        <Switch>
          <Route path="/:carName">
            <Car />
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default App;
