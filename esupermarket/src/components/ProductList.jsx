import Raect, { useEffect, useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { ProductItem } from "./ProductItem";
import { useSelector } from "react-redux";
import "./ProductItem.css";
import { ProductDetails } from "./ProductDetails/ProductDetails";

export const ProductList = ({ updateCart, searchText }) => {
  const myProducts = useSelector((state) => state.productReducer.product);
  const [prod, setProd] = useState([...myProducts]);

  useEffect(() => {
    if (searchText !== "") {
      const filteredProducts = myProducts.filter((item) =>
        item.title.toLowerCase().includes(searchText.toLowerCase())
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

      {/* <Card className="Row1">
        {prod.map((item) => (
          <Col md={4}>
            <ProductItem item={item} updateCart={updateCart} />
          </Col>
        ))}
      </Card> */}
      <ProductDetails />
    </Row>
  );
};
