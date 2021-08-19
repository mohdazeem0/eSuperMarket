import Raect from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { ProductItem } from "./ProductItem";
import { ItemReducers } from "../state/reducers/ItemReducers";

export const ProductList = () => {
  return (
    <Row>
      <br />
      <br />
      <h1 style={{ textAlign: "center", fontSize: "60px" }}>Products</h1>
      <Col>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="./palak.jpg" />
          <Card.Body>
            <Card.Title>Palak Veggies</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <ProductItem />
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="./palak.jpg" />
          <Card.Body>
            <Card.Title>Palak Veggies</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <ProductItem />
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="./palak.jpg" />
          <Card.Body>
            <Card.Title>Palak Veggies</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <ProductItem />
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="./palak.jpg" />
          <Card.Body>
            <Card.Title>Palak Veggies</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <ProductItem />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};
