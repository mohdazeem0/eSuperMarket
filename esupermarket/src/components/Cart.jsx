import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useSelector } from "react-redux";
import { Nav } from "react-bootstrap";
export const Cart = ({ addToCart }) => {
  const products = useSelector((state) => state.productReducer.product);

  return (
    <div>
      <Nav.Link>
        Cart
        <ShoppingCartIcon />
        <sup>{addToCart}</sup>
      </Nav.Link>
    </div>
  );
};
