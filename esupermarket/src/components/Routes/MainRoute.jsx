import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Cart } from "../Cart";
import { Home } from "../Home";
import { Login } from "../Login";
import { NaviBar } from "../NaviBar";

const MainRoute = () => {
  return (
    <React.Fragment>
      <Router>
        <NaviBar />
        <div>
          <Switch>
            <Route path="/Home">
              <Home />
            </Route>
            <Route path="/Products">
              <Products />
            </Route>
            <Route path="/Contact">
              <Contact />
            </Route>
            <Route path="/Cart">
              <Cart />
            </Route>
            <Route path="/Login">
              <Login />
            </Route>
          </Switch>
        </div>
      </Router>
    </React.Fragment>
  );
};

export default MainRoute;
