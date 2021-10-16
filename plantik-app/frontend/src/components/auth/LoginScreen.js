import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "./login.css";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useForm } from "../../hooks/useForm";
import { login } from "../../actions/auth";

import GoogleLogin from "react-google-login";

export const LoginScreen = () => {
  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
    email: "nando@gmail.com",
    password: "123456",
  });

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(12345, "hernando"));
    // dispatch( startLoginEmailPassword( email, password ) );
  };

  const responseGoogle = (res) => {
      console.log(res);
  }

  return (
    <Container className="login-container">
      <Row className="justify-content-md-center">
        <Col xs={4} className="login-form">
          <h2>Please sign in</h2>
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={email}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Button className="btnSubmit" variant="light" type="submit">
              Submit
            </Button>

            <div>
              <GoogleLogin
                clientId="589881790796-es5gqoj2c6p46t5itbjuuho926ppf8bn.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
              />
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
