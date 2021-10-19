import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Button} from "react-bootstrap";
import logo from '../../assets/logo.png';
import {useDispatch} from 'react-redux';
import { startLogout } from '../../actions/auth';


export const NavbarApp = () => {

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(startLogout());
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                <Navbar.Brand href="/">
                        <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        />{' '}
                            Plantik
                    </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <NavDropdown title="Ventas" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/Registro-Ventas">Registro de ventas</NavDropdown.Item>
                            <NavDropdown.Item href="/Gestion-ventas">Gestion de ventas</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Productos" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/Registro-Productos">Registro de productos</NavDropdown.Item>
                            <NavDropdown.Item href="/Maestro-Productos">Gestion de Productos</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <Button 
                    variant="outline-danger"
                    onClick={ handleLogout }
                >
                    <i className="fas fa-sign-out-alt"></i>
                    <span> Logout</span>
                </Button>
                </Container>
                
            </Navbar>
        </>
    )
}

