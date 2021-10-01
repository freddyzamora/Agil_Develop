import React from 'react';
import './userManager.css';
import { Form, Button, Container, Row, Col} from "react-bootstrap";

export const UserManager = () => {
    return (
        <>
            <Container className="product-container">
                <Row className="justify-content-md-center">
                    <Col xs={5} className="regVentas-form">
                        <h2>Gestion de Usuarios</h2>
                        <Form>
                            <Form.Group className="mb-3" controlId="formGroupCode">
                                <Form.Label>Codigo</Form.Label>
                                <Form.Control type="number" placeholder="Ingrese el código" id="fc_usua_codigo"/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupName">
                                <Form.Label>Nombres</Form.Label>
                                <Form.Control type="text" placeholder="Ingrese los nombres" id="fc_usua_nombres" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupDescription">
                                <Form.Label>Apellidos</Form.Label>
                                <Form.Control type="text" placeholder="Ingrese los apellidos" id="fc_usua_apellidos"/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupValue">
                                <Form.Label>NickName (Nombre Usuario)</Form.Label>
                                <Form.Control type="text" placeholder="Ingrese el Usuario" id="fc_usua_nickname"/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupValue">
                                <Form.Label>Fecha Ingreso</Form.Label>
                                <Form.Control type="date" placeholder="Ingrese la fecha de ingreso" id="fc_usua_fechaingreso"/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="me-sm-2" htmlFor="inlineFormCustomSelect" >
                                    Rol de Usuario
                                </Form.Label>
                                <Form.Select className="me-sm-2" id="inlineFormCustomSelect">
                                    <option value="0">Seleccionar Rol</option>
                                    <option value="1">Administrador</option>
                                    <option value="2">Vendedor</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="me-sm-2" htmlFor="inlineFormCustomSelect" >
                                    Estado del Usuario
                                </Form.Label>
                                <Form.Select className="me-sm-2" id="inlineFormCustomSelect">
                                    <option value="0">Seleccionar Estado</option>
                                    <option value="1">Pendiente</option>
                                    <option value="2">Autorizado</option>
                                    <option value="3">NO Autorizado</option>
                                </Form.Select>
                            </Form.Group>
                            <Row className="align-items-center">
                                <Col xs="auto" className="my-1">
                                    <Button type="button">Borrar</Button>
                                </Col>
                                <Col xs="auto" className="my-1">
                                    <Button type="button">Actualizar</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>   
            </Container>
            
        </>
    )
}
