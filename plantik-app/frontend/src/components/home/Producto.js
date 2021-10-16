import React from "react";
import { Button, Card } from "react-bootstrap";

export const Producto = ({ producto }) => {
  return (
    <>
      <Card>
        <Card.Img variant="top" src={producto.url} />
        <Card.Body>
          <Card.Title>{producto.title}</Card.Title>
          <Card.Text>{producto.description}</Card.Text>
          <Button variant="success">${producto.price}</Button>
        </Card.Body>
      </Card>
    </>
  );
};
