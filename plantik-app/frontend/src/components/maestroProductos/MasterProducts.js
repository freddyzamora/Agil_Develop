import "./MasterProducts.css";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import React, { useState } from "react";
import { useEffect } from "react";
import { NavbarApp } from "../ui/NavbarApp";
//import api from "../../api";

export const MasterProducts = () => {
  // Leer codigo producto
  const [prodreg, setProdref] = useState({});
  const changeinputprod = (event) => {
    setProdref({ ...prodreg, [event.target.name]: event.target.value });
  };

  // conexión a mongo leer producto
  const [listproductos, setListproductos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:4000/api/Producto");
      const data = await response.json();
      setListproductos(data);
    };
    fetchData();
  }, []);

  //   // conexión a mongo Productos
  // const [listProductos, setListProductos] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch("http://localhost:3000/api/Productos");
  //     const data = await response.json();
  //     setListProductos(data);
  //   };
  //   fetchData();
  // }, []);

  // const prodreg = listproductos.find(
  //   (x) => x.Prod_id == prodreg.CodigoProducto
  // );

  const addprod = () => {
    const datosProd = listproductos.find(
      (x) => x.Prod_id == prodreg.CodigoProducto
    );
  };

  const [productoEncontrado, setProductoEncontrado] = useState({});

  const BuscarProducto = (event) => {
    const prodEncontrado = listproductos.find(
      (x) => x.Prod_id == prodreg.CodigoProducto
    );

    setProductoEncontrado({ ...prodEncontrado });
    console.log(prodEncontrado);
  };

  return (
    <>
      <NavbarApp />
      <Container className="product-container">
        <Row className="justify-content-md-center">
          <Col xs={7} className="form-MasterProducts">
            <h2> Maestro de Productos </h2>{" "}
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="labelBuscar">
                  <Form.Label>Escriba el código de un producto: </Form.Label>
                </Form.Group>
                <Form.Group as={Col}>
                  {/* <Form.Control type="text" placeholder="Ingrese el Código" /> */}
                  <Form.Control
                    type="text"
                    placeholder="Ingrese el Código"
                    name="CodigoProducto"
                    onChange={changeinputprod}
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="buttonMostrar">
                  <Button
                    as={Col}
                    sm={12}
                    variant="primary"
                    type="submit"
                    onClick={BuscarProducto}
                  >
                    Buscar Producto
                  </Button>
                </Form.Group>
                <Row className="mb-1">
                  <Form.Group as={Col}>
                    <Form.Label>Titulo</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Muestra titulo"
                      name="Titulo"
                      value={productoEncontrado.Titulo}
                    />
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label>Precio</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="0"
                      name="Precio"
                      value={productoEncontrado.Precio}
                    />
                  </Form.Group>
                </Row>
                <Row className="mb-2">
                  <Form.Group as={Col}>
                    <Form.Label>Stock </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="0"
                      name="Stock"
                      value={productoEncontrado.Stock}
                    />
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.Label>Disponible</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Muestra Disponible"
                      name="Disponible"
                      value={productoEncontrado.Disponible}
                    />
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.Label>Categoria </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Muestra Categoria"
                      name="Categoria"                                         
                      value={productoEncontrado.Categoria}
                    />
                  </Form.Group>
                </Row>
                <Row className="mb-3" xs={12}>
                  <Form.Group as={Col} controlId="CardProductos">
                    <Card>
                      <Card.Header>Descripcion </Card.Header>
                      <Card.Body>
                        <Card.Text>{productoEncontrado.Descripcion}</Card.Text>
                        <Button variant="primary">Actualizar</Button>
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
                  <Button variant="primary" type="submit">
                    Listar
                  </Button>
                </Form.Group>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};
