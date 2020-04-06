import React from 'react'
import { Nav, Navbar, Container} from 'react-bootstrap'
import './footer.css'

function Footer (){
    return (
        <Navbar bg="dark" variant="dark" expand="md">
            <Container>
            <p className="groupName"> © 2020 Copyright: 925 Product</p>
            <Nav>
                <Nav.Link href="/blog/welcome-blog">ABOUT</Nav.Link>
                <Nav.Link href="/blog">BLOG</Nav.Link>
                <Nav.Link href="/game">GAME</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
    )
}

export default Footer