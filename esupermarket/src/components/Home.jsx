import React, { useEffect, useState } from "react";
import { NaviBar } from "./NaviBar";
import MiddlePart from "./MiddlePart";
import { ProductList } from "./ProductList";
import "./ProductItem.css";
import { getProducts } from "./service/products";
import { useDispatch } from "react-redux";
import SearchBox from "./SearchBox";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./Home.css";

import { ProductDetails } from "./ProductDetails/ProductDetails";

export const Home = () => {
  const [searchText, setSearchText] = useState("");

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
  // Adding to card Cart
  const [addToCart, setAddCart] = useState(0);

  const updateCart = () => {
    setAddCart(addToCart + 1);
  };
  // Remove from card Cart
  // const [removeFromCart, setRemoveCart] = useState(0);

  // const removeUpdateCart = () => {
  //   setRemoveCart(removeFromCart - 1);
  // };
  return (
    <React.Fragment className="mainhome">
      <NaviBar addToCart={addToCart} />
      <br />
      <SearchBox setSearchText={setSearchText} />
      {/* <MiddlePart /> */}
      <br />
      <ProductList updateCart={updateCart} searchText={searchText} />
      <ProductDetails />
    </React.Fragment>
  );
};
