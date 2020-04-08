import React from 'react'
import { Nav, Navbar, Container} from 'react-bootstrap'
import './footer.css'

function Footer (){
    return (
        <Navbar bg="dark" variant="dark" expand="md">
            <Container>
            <p className="groupName"> © 2020 Copyright: 925 Product. All rights reserved</p>
            </Container>
        </Navbar>
    )
}

export default Footer