import React, { useEffect, useState, useRef } from "react";
import { Row, Col, Form, Card, Button } from "react-bootstrap";
import "./LoginPage.css";
import PersonIcon from "@material-ui/icons/Person";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import { userData } from "../config";

export const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isvalid, setIsValid] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const eleUserName = useRef();
  const elePassword = useRef();

  useEffect(() => {
    if (username.length >= 5 && password.length >= 6) {
      setIsValid(false);
      if (
        userData.UserName == username.trim() &&
        userData.password === password.trim()
      ) {
        setIsSuccess(true);
        localStorage.setItem("token", userData.token);
      }
    } else setIsValid(true);
  }, [username, password]);

  useEffect(() => {
    if (localStorage.getItem("userName")) {
      eleUserName.current.focus();
      elePassword.current.focus();
    } else {
      eleUserName.current.focus();
    }
  }, []);

  return (
    <div>
      {isSuccess ? (
        <p>You are Successfully Logged in !</p>
      ) : (
        <Card id="card1">
          <Card.Title style={{ fontSize: "2rem", textAlign: "center" }}>
            Sign in
          </Card.Title>
          {!isSuccess && !isvalid && (
            <p style={{ color: "red" }}>Kindly Enter Correct Password !</p>
          )}
          <Card.Body>
            <Button style={{ backgroundColor: "rgb(60,88,156)" }}>
              <FacebookIcon />
              Sign in with Facebook
            </Button>
            <Button
              style={{ float: "right", backgroundColor: "rgb(10,102,194)" }}
            >
              <LinkedInIcon /> Sign in with Linkeden
            </Button>
            <hr />
            <h5 style={{ textAlign: "center" }}>OR</h5>
            <Form>
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                placeholder="enter username"
                ref={eleUserName}
              ></Form.Control>
              <br />
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="enter password"
                ref={elePassword}
              ></Form.Control>
              <br />

              <Button onClick="submit" disabled={isvalid}>
                Login
                <PersonIcon />
              </Button>

              <Button onClick="clear" style={{ float: "right" }}>
                Cancel
              </Button>
              <br />
              <br />
              <Button>
                <PersonAddIcon />
                Signup with New Account
              </Button>
            </Form>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};
