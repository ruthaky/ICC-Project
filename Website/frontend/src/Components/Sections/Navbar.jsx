import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import logo from "./building.png";

function NavBar() {
  return (
    <Navbar
      expand="lg"
      variant="dark"
      collapseOnSelect
      sticky="top"
      style={{
        backgroundColor: "#222222",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
        padding: "10px 0",
      }}
    >
      {/* Make container fluid to increase width */}
      <Container fluid className="px-4">
        {/* Logo */}
        <LinkContainer to="/">
          <Navbar.Brand className="me-auto d-flex align-items-center">
            <img
              src={logo}
              alt="Logo"
              style={{ height: "40px", marginRight: "10px" }}
            />
            <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
              RealEstate
            </span>
          </Navbar.Brand>
        </LinkContainer>

        {/* Toggle for mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          {/* Navigation Links */}
          <Nav className="ms-auto" style={{ alignItems: "center" }}>
            {[
              { to: "/", icon: "fa-home", text: "Home" },
              { to: "/predict", icon: "fa-cloud", text: "Predict" },
              { to: "/analysis", icon: "fa-chart-simple", text: "Analysis" },
              { to: "/wishlist", icon: "fa-heart", text: "Wishlists" },
            ].map((item) => (
              <LinkContainer key={item.to} to={item.to}>
                <Nav.Link
                  style={{
                    padding: "8px 15px",
                    margin: "0 5px",
                    color: "#ffffff",
                    borderRadius: "8px",
                    transition: "background-color 0.3s",
                  }}
                  className="nav-link-hover"
                >
                  <i className={`fa-solid ${item.icon}`}></i>&nbsp; {item.text}
                </Nav.Link>
              </LinkContainer>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
