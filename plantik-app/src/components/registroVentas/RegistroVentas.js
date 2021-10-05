import React from "react";

import {
  Row,
  Col,
  Container,
  Table,
  Form,
  Button,
  Placeholder,
} from "react-bootstrap";

export const RegistroVentas = () => {
  return (
    <Container>
      {/*Titulo*/}
      <Row className="mb-3">
        <h2 className="text-center"> Registro de Venta</h2>
      </Row>
      {/*IDVenta - Cliente*/}
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formBasicEmail">
            <Form.Label>ID Cliente</Form.Label>
            <Form.Control type="text" placeholder="Ingresa Número Documento" />
          </Form.Group>
          <Form.Group as={Col} controlId="formBasicEmail">
            <Form.Label>ID Venta</Form.Label>
            <Form.Control
              type="text"
              placeholder=" Número Venta Automatico "
              disabled
            />
          </Form.Group>
        </Row>
        {/*Datos Cliente*/}
        <Row className="mb-1">
          <Form.Group as={Col} controlId="formBasicPassword">
            <Form.Label>Nombre - Razon Social</Form.Label>
            <Form.Control
              type="text"
              placeholder="Muestra Nombre - Razon Social"
              disabled
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formBasicPassword">
            <Form.Label>Ciudad</Form.Label>
            <Form.Control type="text" placeholder="Muestra Ciudad" disabled />
          </Form.Group>
          <Form.Group as={Col} controlId="formBasicPassword">
            <Form.Label>Direccion</Form.Label>
            <Form.Control
              type="text"
              placeholder="Muestra Direccion"
              disabled
            />
          </Form.Group>
        </Row>
        <Row className="mb-2">
          <Form.Group as={Col} controlId="formBasicPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control type="Email" placeholder="Muestra Email" disabled />
          </Form.Group>
          <Form.Group as={Col} controlId="formBasicPassword">
            <Form.Label>Fecha</Form.Label>
            <Form.Control type="text" placeholder="Muestra Fecha" disabled />
          </Form.Group>
          <Form.Group as={Col} controlId="formBasicPassword">
            <Form.Label>Telefono</Form.Label>
            <Form.Control type="text" placeholder="Muestra Telefono" disabled />
          </Form.Group>
        </Row>
        {/*vendedor - Boton*/}
        <Form.Label>Vendedor</Form.Label>
        <Row className="mb-3">
          <Col xs={9}>
            <Form.Select aria-label="Default select example">
              <option>Seleccione Vendedor</option>
              <option value="1">Vendedor1</option>
              <option value="2">Vendedor2</option>
              <option value="3">Vendedor3</option>
            </Form.Select>
          </Col>
          <Button
            as={Col}
            variant="success"
            type="button"
            className="float-end"
          >
            Crear Nueva Venta
          </Button>
        </Row>
        {/*Barra*/}
        <Row className="mb-3">
          <Placeholder xs={12} bg="success" size="xs" />
        </Row>
        {/*Registro productos*/}
        <Row className="mb-2">
          <Col xs="5">
            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={4}>
                Codigo Producto
              </Form.Label>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Ingresa Codigo Producto"
                />
              </Col>
            </Form.Group>
          </Col>
          <Col xs="4">
            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={3}>
                Cantidad
              </Form.Label>
              <Col>
                <Form.Control type="text" placeholder="Ingresa Cantidad" />
              </Col>
            </Form.Group>
          </Col>
          <Col xs="3">
            <Button variant="success" type="button" className="float-center">
              Registrar Producto
            </Button>
          </Col>
        </Row>
      </Form>
      {/*Tabla de registro*/}
      <Row className="mb-2">
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Codigo</th>
              <th>Nombre Producto</th>
              <th>Cantidad</th>
              <th>Valor Unitario</th>
              <th>Valor Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>34532</td>
              <td>Maceta Ceramica Delux </td>
              <td>3</td>
              <td>15000</td>
              <td>45000</td>
            </tr>
            <tr>
              <td>23542</td>
              <td>Orquideas</td>
              <td>3</td>
              <td>40000</td>
              <td>120000</td>
            </tr>
            <tr>
              <td colSpan="3">Total de la Compra</td>
              <td colSpan="2">$$$$$$</td>
            </tr>
          </tbody>
        </Table>
      </Row>
      {/*Registro Venta*/}
      <Row className="mb-3">
        <Col xs="7">
          <Button variant="success" size="lg" className="float-end" mb-3>
            Registrar Venta
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
