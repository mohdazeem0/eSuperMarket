import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import "./ProductItem.css";
import { useDispatch } from "react-redux";

export const ProductItem = () => {
  const dispatch = useDispatch();
  return (
    <Card className="productitem">
      <Row>
        <Col>
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
        </Col>
        <Col>
          <Button
            variant="dark"
            onClick={() =>
              dispatch({
                type: "ADD_PRODUCT",
                data: ["bhaji", "palak", "kotmir"],
              })
            }
          >
            ➕
          </Button>
        </Col>
      </Row>
    </Card>
  );
};
