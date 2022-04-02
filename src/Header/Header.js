import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
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
          <HashLink style={{display: 'inline-block'}} to="home#logo-hash-link">
            
              <img
                style={{ width: "100px"  }}
                src={logo}
                alt=""
              />
            
          </HashLink>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <HashLink
                className="text-white text-decoration-none p-3"
                to="home#gallery-hash-link"
              >
                GALLARY
              </HashLink>
              <HashLink
                className="text-white text-decoration-none p-3"
                to="home#team-hash-link"
              >
                TEAM
              </HashLink>
              <HashLink
                className="text-white text-decoration-none p-3"
                to="home#teachers-hash-link"
              >
                TEACHERS
              </HashLink>
            </Nav>
            <Nav>
              <HashLink
                className="text-white text-decoration-none p-3"
                to="home#blog-hash-link"
              >
                BLOG
              </HashLink>
              <HashLink
                className="text-white text-decoration-none p-3"
                to="home#wings-hash-link"
              >
                WINGS
              </HashLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
