import React from "react";
import { Card, Button, Row, Col, Form, Image } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { NavLink, Router } from "react-router-dom";

export const ProductItem = ({ item, updateCart }) => {
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <Card className="Card1">
        <Row>
          <Card.Img src={item.image} className="cardimg" variant="top" />
          <Card.Title>{item.title}</Card.Title>
          <Form.Label>${item.price}</Form.Label>
        </Row>

        <br />
        <Row>
          <Col>
            {/* <Button
              variant="dark"
              onClick={() =>
                dispatch({
                  type: "REMOVE_PRODUCT",
                  data: "Soap",
                })
              }
            >
              -
            </Button> */}
            <Button variant="dark" onClick={() => {}}>
              -
            </Button>
          </Col>
          <Col>
            {/* <Button
              variant="dark"
              onClick={() =>
                dispatch({
                  type: "ADD_PRODUCT",
                  data: ["Soap", "Tata Namak"],
                })
              }
            >
              +
            </Button> */}
            <Button variant="dark" onClick={updateCart}>
              +
            </Button>
          </Col>
        </Row>
        <NavLink to="/details">
          <Button>View</Button>
        </NavLink>
      </Card>
    </React.Fragment>
  );
};
