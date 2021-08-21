import React from "react";
import { Card, Button, Row, Col, Form, Image } from "react-bootstrap";
import { useDispatch } from "react-redux";

export const ProductItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <Row>
        <Card.Title>{item.title}</Card.Title>
      </Row>

      <Row>
        <img src={`${item.image}`} width="100px" height="300px" />
      </Row>

      <Row>
        <Card.Text>{item.description}</Card.Text>
      </Row>

      <br />
      <button style={{ backgroundColor: "deeppink", width: "5rem" }}>
        <Row>
          <Form.Label>${item.price}</Form.Label>
        </Row>
      </button>
      <br />
      <Row>
        <Col>
          <Button
            variant="dark"
            onClick={() =>
              dispatch({
                type: "REMOVE_PRODUCT",
                data: "Soap",
              })
            }
          >
            -
          </Button>
        </Col>
        <Col>
          <Button
            variant="dark"
            onClick={() =>
              dispatch({
                type: "ADD_PRODUCT",
                data: ["Soap", "Tata Namak"],
              })
            }
          >
            +
          </Button>
        </Col>
      </Row>
    </React.Fragment>
  );
};
