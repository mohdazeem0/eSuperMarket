import Raect, { useEffect, useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { ProductItem } from "./ProductItem";
import { useSelector } from "react-redux";
import "./ProductItem.css";

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

      <Card className="productitem">
        {prod.map((item) => (
          <Col md={4}>
            <ProductItem item={item} />
          </Col>
        ))}
      </Card>
    </Row>
  );
};
