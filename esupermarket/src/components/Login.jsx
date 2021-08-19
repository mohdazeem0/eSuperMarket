import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Nav } from "react-bootstrap";
export const Login = () => {
  return (
    <div>
      <Nav.Link to="./LoginPage">
        Login <AccountCircleIcon />
      </Nav.Link>
    </div>
  );
};
