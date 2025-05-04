import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from './building.png';

function NavBar() {
  return (
    <Navbar expand="lg" variant="dark" collapseOnSelect sticky="top" style={{ backgroundColor: '#0e1117' }}>
      <Container>

        {/* Logo on the left */}
        <LinkContainer to="/">
          <Navbar.Brand className="me-auto">
            <img src={logo} alt="Logo" style={{ height: '30px' }} />
          </Navbar.Brand>
        </LinkContainer>

        {/* Navbar.Toggle can go here if needed on mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          {/* Nav links on the right */}
          <Nav className="ms-auto" style={{ alignItems: 'center' }}>
            <LinkContainer to="/">
              <Nav.Link>
                <i className="fa-solid fa-home"></i>&nbsp; Home
              </Nav.Link>
            </LinkContainer>

            <LinkContainer to="/predict">
              <Nav.Link>
                <i className="fa-solid fa-cloud"></i>&nbsp; Predict
              </Nav.Link>
            </LinkContainer>

            <LinkContainer to="/analysis">
              <Nav.Link>
                <i className="fa-solid fa-chart-simple"></i>&nbsp; Analysis
              </Nav.Link>
            </LinkContainer>

            <LinkContainer to="/wishlist">
              <Nav.Link>
                <i className="fa-solid fa-heart"></i>&nbsp; Wishlists
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default NavBar;
