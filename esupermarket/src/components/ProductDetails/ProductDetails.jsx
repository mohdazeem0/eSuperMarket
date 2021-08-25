import React, { useEffect, useState } from "react";
import { Row, Col, Button, Card } from "react-bootstrap";
import { useSelector } from "react-redux";

export const ProductDetails = () => {
  const [selectedProduct, setSelectedProduct] = useState([]);
  const myProducts = useSelector((state) => state.productReducer.product);
  const selectedId = useSelector(
    (state) => state.productReducer.selectedprodid[0]
  );

  useEffect(() => {
    console.log(selectedId);
    const filteredProd = myProducts.filter((item) => item.id === selectedId);
    setSelectedProduct([...filteredProd]);
    console.log("my product selected===>", filteredProd);
  }, [selectedId]);
  return (
    <div>
      <Card>
        <Row>
          <Col md={2}>
            <Button href="/ProductList">Back</Button>
          </Col>
        </Row>
        <Row>
          <Col md={4}>Image</Col>
          <Col md={8}>Description</Col>
        </Row>
      </Card>
    </div>
  );
};
