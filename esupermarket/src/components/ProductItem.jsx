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
          <Button>➖</Button>
        </Col>
        <Col>
          <Button
            onClick={() =>
              dispatch({
                type: "ADD_PRODUCT",
                data: ["Oil, Soap, Salt, Mirchi"],
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
