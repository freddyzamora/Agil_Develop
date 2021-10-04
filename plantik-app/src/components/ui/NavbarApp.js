import React from 'react'
import { Navbar, Container, Nav, NavDropdown} from "react-bootstrap";


export const NavbarApp = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="/">
                        <img
                        alt=""
                        src="/logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        />{' '}
                            Plantik
                    </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Login</Nav.Link>
                        <NavDropdown title="Ventas" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/Registro-Ventas">Registro de ventas</NavDropdown.Item>
                            <NavDropdown.Item href="/Gestion-ventas">Gestion de ventas</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Productos" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/Registro-Productos">Registro de productos</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Gestion de Productos</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Usuarios" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/Gestion-Usuarios">Gestion de Usuarios</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

