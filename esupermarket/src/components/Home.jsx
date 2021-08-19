import React, { useEffect } from "react";
import { NaviBar } from "./NaviBar";
import MiddlePart from "./MiddlePart";
import { ProductList } from "./ProductList";
import "./ProductItem.css";
import { getProducts } from "./service/products";
import { useDispatch } from "react-redux";

export const Home = () => {
  const dispatch = useDispatch();
  const allProducts = async () => {
    const products = await getProducts();
    dispatch({
      type: "ADD_PRODUCT",
      data: products,
    });

    console.log("products===>", products);
  };
  useEffect(() => {
    allProducts();
  }, []);
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
