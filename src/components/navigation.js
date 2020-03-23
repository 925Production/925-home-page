import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'
import logo from '../image/logo.svg'

import { Nav, Navbar } from 'react-bootstrap'

export default () => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src={logo}
        width="30%"
        height="30%"
        className="d-inline-block align-top"
      />{' '}
      React Bootstrap
    </Navbar.Brand>
  </Navbar>
  // <nav role="navigation">
  //   <ul className={styles.navigation}>
  //     <li className={styles.navigationItem}>
  //       <Link to="/">Home</Link>
  //     </li>
  //     <li className={styles.navigationItem}>
  //       <Link to="/blog/">Blog</Link>
  //     </li>
  //   </ul>
  // </nav>
)
