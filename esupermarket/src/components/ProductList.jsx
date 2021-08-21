import Raect, { useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { ProductItem } from "./ProductItem";
import { ItemReducers } from "../state/reducers/ItemReducers";
import { useSelector } from "react-redux";

export const ProductList = () => {
  const myProducts = useSelector((state) => state.productReducer.product);
  const [prod, setProd] = useState([...myProducts]);
  console.log("sample=====>", prod);

  return (
    <Row>
      <br />
      <br />
      <h1 style={{ textAlign: "center", fontSize: "60px" }}>Products</h1>
      <Col>
        <Card style={{ width: "18rem" }}>{prod.map(item)}</Card>
      </Col>
    </Row>
  );
};
