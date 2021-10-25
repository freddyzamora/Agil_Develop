import React from 'react';
import { NavbarApp } from "../ui/NavbarApp";
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import './userManager.css';
import { Form, Button, Container, Row, Col, Alert} from "react-bootstrap";
import api from "../../api";


export const UserManager = (formUser) => {
    const history = useHistory();
    const { userId } = useParams();
    const [error, setError] = useState();
    const [success, setSuccess] = useState();

    const [newUser, setNewUser] = useState({

        Nombres: "",
        Apellidos: "",
        Ciudad: "",
        Email: "",
        Fecha: "",
        Telefono: "",
        Tipo_documento: "",
        Documento: "",
        Estado: "",
        Rol: "",


      });

    useEffect(() => {
        const fetchData = async () => {
          const response = await api.users.getProductId(userId);
          setNewUser(response);
        };
    
        fetchData();
      }, [userId]); 

      const handleClick = async () => {
        const apiResponse = await api.users.edit(newUser);
        if (apiResponse.err) {
          setError(apiResponse.err.message);
        } else {
          setSuccess(apiResponse);
          //setNewUser([...newUser, setNewUser]);
          //history.push("/Gestion");
        }
      };

      const handleClickList = async () => {
          history.push("/UserList");
      };      
      const handleChange = (event) => {
        setNewUser({ ...newUser, [event.target.name]: event.target.value });
      };
    
    return (
        <>
        <NavbarApp />
            <Container className="product-container">
                <Row className="justify-content-md-center">
                    <Col xs={5} className="regVentas-form">
                        <h2>Gestion de Usuarios</h2>
                        <Container>
                            <Row className="d-flex justify-content-center align-items-center">
                            <Col xs={12}>
                                {error && <Alert variant="danger">{error}</Alert>}
                                {success && <Alert variant="success">{success}</Alert>}

                            </Col>
                            </Row>
                        </Container>                        
                        <Form>
                            <Form.Group className="mb-3" >
                                <Form.Label>Nombres</Form.Label>
                                <Form.Control type="text" placeholder="Ingrese los nombres" name="Nombres" id="Nombres" onChange={handleChange}
 value={newUser.Nombres} disabled />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Apellidos</Form.Label>
                                <Form.Control type="text" placeholder="Ingrese los apellidos" name="Apellidos" id="Apellidos" onChange={handleChange}
 value={newUser.Apellidos} disabled />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label className="me-sm-2" htmlFor="inlineFormCustomSelect" >
                                    Rol de Usuario
                                </Form.Label>
                                <Form.Select className="me-sm-2" name="Rol" id="Rol" onChange={handleChange}
 value={newUser.Rol}>
                                    <option value="0">Seleccionar Rol</option>
                                    <option value="ADMINISTRADOR">ADMINISTRADOR</option>
                                    <option value="VENDEDOR">VENDEDOR</option>
                                    <option value="CLIENTE">CLIENTE</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="me-sm-2" htmlFor="inlineFormCustomSelect" >
                                    Estado del Usuario
                                </Form.Label>
                                <Form.Select className="me-sm-2" name="Estado" id="Estado" onChange={handleChange}
 value={newUser.Estado} >
                                    <option value="0">Seleccionar Estado</option>
                                    <option value="PENDIENTE">PENDIENTE</option>
                                    <option value="AUTORIZADO">AUTORIZADO</option>
                                    
                                </Form.Select>
                            </Form.Group>
                            <Row className="align-items-center">
                                <Col xs="auto" className="my-1">
                                    <Button type="button">Borrar</Button>
                                </Col>
                                <Col xs="auto" className="my-1">
                                    <Button
                                        onClick={handleClick}
                                        type="button"
                                        variant="primary"
                                        className="float-end">
                                        Actualizar
                                    </Button>
                                </Col>
                                <Col xs="auto" className="my-1">
                                    <Button
                                        onClick={handleClickList}
                                        type="button"
                                        variant="primary"
                                        className="float-end">
                                        Ver Usuarios
                                    </Button>
                                </Col>                                
                            </Row>
                        </Form>
                    </Col>
                </Row>   
            </Container>
            
        </>
    )
}
