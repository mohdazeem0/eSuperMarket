import Raect, { useEffect, useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { ProductItem } from "./ProductItem";
import { ItemReducers } from "../state/reducers/ItemReducers";
import { useSelector } from "react-redux";

export const ProductList = () => {
  const myProducts = useSelector((state) => state.productReducer.product);
  const [prod, setProd] = useState([...myProducts]);
  useEffect(() => {
    setProd([...myProducts]);
  }, [myProducts]);
  return (
    <Row>
      <br />
      <br />
      <h1 style={{ textAlign: "center", fontSize: "60px" }}>Products</h1>
      <Col>
        <Card>
          {prod.map((item) => (
            <Col md={4}>
              <ProductItem item={item} />
            </Col>
          ))}
        </Card>
      </Col>
    </Row>
  );
};
