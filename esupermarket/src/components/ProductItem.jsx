import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import "./ProductItem.css";
import { useDispatch } from "react-redux";

export const ProductItem = () => {
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <Button
        variant="dark"
        onClick={() =>
          dispatch({
            type: "REMOVE_PRODUCT",
            data: [],
          })
        }
      >
        ➖
      </Button>

      <Button
        variant="dark"
        onClick={() =>
          dispatch({
            type: "ADD_PRODUCT",
            data: ["bhaji"],
          })
        }
      >
        ➕
      </Button>
    </React.Fragment>
  );
};
