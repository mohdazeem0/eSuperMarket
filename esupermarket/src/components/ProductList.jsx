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
        <Card style={{ width: "18rem" }}>
          <Card.Img></Card.Img>
          <Card.Body>
            <Card.Title>Palak Veggies</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <ProductItem />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};
