import React from "react";

import { Row, Col, Container, Table, Form, Button } from "react-bootstrap";

export const RegistroVentas = () => {
  return (
    <Container>
      <br />

      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
            <Form.Label>ID Cliente</Form.Label>
            <Form.Control type="email" placeholder="Ingresa Número Documento" />
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
            <Form.Label>ID Venta</Form.Label>
            <Form.Control
              type="email"
              placeholder=" Número Venta Automatico "
              disabled
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} className="mb-3" controlId="formBasicPassword">
            <Form.Label>Nombre - Razon Social</Form.Label>
            <Form.Control
              type="text"
              placeholder="Muestra Nombre - Razon Social"
              disabled
            />
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="formBasicPassword">
            <Form.Label>Ciudad</Form.Label>
            <Form.Control
              type="password"
              placeholder="Muestra Ciudad"
              disabled
            />
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="formBasicPassword">
            <Form.Label>Direccion</Form.Label>
            <Form.Control
              type="password"
              placeholder="Muestra Direccion"
              disabled
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} className="mb-3" controlId="formBasicPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="password"
              placeholder="Muestra Email"
              disabled
            />
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="formBasicPassword">
            <Form.Label>Fecha</Form.Label>
            <Form.Control
              type="password"
              placeholder="Muestra Fecha"
              disabled
            />
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="formBasicPassword">
            <Form.Label>Telefono</Form.Label>
            <Form.Control
              type="password"
              placeholder="Muestra Telefono"
              disabled
            />
          </Form.Group>
        </Row>

        <Form.Label>Vendedor</Form.Label>
        <Form.Select aria-label="Default select example">
          <option>Seleccione Vendedor</option>
          <option value="1">Vendedor1</option>
          <option value="2">Vendedor2</option>
          <option value="3">Vendedor3</option>
        </Form.Select>
        <br />
        <Button variant="primary" type="button" className="float-end">
          Crear
        </Button>
      </Form>

      <br />
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Codigo</th>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Valor Unitario</th>
            <th>Valor Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};
