import React, { useContext } from 'react'
import { Navbar, Container, Nav } from "react-bootstrap";
import styles from "../styles/NavBar.module.css";
import { NavLink } from 'react-router-dom'
import { CurrentUserContext } from '../App';

const NavBar = () => {
  const currentUser = useContext(CurrentUserContext);
  const loggedInIcons = <>{currentUser?.username}</>;
  
  const loggedOutIcons = <> <NavLink to='/signin' className={styles.NavLink}
    activeClassName={styles.Active} >
    <i className="fa-solid fa-right-to-bracket"></i>Sign in</NavLink>
    <NavLink to='/signup' className={styles.NavLink} activeClassName={styles.Active}>
      <i className="fa-solid fa-user-plus"></i>Sign up</NavLink>

  </>
  return (
    <Navbar className={styles.NavBar} expand="md" fixed="top">
      <Container>
        <NavLink to='/'>
          <Navbar.Brand >CanvasCorner</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink to='/' exact className={styles.NavLink} activeClassName={styles.Active}><i className="fa-solid fa-house"></i>Home</NavLink>
            {currentUser ? loggedInIcons : loggedOutIcons}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar

