import React, { useEffect } from "react";
import { useDispatch, useSelector} from 'react-redux';
import { eventStartLoading } from '../../actions/events';

import { Producto } from "./Producto";
import { Container, Row, Col } from "react-bootstrap";

export const ListaProductos = () => {

  const dispatch = useDispatch();
  const { events } = useSelector( state => state.product);

  useEffect(() => {
      
      dispatch( eventStartLoading() );

  }, [ dispatch ])


  return (
    <>
      <Container className="product-container">
        <Row className="justify-content-md-center">
          <Col className="Productos-form">
            <Row xs={1} md={3} className="g-4">
              {events.map((producto) => (
                <Col key={producto.id}>
                  <Producto 
                    producto={producto}
                    
                  />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
