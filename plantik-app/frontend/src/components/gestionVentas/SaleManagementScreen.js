import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

export const SaleManagementScreen = () => {
  return (
    <Container className="product-container">
      <Row className="justify-content-md-center">
        <Col xs={8} className="regVentas-form">
          <h2>Estado de Venta</h2>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formBasicEmail">
                <Form.Label>ID Cliente</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresa Número Documento"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formBasicEmail">
                <Form.Label>Razón Social-Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Razón Social"
                />
              </Form.Group>
            </Row>

            {/* <Form.Group className="mb-3" controlId="formGroupCode">
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
              <Form.Label className="me-sm-2" htmlFor="inlineFormCustomSelect">
                Estado
              </Form.Label>
              <Form.Select className="me-sm-2" id="inlineFormCustomSelect">
                <option value="0">Disabled select menu</option>
                <option value="1">Disponible</option>
                <option value="2">No disponible</option>
              </Form.Select>
            </Form.Group>
            <Row className="align-items-center">
              <Col xs="auto" className="my-1">
                <Button type="button">Borrar</Button>
              </Col>
              <Col xs="auto" className="my-1">
                <Button type="button">Ingresar</Button>
              </Col>
            </Row> */}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
