import React from 'react'
import {Navbar, Container, Nav} from "react-bootstrap";
import styles from "../styles/NavBar.module.css";

const NavBar = () => {
  return (
    <Navbar className={styles.NavBar}  expand="lg" fixed="top">
      <Container>
    <Navbar.Brand >CanvasCorner</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link ><i class="fa-solid fa-house"></i>Home</Nav.Link>
        <Nav.Link ><i class="fa-solid fa-right-to-bracket"></i>Sign in</Nav.Link>
        <Nav.Link ><i class="fa-solid fa-user-plus"></i>Sign up</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar

