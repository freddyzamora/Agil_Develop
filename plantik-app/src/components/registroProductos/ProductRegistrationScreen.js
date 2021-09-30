import React from 'react';
import './ProductRegistration.css';
import { Form, Button, Container, Row, Col} from "react-bootstrap";

export const ProductRegistrationScreen = () => {
    return (
        <>
            <Container className="product-container">
                <Row  className="justify-content-md-center">
                    <Col xs={8}>
                        <Form>
                            <fieldset disabled>
                                <Form.Group className="mb-3">
                                <Form.Label htmlFor="disabledTextInput">Disabled input</Form.Label>
                                <Form.Control id="disabledTextInput" placeholder="Disabled input" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                <Form.Label htmlFor="disabledSelect">Estado</Form.Label>
                                <Form.Select  defaultValue="Seleccione estado">
                                    <option>Disponible</option>
                                    <option>No disponible</option>
                                </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                <Form.Check
                                    type="checkbox"
                                    id="disabledFieldsetCheck"
                                    label="Can't check this"
                                />
                                </Form.Group>
                                <Button type="submit">Submit</Button>
                            </fieldset>
                        </Form>
                    </Col>
                </Row>
            </Container>
            
        </>
    )
}
