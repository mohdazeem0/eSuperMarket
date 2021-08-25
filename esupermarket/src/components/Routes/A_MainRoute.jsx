import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CartPage from "./CartPage";
import Home1 from "./Home1";
import Products from "./Products";
import Contact from "./Contact";
import TopNav from "./TopNav";
import { LoginPage } from "./LoginPage";

export const MainRoute = () => {
  return (
    <React.Fragment>
      <Router>
        <TopNav />
        <Switch>
          <div>
            <Route path="/">
              <Home1 />
            </Route>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/cartPage">
              <CartPage />
            </Route>
            <Route path="/loginPage">
              <LoginPage />
            </Route>
          </div>
        </Switch>
      </Router>
    </React.Fragment>
  );
};
