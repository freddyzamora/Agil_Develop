import React from "react";
import { Producto } from "./Producto";
import { Container, Row, Col } from "react-bootstrap";

export const ListaProductos = () => {
  const productos = [
    {
      title: "Suculenta",
      description: "Planta de interiores",
      price: 5000,
      url: "https://images.pexels.com/photos/3952027/pexels-photo-3952027.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      title: "Captus",
      description: "Planta de exteriores",
      price: 10000,
      url: "https://images.pexels.com/photos/7015024/pexels-photo-7015024.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      title: "Orquidia",
      description: "Belleza sin igual",
      price: 5000,
      url: "https://images.pexels.com/photos/4393495/pexels-photo-4393495.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
  ];
  return (
    <>
      <Container className="product-container">
        <Row className="justify-content-md-center">
          <Col className="Productos-form">
            <Row xs={1} md={3} className="g-4">
              {productos.map((producto) => (
                <Col>
                  <Producto producto={producto} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
