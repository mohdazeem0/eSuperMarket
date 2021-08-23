import React, { useEffect, useState } from "react";
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
  // Adding to card Cart
  const [addToCart, setAddCart] = useState(0);

  const updateCart = () => {
    setAddCart(addToCart + 1);
  };
  // Remove from card Cart
  const [removeFromCart, setRemoveCart] = useState(0);

  const removeUpdateCart = () => {
    setAddCart(addToCart + 1);
  };
  return (
    <React.Fragment>
      <NaviBar addToCart={addToCart} />
      <br />
      {/* <MiddlePart /> */}
      <br />
      <ProductList updateCart={updateCart} />
    </React.Fragment>
  );
};
