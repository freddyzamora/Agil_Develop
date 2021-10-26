import React,  { useState }  from 'react';
import { NavbarApp } from "../ui/NavbarApp";
import './SalesStatus.css';
import { useEffect } from "react";
import {Row,  Col,  Container,  Table,  Form,  Button,  Placeholder,} from "react-bootstrap";

export const SaleManagementScreen = () => {

    //Leer ID de cliente
  const [cedfind, setCedfind]= useState({  });
  
  const changeinput = (event)=>{
    setCedfind({...cedfind,[event.target.name]:event.target.value});
  };
  const [datoscli , setDatoscli] = useState({"Nombres":"","Apellidos":""});
  const BuscarCliente = ()=>{
    const datoscli = listClientes.find((x) => x.ID_Cliente ==cedfind.IdCliente);
    setDatoscli({...datoscli})
    
  }; 
  // conexión a mongo clientes
     const [listClientes,setListClientes]= useState([]);
      useEffect(() => {
        const fetchData = async () => {
         const response = await fetch("https://warm-dusk-23117.herokuapp.com/api/Clientes");
        const data = await response.json();
        setListClientes(data);
        };
        fetchData();
        }, []);

// conexión a mongo leer Factura Ventas
const [listaventa , setlistVenta]= useState([]);
useEffect(() => {
  const fetchData = async () => {
    const response = await fetch("https://warm-dusk-23117.herokuapp.com/api/FacVenta");
    const data = await response.json();
    setlistVenta(data);
  };
  fetchData();
}, []);

/* setVenta({"ID_Venta":84,"ID_Cliente":92529260,"Nombres":"AMANDA",
"Apellidos":"MARQUEZ SOLANO","Ciudad":"MEDELLIN","Email":"AMARSO529@HOTMAIL.COM",
"Telefono":3202725538,"Vendedor":"JUAN CARLOS",
"Estado_venta":"En proceso","Fecha":"23/10/2021","Producto":"AZALEA",
"Cantidad":12,"Precio_unitario":100000,
"Precio_total":1200000}); */

//Leer estado seleccionado
const [estadoventa, setEstadoVenta]= useState({});
const cambioEstado = (event)=>{
  setEstadoVenta({...estadoventa,[event.target.name]:event.target.value});
  console.log(estadoventa);
};
const [venta , setVenta]=useState([]);

const Buscarventas = ()=>{

 /*  const lineas_venta = listaventa.map((lineaExaminar)=>{
    return (lineaExaminar.Estado_venta === "entregada");
    
});
    const lineavalida = listaventa.filter( (x) =>{
      return(x.Estado_venta==estadoventa.value)
      console.log(lineavalida);
    }  );
   console.log(lineas_venta);
      //if (lineavalida)
        //return(lineavalida);
      //});
     */

    setVenta([...listaventa]);
  
}; 

  return (
        <>
      <NavbarApp />
  <Container className="sales-container">
    <Row className="justify-content-md-center">
        <Col xl={15} className="estadoVentas-form">
          <h2>Estado de Venta</h2>
          <Row>
           <Form.Label>ID</Form.Label>
            <Form.Group xs ={6} as={Col}  className="mb-1" controlId="formGroupCode">
              <Form.Control 
                type="number" 
                placeholder="Enter ID" 
                name="IdCliente" 
                onChange={changeinput} />
            </Form.Group>                  
          <Button xs ={4} as={Col} 
           variant="success"  
           type="button" 
           onClick={BuscarCliente}>
             Buscar
          </Button>
                                    
    </Row>
    <Row>
      <Form.Group xs ={6} as={Col} className="mb-1" controlId="formGroupName">
        <Form.Label>Nombre/Razón Social</Form.Label>
        <Form.Control
          type="text" 
          placeholder="Muestra Nombre - Razon Social" 
          disabled
          name="NombreRazon"   
          value={datoscli.Nombres+" "+datoscli.Apellidos} />
      </Form.Group>
                                                                                                
      <Form.Group xs ={6} as={Col} className="mb-3" controlId="formGroupDescription">
        <Form.Label>Ciudad</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Muestra Ciudad" 
          disabled 
          name="Ciudad"  
          value={datoscli.Ciudad} />
      </Form.Group>
      <Form.Group xs ={6} as={Col} className="mb-3" controlId="formGroupValue">
        <Form.Label>Teléfono</Form.Label>
          <Form.Control 
            type="number" 
            placeholder="Enter number" 
            disabled name="Telefono"    
            value={datoscli.Telefono} />
      </Form.Group>
    </Row>
    <Row>
                                
      <Form.Group xs ={6} as={Col} className="mb-3" controlId="formGroupValue">
        <Form.Label>Mail</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Muestra Email"  
            disabled name="Email" 
            value={datoscli.Email} />
      </Form.Group>
      
      <Form.Group xs ={6} as={Col} className="mb-3">
          <Form.Label 
            className="me-sm-2"
            htmlFor="inlineFormCustomSelect">
            Estado de Venta
        </Form.Label>

        <Form.Select  className="me-sm-2" name="Estado" onChange={cambioEstado}>
          <option value="0">Seleccione Estado</option>
          <option value="cancelada">Cancelada</option>
          <option value="En proceso">En proceso</option>
          <option value="entregada">Entregada</option>
        </Form.Select>
        
        <Col xs="auto" className="my-1">
          <Button 
            variant="success"  
            type="button"  
            onClick={Buscarventas} >Actualizar</Button>
        </Col>
      </Form.Group>
    </Row>
  <br />
  <Row className="mb-3">
          <Placeholder xs={12} bg="success" size="xs" />
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
          {<tbody>
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

                                
                                
        </Col>
    </Row>   
  </Container>
                           
    </>
 )
}
