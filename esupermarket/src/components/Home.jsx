import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Button,
  Row,
  Col,
  Form,
  FormControl,
} from "react-bootstrap";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { ProductItem } from "./ProductItem";
import "./ProductItem.css";

export const Home = () => {
  return (
    <React.Fragment>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">eSuper Market</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">Products</Nav.Link>
              <Nav.Link href="#pricing">Contact us</Nav.Link>
              <Nav.Link href="#pricing">About us</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>
                Cart <ShoppingCartIcon />{" "}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
      <Row>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="mr-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Row>
      <br />
      <Row>
        <Col>
          <h5 style={{ marginLeft: "100px", marginTop: "100px" }}>
            Vegies that Cure Happiness
          </h5>
          <h1
            style={{
              fontFamily: "fantasy",
              fontSize: "150px",
              marginLeft: "100px",
            }}
          >
            FRESH <span style={{ color: "#65D349" }}>VEGGIES</span>
          </h1>
        </Col>
        <Col>
          <img className="vegpic" src="./veg.png" alt="" />
        </Col>
      </Row>

      <ProductItem />
    </React.Fragment>
  );
};
