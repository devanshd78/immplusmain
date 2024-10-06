import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Style.css';
import logo from './Assets/Images/logo.png';

function AppNavbar() {
  return (
    <Navbar bg='light' expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand-text">
          <img
            src={logo}
            alt="Immplus Logo"
            className="d-inline-block align-top responsive-logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="nav-link-text">Home</Nav.Link>
            <Nav.Link as={Link} to="/services" className="nav-link-text">Services</Nav.Link>
            {/* <Nav.Link as={Link} to="/about" className="nav-link-text">About</Nav.Link> */}
            <Nav.Link as={Link} to="/contact" className="nav-link-text">Contact Us</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown" className="nav-link-text">
              <NavDropdown.Item href="https://www.pharma.immplus.in" target="_blank" rel="noopener noreferrer">
                Pharmacy Login
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.doctor.immplus.in" target="_blank" rel="noopener noreferrer">
                Doctor Login
              </NavDropdown.Item>
              {/* <NavDropdown.Item as={Link} to="/lab-tests">Lab Tests</NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;