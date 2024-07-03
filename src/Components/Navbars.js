import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tailwindcss/tailwind.css';
import Button from 'react-bootstrap/Button';

function Navbars() {
    return (
        <Navbar expand="lg" className="my-0 py-2 mt-2 mb-2">
            <Container className="flex justify-between items-center">
                <Navbar.Brand href="#">
                    <img
                        src="habot-logos.jpg"
                        alt="logo"
                        className="h-12 w-32 ml-12"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="flex justify-end items-center">
                    <Nav className="flex space-x-8 items-center mr-12">
                        <Nav.Link href="#find-suppliers" className="text-gray-500 hover:text-gray-900">Find Suppliers</Nav.Link>
                        <NavDropdown title="Find Service Tags" id="basic-nav-dropdown" className="text-gray-500 hover:text-gray-900">
                            <NavDropdown.Item href="#service1">Vector</NavDropdown.Item>
                            <NavDropdown.Item href="#service2">Service 2</NavDropdown.Item>
                            <NavDropdown.Item href="#service3">Service 3</NavDropdown.Item>
                        </NavDropdown>
                        <Button variant="outline-success" className="ml-2 w-42 h-12 font-bold">
                            Login / Sign Up
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navbars;
