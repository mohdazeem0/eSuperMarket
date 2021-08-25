import React from "react";
import { Nav, Navbar, Form, Button } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

const TopNav = () => {
  return (
    <div>
      <Navbar
        id="topnav"
        bg="light"
        expand="lg"
        // id="navsize"
        sticky="top"
        collapseOnSelect
      >
        <Navbar.Brand href="/" id="wegiver">
          CUBA STORE
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/cartPage">Cart</NavLink>
            <NavLink to="/loginPage">Login</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      ;
    </div>
  );
};

export default TopNav;
