import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import { Link } from "react-router-dom";

 function Header(){
    return(
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">EseTech Solutions</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link to="/experience">Experience</Nav.Link>
              <NavDropdown title="Project" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">View Projects</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Add Projects
                </NavDropdown.Item> 
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Media
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}
export default Header