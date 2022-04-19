import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from '../logo.png';
const Header = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        id="logo-hash-link"
        
      >
        <Container>
          <Link style={{display: 'inline-block'}} to="/home">
            
              <img
                style={{ width: "100px"  }}
                src={logo}
                alt=""
              />
            
          </Link>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Link
                className="text-white text-decoration-none p-3"
                to="/gallary"
              >
                GALLARY
              </Link>
              <Link
                className="text-white text-decoration-none p-3"
                to="/team"
              >
                TEAM
              </Link>
              <Link
                className="text-white text-decoration-none p-3"
                to="/teachers"
              >
                TEACHERS
              </Link>
            </Nav>
            <Nav>
              <Link
                className="text-white text-decoration-none p-3"
                to="/blog"
              >
                BLOG
              </Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
