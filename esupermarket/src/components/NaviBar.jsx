import React from "react";
import {
  Navbar,
  Nav,
  Container,
  Button,
  Row,
  Col,
  Form,
  FormControl,
} from "react-bootstrap";
import { Login } from "./Login";
import { Cart } from "./Cart";

export const NaviBar = ({ addToCart }) => {
  return (
    <div>
      <Navbar
        // style={{ top: "0", position: "sticky" }}
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="#home">eSuper Market</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">Products</Nav.Link>
              <Nav.Link href="#">Contact us</Nav.Link>
              <Nav.Link href="#">About us</Nav.Link>
            </Nav>
            <Nav>
              <Cart addToCart={addToCart} />
              <Login />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
