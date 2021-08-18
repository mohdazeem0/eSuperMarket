import React from "react";
import { NaviBar } from "./NaviBar";
import MiddlePart from "./MiddlePart";
import { ProductList } from "./ProductList";
import "./ProductItem.css";

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
