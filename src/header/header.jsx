import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">accredian</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/ReferAndEarn" className="nav-link">
              refer & earn
            </Link>
          </Nav>
          <Nav className="ms-auto">
            <div className="nav-item">
              <Link to="/Login" className="nav-link custom-nav-link">
                Login
              </Link>
            </div>
            <div className="nav-item">
              <Nav.Link href="#" className="custom-nav-link">
                courses
              </Nav.Link>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
