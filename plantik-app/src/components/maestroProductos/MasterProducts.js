import React from 'react'
import './MasterProducts.css'
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap'

export const MasterProducts = () => {
  return (
    <>
      <Container className="product-container">
        <Row className="justify-content-md-center">
          <Col xs={7} className="form-MasterProducts">
            <h2> Maestro de Productos </h2>{' '}
            <Form>
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
                <Row className="mb-3" xs={12}>
                  <Form.Group as={Col} controlId="CardProductos">
                    <Card>
                      <Card.Header>Productos</Card.Header>
                      <Card.Body>
                        <Card.Title>Ningun Producto Encontrado</Card.Title>
                        <Card.Text>Descripcion del producto</Card.Text>
                        <Button variant="primary" disabled>
                          Actualizar
                        </Button>
                      </Card.Body>
                    </Card>
                  </Form.Group>
                </Row>
              </Row>
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
                  <Form.Text className="text-Descriptive">
                    Seleccione una categoria
                  </Form.Text>
                </Form.Group>
                <Form.Group as={Col} controlId="buttonMostrar">
                  <Button variant="primary" type="submit" disabled>
                    Listar
                  </Button>
                </Form.Group>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  )
}
