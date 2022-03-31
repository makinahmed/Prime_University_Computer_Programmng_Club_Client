import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">PUCPC</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#pricing">GALLARY</Nav.Link>
              <Nav.Link href="#features">TEAM</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">BLOG</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                WINGS
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
