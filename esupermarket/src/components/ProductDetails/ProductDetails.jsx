import React from "react";
import { Row, Col } from "react-bootstrap";

export const ProductDetails = () => {
  return (
    <div>
      <Row>
        <Col md={4}>Image</Col>
        <Col md={8}>Description</Col>
      </Row>
    </div>
  );
};
