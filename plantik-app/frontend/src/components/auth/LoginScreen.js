import React from 'react';
import './login.css';
import { Form, Button, Container, Row, Col } from "react-bootstrap";
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';

export const LoginScreen = () => {
    return (
        <Container className="login-container">
            <Row className="justify-content-md-center">
                <Col xs={4} className="login-form">
                    <h2>Please sign in</h2>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>
                                Email address
                            </Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>
                                Password
                            </Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        
                        <Button className="btnSubmit" variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>   
        </Container>
    )
}
