import React from 'react'
import { Link } from 'gatsby'
// import styles from './navigation.module.css'
// import logo from '../image/logo.svg'
import github from '../image/githubLogo.svg'
import { Nav, Navbar, Container } from 'react-bootstrap'

let githubLink = "https://github.com/925Production/925-home-page"

export default () => (
  <Navbar bg="dark" variant="dark" expand="md" sticky="top">
    <Container>
      <Navbar.Brand href="/">
        <span style={{fontSize:25}}>
        <span style={{color:"red"}}>925</span> {' '}
        Production
        </span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/game">GAME</Nav.Link>
          <Nav.Link href="/blog">BLOG</Nav.Link>
          <Nav.Link href="/member">MEMBERS</Nav.Link>
          <Nav.Link href="https://drive.google.com/open?id=1WO_hvfCnt8lutvsPOt6VY_XzfGqTm0Wl" target="_blank">DOCUMENT</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href={githubLink}>
            <img
              src={github}
              alt="github logo"
              width="20"
              height="20"
            />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>

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
