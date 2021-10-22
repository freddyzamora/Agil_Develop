import React from "react";
import { Button, Card } from "react-bootstrap";

export const Producto = ({ producto}) => {
  return (
    <>
      <Card>
        <Card.Img variant="top" src={producto.imagen} />
        <Card.Body>
          <Card.Title>{producto.nombre}</Card.Title>
          <Card.Text>{producto.descripcion}</Card.Text>
          <Button variant="success">${producto.valor}</Button>
        </Card.Body>
      </Card>
    </>
  );
};
