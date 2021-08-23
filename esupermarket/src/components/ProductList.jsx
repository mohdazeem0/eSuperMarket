import Raect, { useEffect, useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { ProductItem } from "./ProductItem";
import { useSelector } from "react-redux";
import "./ProductItem.css";

export const ProductList = ({ updateCart, searchText }) => {
  const myProducts = useSelector((state) => state.productReducer.product);
  const [prod, setProd] = useState([...myProducts]);

  useEffect(() => {
    if (searchText !== "") {
      const filteredProducts = prod.filter((item) =>
        item.title.includes(searchText)
      );
      setProd([...filteredProducts]);
    }
  }, [searchText]);

  useEffect(() => {
    setProd([...myProducts]);
  }, [myProducts]);
  return (
    <Row>
      <br />
      <h1 style={{ textAlign: "center", fontSize: "60px" }}>Products</h1>

      <Card className="Row1">
        {prod.map((item) => (
          <Col md={4}>
            <ProductItem item={item} updateCart={updateCart} />
          </Col>
        ))}
      </Card>
    </Row>
  );
};
