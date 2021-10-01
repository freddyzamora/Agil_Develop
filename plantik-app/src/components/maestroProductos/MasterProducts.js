import React from 'react'
import './MasterProducts.css'
import { Form, Button, Container, Row, Col, FormText } from 'react-bootstrap'

export const MasterProducts = () => {
  return (
    <>
      <Container className="product-container">
        <Row className="justify-content-md-center">
          <Col xs={6} className="regVentas-form">
            <h2> Maestro de Productos </h2>{' '}
            <form>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="labelMostrar">
                  <Form.Label>Ver lista de Productos: </Form.Label>
                </Form.Group>
                <Form.Group as={Col} controlId="labelSelector">
                  <Form.Select>
                    <option value="1">Materas</option>
                    <option value="2">Plantas</option>
                    <option value="3">Abonos</option>
                    <option value="4">Fertilizantes</option>
                    <option value="5">Insecticidas</option>
                    <option value="6">Accesorios y Otros</option>
                  </Form.Select>
                  <Form.Text className="text-muted">
                    Seleccione una categoria
                  </Form.Text>
                </Form.Group>
                <Form.Group as={Col} controlId="buttonMostrar">
                  <Button variant="primary" type="submit" disabled>
                    Listar
                  </Button>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="labelBuscar">
                  <Form.Label>Buscar un producto: </Form.Label>
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Control type="text" placeholder="Ingrese el Código" />
                </Form.Group>
                <Form.Group as={Col} controlId="buttonMostrar">
                  <Button variant="primary" type="submit" disabled>
                    Buscar
                  </Button>
                </Form.Group>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  )
}
