import React, { useState } from "react";
import "./ProductRegistration.css";
import { NavbarApp } from "../ui/NavbarApp";
import { Form, Button, Container, Row, Col, FormCheck } from "react-bootstrap";

export const ProductRegistrationScreen = () => {

  const [formValues, setFormValues] = useState({
    codigo: 0,
    nombre: '',
    descripcion: '',
    valor: 0,
    imagen: '',
    disponible: false,
  })

  const {codigo, nombre, descripcion, valor, imagen, disponible} = formValues;

  const handleInputChange = ({target}) => {

    setFormValues({
      ...formValues,
      [target.name]: target.value
    })

  }

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(formValues);
  }

  return (
    <>
      <NavbarApp />
      <Container className="product-container">
        <Row className="justify-content-md-center">
          <Col xs={5} className="regVentas-form">
            <h2>Product registration</h2>
            <br />
            <Form
              onSubmit={handleSubmitForm}
            >
              <Form.Group className="mb-3" controlId="formGroupCode">
                <Form.Label>Codigo</Form.Label>
                <Form.Control 
                  type="number" 
                  name="codigo" 
                  placeholder="Enter code" 
                  value={codigo}
                  onChange={ handleInputChange }
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control 
                  type="text"
                  name="nombre" 
                  placeholder="Enter name"
                  value={nombre}
                  onChange={ handleInputChange }
                  />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupDescription">
                <Form.Label>Descripción</Form.Label>
                <Form.Control 
                  type="text"
                  name="descripcion" 
                  placeholder="Description" 
                  value={descripcion}
                  onChange={ handleInputChange }
                  />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupValue">
                <Form.Label>Valor unitario</Form.Label>
                <Form.Control 
                  type="number"
                  name="valor" 
                  placeholder="Enter value" 
                  value={valor}
                  onChange={ handleInputChange }  
                  />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>URL Imagen</Form.Label>
                <Form.Control 
                type="text" 
                name="imagen" 
                placeholder="Enter URL" 
                value={imagen}
                onChange={ handleInputChange }
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <FormCheck
                  className="float-end"
                  type="checkbox"
                  id="default-checkbox"
                  label="Disponible"
                  name="disponible"
                  value={disponible}
                  onChange={ handleInputChange }
                />
              </Form.Group>
              <br/>
              {/* <Button 
                className="float-start btnRegistro" 
                type="button">Borrar</Button> */}
              <Button 
                type="submit"
                className="float-end btnRegistro"
              >
              Guardar</Button>
              <br/>
              <br/>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};
