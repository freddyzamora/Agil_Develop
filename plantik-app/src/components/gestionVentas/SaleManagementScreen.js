import React from 'react';
import './SalesStatus.css';
import { Form, Button, Container, Row, Col} from "react-bootstrap";

export const SaleManagementScreen = () => {
    return (
                       <>
                    <Container className="sales-container">
                        <Row className="justify-content-md-center">
                            <Col xs={5} className="estadoVentas-form">
                                <h2>Estado de Venta</h2>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formGroupCode">
                                        <Form.Label>Codigo</Form.Label>
                                        <Form.Control type="number" placeholder="Enter code" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formGroupName">
                                        <Form.Label>Nombre</Form.Label>
                                        <Form.Control type="text" placeholder="Enter name" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formGroupDescription">
                                        <Form.Label>Descripción</Form.Label>
                                        <Form.Control type="text" placeholder="Description" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formGroupValue">
                                        <Form.Label>Valor unitario</Form.Label>
                                        <Form.Control type="number" placeholder="Enter value" />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label
                                            className="me-sm-2"
                                            htmlFor="inlineFormCustomSelect"
                                        >
                                            Estado
                                        </Form.Label>
                                        <Form.Select className="me-sm-2" id="inlineFormCustomSelect">
                                            <option value="0">Disabled select menu</option>
                                            <option value="1">Cancelada</option>
                                            <option value="2">En proceso</option>
                                            <option value="2">Entregada</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Row className="align-items-center">
                                        <Col xs="auto" className="my-1">
                                            <Button type="button">Borrar</Button>
                                        </Col>
                                        <Col xs="auto" className="my-1">
                                            <Button type="button">Ingresar</Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </Col>
                        </Row>   
                    </Container>
                    { <Container className="product-container">
                        <Row  className="justify-content-md-center">
                            <Col xs={8}>
                                <Form>
                                    <fieldset disabled>
                                        <Form.Group className="mb-3">
                                            <Form.Label htmlFor="inputValor">
                                                Valor unitario 
                                            </Form.Label>
                                            <Form.Control id="inputValor" placeholder="Valor" />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label htmlFor="disabledSelect">Estado</Form.Label>
                                            <Form.Select id="inlineFormCustomSelect">
                                                <option value="0">Default select</option>
                                                <option value="1">otro</option>
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
                    </Container> }
                    
                </>
            )
        }