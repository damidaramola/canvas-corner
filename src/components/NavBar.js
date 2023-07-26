import React from 'react'
import { Navbar, Container, Nav } from "react-bootstrap";
import styles from "../styles/NavBar.module.css";
import { NavLink } from 'react-router-dom'
import { useCurrentUser , useSetCurrentUser, } from '../contexts/CurrentUserContext';
import Avatar from './Avatar';
import axios from 'axios';
import useClickOutsideToggle from '../hooks/useClickOutsideToggle';
import { removeTokenTimestamp } from '../utils/utils';

const NavBar = () => {

  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  const {expanded, setExpanded, ref} = useClickOutsideToggle();

  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
      removeTokenTimestamp()
    } catch (err) {
      console.log(err);
    }
  };

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

    <NavLink to='/bookmarks' className={styles.NavLink}
      activeClassName={styles.Active} >
      <i className="fa-solid fa-bookmark"></i>bookmarked
    </NavLink>

    <NavLink to='/' className={styles.NavLink}
      onClick={handleSignOut}
    >
      <i className="fa-solid fa-sign-out-alt"></i>Sign out
    </NavLink>

    <NavLink
      className={styles.NavLink}
      to={`/profiles/${currentUser?.profile_id}`}
    >
      <Avatar src={currentUser?.profile_image} text='Profile' height={40}/> 
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
    <Navbar expanded={expanded} className={styles.NavBar} expand="md" fixed="top">
      <Container>
        <NavLink to='/'>
          <Navbar.Brand >CanvasCorner</Navbar.Brand>
        </NavLink>
        {currentUser && addPostIcon}
        <Navbar.Toggle
         ref={ref}
         onClick={() => setExpanded(!expanded)}  aria-controls="basic-navbar-nav" />
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

