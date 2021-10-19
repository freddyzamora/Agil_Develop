import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "./login.css";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useForm } from "../../hooks/useForm";
import { startLogin } from "../../actions/auth";

import GoogleLogin from "react-google-login";

export const LoginScreen = () => {
  const dispatch = useDispatch();

  const [formLoginValues, handleLoginInputChange] = useForm({
    lEmail: "juan@gmail.com",
    lPassword: "123456",
  });

  const { lEmail, lPassword } = formLoginValues;

  const handleLogin = (e) => {
    e.preventDefault();
    //console.log(formLoginValues)
    dispatch(startLogin(lEmail, lPassword));
  };

  const googleSuccess = (res) => {
    console.log(res);
  };

  const googleFailure = (res) => {
    console.log('Google Sign In was unsuccessful. Try Again Later');
  };

  return (
    <Container className="login-container">
      <Row className="justify-content-md-center">
        <Col xs={4} className="login-form">
          <h2>Please sign in</h2>
          <br/>
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="lEmail"
                value={lEmail}
                onChange={handleLoginInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="lPassword"
                value={lPassword}
                onChange={handleLoginInputChange}
              />
            </Form.Group>

            <Button className="btnSubmit" variant="light" type="submit">
              Submit
            </Button>
            <br/>
            <br/>
            <h2>or</h2>
            
            <GoogleLogin
              className="btnSubmit-1"
              clientId="589881790796-es5gqoj2c6p46t5itbjuuho926ppf8bn.apps.googleusercontent.com"
              buttonText="Login in with Google"
              onSuccess={googleSuccess}
              onFailure={googleFailure}
              cookiePolicy={"single_host_origin"}
            />
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
