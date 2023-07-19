import React from 'react'
import { Navbar, Container, Nav } from "react-bootstrap";
import styles from "../styles/NavBar.module.css";
import { NavLink } from 'react-router-dom'
import { useCurrentUser } from '../contexts/CurrentUserContext';

const NavBar = () => {

  const currentUser = useCurrentUser();

  const addPostIcon = (
    <NavLink to='/posts/create' className={styles.NavLink}
      activeClassName={styles.Active} >
      <i className="fa-solid fa-plus"></i>Add post
    </NavLink>
  )
  const loggedInIcons = <>
    <NavLink to='/feed' className={styles.NavLink}
      activeClassName={styles.Active} >
      <i className="fa-solid fa-stream"></i>Feed
    </NavLink>

    <NavLink to='/bookmark' className={styles.NavLink}
      activeClassName={styles.Active} >
      <i className="fa-solid fa-bookmark"></i>bookmarked
    </NavLink>

    <NavLink to='/' className={styles.NavLink}
      onClick={() => { }}
    >
      <i className="fa-solid fa-sign-out-alt"></i>Sign out
    </NavLink>

    <NavLink
      className={styles.NavLink}
      to={`/profiles/${currentUser?.profile_id}`}
    >
      <img src={currentUser?.profile_image} />
    </NavLink>
  </>;

  // will display these icons when user is logged out
  const loggedOutIcons = <>
    <NavLink to='/signin' className={styles.NavLink}
      activeClassName={styles.Active} >
      <i className="fa-solid fa-right-to-bracket"></i>Sign in
    </NavLink>

    <NavLink to='/signup' className={styles.NavLink}
      activeClassName={styles.Active}>
      <i className="fa-solid fa-user-plus"></i>Sign up
    </NavLink>

  </>
  return (
    <Navbar className={styles.NavBar} expand="md" fixed="top">
      <Container>
        <NavLink to='/'>
          <Navbar.Brand >CanvasCorner</Navbar.Brand>
        </NavLink>
        {currentUser && addPostIcon}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink to='/' exact className={styles.NavLink}
              activeClassName={styles.Active}>
              <i className="fa-solid fa-house"></i>Home
            </NavLink>
            {/* will display correct icons weather user is logged in or out */}
            {currentUser ? loggedInIcons : loggedOutIcons}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar

