import React from 'react'
import {Navbar, Container, Nav} from "react-bootstrap"
const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
    <Navbar.Brand >CanvasCorner</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link >Home</Nav.Link>
        <Nav.Link >Sign in</Nav.Link>
        <Nav.Link >Sign up</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar

