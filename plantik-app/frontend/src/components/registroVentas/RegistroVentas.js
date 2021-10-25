import React , { useState } from "react";
import { NavbarApp } from "../ui/NavbarApp";
import { useEffect } from "react";
import {Row,  Col,  Container,  Table,  Form,  Button,  Placeholder,} from "react-bootstrap";
import Swal from 'sweetalert2';

export const RegistroVentas = () => {
  //Leer ID de cliente
  const [cedfind, setCedfind]= useState({
  });
  const changeinput = (event)=>{
    setCedfind({...cedfind,[event.target.name]:event.target.value});
  };
  // Traer datos clientes
  const [datoscli , setDatoscli] = useState({"Nombres":"","Apellidos":""});
  const BuscarCliente = ()=>{
    const datoscli = listClientes.find((x) => x.ID_Cliente ==cedfind.IdCliente);
    setDatoscli({...datoscli})
  };
// Leer codigo producto 
  const [prodreg, setProdref] = useState({});
  const changeinputprod = (event)=> {
    setProdref({...prodreg,[event.target.name]:event.target.value})};
// Leer cantidad producto 
const [cantreg, setCantref] = useState({});
const changeinputcant = (event)=> {
  setCantref({...cantreg,[event.target.name]:event.target.value})};
//Establecer lista de compra
  const [listacompra, setlistacompra] = useState([]);
  const addprod = ()=>{
    const prodadd = listproductos.find((x) => x.Prod_id == prodreg.CodigoProducto);
    const prodyaAdd = listacompra.find((p) => p.id == prodadd.Prod_id);
    if (prodyaAdd) {
      // producto repetido en el carrito
      prodyaAdd.cantidad= parseInt(prodyaAdd.cantidad)+parseInt(cantreg.Cantidad);
      prodyaAdd.total =  prodyaAdd.precio * prodyaAdd.cantidad;
      setlistacompra([...listacompra]);
    } else {
      //no se ha agregado el producto 
      const producto = {
        id: prodadd.Prod_id,
        nombre: prodadd.Titulo,
        cantidad: parseInt(cantreg.Cantidad),
        precio: prodadd.Precio,
        total: prodadd.Precio*cantreg.Cantidad,
      };
      setlistacompra([...listacompra, producto]);
    }  
  }
//Leer vendedor seleccionado
  const [vend, setVend]= useState({});
  const cambiovendedor = (event)=>{
    setVend({...vend,[event.target.name]:event.target.value});
  };
// conexión a mongo vendedor
const [listvendedores,setListvendedores]= useState([]);
useEffect(() => {
  const fetchData = async () => {
    const response = await fetch("http://localhost:4000/api/Vendedores");
    const data = await response.json();
    setListvendedores(data);
  };
  fetchData();
}, []);
// conexión a mongo clientes
const [listClientes,setListClientes]= useState([]);
useEffect(() => {
  const fetchData = async () => {
    const response = await fetch("http://localhost:4000/api/Clientes");
    const data = await response.json();
    setListClientes(data);
  };
  fetchData();
}, []);
// conexión a mongo leer Factura Ventas
const [listventas,setListventas]= useState([{"ID_Venta":-1}]);
useEffect(() => {
  const fetchData = async () => {
    const response = await fetch("http://localhost:4000/api/FacVenta");
    const data = await response.json();
    setListventas(data);
  };
  fetchData();
}, []);
// conexión a mongo leer producto
const [listproductos,setListproductos]= useState([]);
useEffect(() => {
  const fetchData = async () => {
    const response = await fetch("http://localhost:4000/api/Producto");
    const data = await response.json();
    setListproductos(data);
  };
  fetchData();
}, []);
//Establecer venta con todos datos
  const [venta , setVenta]=useState([]);
  const  reglineasventa= ()=>{
    const lineas_venta = listacompra.map((prodlista)=>{
      const lineaVenta = {
        ID_Venta:listventas[listventas.length-1].ID_Venta+1,
        ID_Cliente:datoscli.ID_Cliente,
        Nombres:datoscli.Nombres,
        Apellidos:datoscli.Apellidos,
        Ciudad:datoscli.Ciudad,
        Email: datoscli.Email,
        Telefono: datoscli.Telefono,
        Vendedor:vend.Vendedor,
        Fecha:new Date().toLocaleDateString(),
        Estado_venta: "En proceso",
        Producto:prodlista.nombre,
        Cantidad:prodlista.cantidad,
        Precio_unitario:prodlista.precio,
        Precio_total:prodlista.total};
        return(lineaVenta);  
    });
    setVenta([...lineas_venta]);
  };

  const post_registroVenta = async ()=>{  
    const response = await fetch(
      "http://localhost:4000/api/FacVenta",{
      method: "POST",
      body: JSON.stringify(venta),
      headers:{
        "Content-Type": "application/json",
        },  
      }).then(response => response.json()) 
        console.log( JSON.stringify(venta))
        console.log(response);
        Swal.fire({
          title: 'Registro Exitoso!',
          text: " ",
          icon: 'success',
          confirmButtonText: "Home",
        }).then(function() {
            window.location = "/Gestion";
        } );
      }; 
  return (
    <>
    <NavbarApp />
    <Container>
      {/*Titulo*/}
      <Row className="mb-3">
        <h2 className="text-center"> Registro de Venta</h2>
      </Row>
      {/*IDVenta - Cliente*/}
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} >
            <Form.Label>ID Cliente</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Ingresa Número Documento" 
              name="IdCliente"
              onChange={changeinput} />
          </Form.Group>
          <Form.Group as={Col} >
            <Form.Label>ID Venta</Form.Label>
            <Form.Control
              type="text"
              placeholder=" Número Venta Automatico "
              disabled
              name="IdVenta"
              value= {listventas[listventas.length-1].ID_Venta+1}
            />
          </Form.Group>
        </Row>
        {/*Datos Cliente*/}
        <Row className="mb-1">
          <Form.Group as={Col} >
            <Form.Label>Nombre - Razon Social</Form.Label>
            <Form.Control
              type="text"
              placeholder="Muestra Nombre - Razon Social"
              disabled
              name="NombreRazon"
              value={datoscli.Nombres+" "+datoscli.Apellidos}
            />
          </Form.Group>
          <Form.Group as={Col} >
            <Form.Label>Ciudad</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Muestra Ciudad" 
              disabled name="Ciudad" 
              value={datoscli.Ciudad}/>
          </Form.Group>
          <Form.Group as={Col} >
            <Form.Label>Tipo Documento</Form.Label>
            <Form.Control
              type="text"
              placeholder="Muestra Tipo ID"
              disabled
              name="TipoDoc"
              value={datoscli.Tipo_documento}
            />
          </Form.Group>
        </Row>
        <Row className="mb-2">
          <Form.Group as={Col} >
            <Form.Label>Email</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Muestra Email" 
              disabled name="Email" 
              value={datoscli.Email} />
          </Form.Group>
          <Form.Group as={Col} >
            <Form.Label>Fecha</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Muestra Fecha" 
              disabled name="Fecha" 
              value = {new Date().toLocaleDateString()}/>
          </Form.Group>
          <Form.Group as={Col} >
            <Form.Label>Telefono</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Muestra Telefono" 
              disabled name="Telefono" 
              value={datoscli.Telefono} />
          </Form.Group>
        </Row>
        {/*vendedor - Boton*/}
        <Form.Label>Vendedor</Form.Label>
        <Row className="mb-3">
          <Col xs={9}>
            <Form.Select aria-label="Default select example" name="Vendedor" onChange={cambiovendedor}>
              <option >Seleccione Vendedor</option>
              {listvendedores.map((vend)=>(
              <option key={vend.Nombres} value={vend.Nombres}>{vend.Nombres}</option>
              ))}            
            </Form.Select>
          </Col>
          <Button as={Col} sm={2} 
            variant="success"
            type="button"
            onClick={BuscarCliente}>
            Buscar Cliente
          </Button>
        </Row>
        {/*Barra*/}
        <Row className="mb-3">
          <Placeholder xs={12} bg="success" size="xs" />
        </Row>
        {/*Registro productos*/}
        <Row className="mb-2">
          <Col xs="5">
            <Form.Group as={Row} >
              <Form.Label column sm={4}>
                Codigo Producto
              </Form.Label>
              <Col>
                <Form.Control
                  type="number"
                  placeholder="Ingresa Codigo Producto"
                  name="CodigoProducto"
                  onChange={changeinputprod}
                />
              </Col>
            </Form.Group>
          </Col>
          <Col xs="4">
            <Form.Group as={Row} >
              <Form.Label column sm={3}>
                Cantidad
              </Form.Label>
              <Col>
                <Form.Control 
                  type="number" 
                  placeholder="Ingresa Cantidad" 
                  name="Cantidad" 
                  onChange={changeinputcant}/>
              </Col>
            </Form.Group>
          </Col>
          <Col xs="3">
            <Button 
              variant="success" 
              type="button" 
              className="float-center" 
              onClick={addprod}>
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
            {listacompra.map((prod)=>{
              return(
                <tr key={prod.id}>
              <td>{prod.id}</td>
              <td>{prod.nombre}</td>
              <td>{prod.cantidad}</td>
              <td>{prod.precio}</td>
              <td>{prod.total}</td>
            </tr>
              );
            })}
            <tr>
              <td colSpan="4"><strong>Total de la Compra</strong></td>
              <td colSpan="1">{listacompra.reduce((tot,prod)=> tot+prod.total,0)}</td>
            </tr>
          </tbody>
        </Table>
        </Row>
        <Row className="mb-2">
          {/*Terminar Registro Productos*/}
        <Col xs="7">
          <Button variant="success"  className="float-end" mb-3 onClick={reglineasventa}>
            Terminar Productos
          </Button>
        </Col>
        </Row>
        <Row className="mb-2">
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>ID_Cliente</th>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio_unitario</th>
              <th>Precio_total</th>
              <th>Estado_venta</th>
              <th>Nombres</th>
              <th>ID_Venta</th>
              <th>Vendedor</th>
              <th>Fecha</th>
            </tr>
          </thead>
          { <tbody>
            {venta.map((prod)=>{
              return(
                <tr key={prod.Producto}>
              <td>{prod.ID_Cliente}</td>
              <td>{prod.Producto}</td>
              <td>{prod.Cantidad}</td>
              <td>{prod.Precio_unitario}</td>
              <td>{prod.Precio_total}</td>
              <td>{prod.Estado_venta}</td>
              <td>{prod.Nombres}</td>
              <td>{prod.ID_Venta}</td>
              <td>{prod.Vendedor}</td>
              <td>{prod.Fecha}</td>
            </tr>
              );
            })}
          </tbody>}
        </Table>
      </Row>
      {/*Registro Venta*/}
      <Row className="mb-3">
        { <Col xs="7">
          <Button variant="success" size="lg" className="float-end" mb-3 onClick={post_registroVenta}>
            Registrar Venta
          </Button>
        </Col> }
      </Row>
    </Container>
</>
  );
};
