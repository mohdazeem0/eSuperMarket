import React from "react";
import { NaviBar } from "./NaviBar";
import MiddlePart from "./MiddlePart";
import { ProductList } from "./ProductList";
import "./ProductItem.css";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { NavRoute1 } from "./Routes/NavRoute1";
// import Products from "./Routes/Products";
// import Gallary from "./Routes/Gallary";
// import About from "./Routes/About";
// import Contact from "./Routes/Contact";
import { Cart } from "./Routes/Cart";
import { Login } from "./Routes/Login";

export const Home = () => {
  return (
    <React.Fragment>
      <NaviBar />
      <br />
      <MiddlePart />
      <br />
      <ProductList />
    </React.Fragment>
  );
};
