import React from 'react'
import { Container, Image, Row, Col } from 'react-bootstrap'
import './footer.css'
import uscGameLogo from '../image/USC-Games.png'
import logo from '../image/team_logo.svg'

function Footer (){
    return (
        <div className="footers">
        <Container >
        <Row className="justify-content-md-center">
            <Col xs={2}>
                <Image src={uscGameLogo} className="uscLogo"></Image>
            </Col>
        </Row>
        <p className="groupName"> 
        Powerd by 
            <a href="https://www.gatsbyjs.org/"> Gatsby.js</a> and 
            <a href="https://reactjs.org/"> React</a> | Host by 
            <a href="https://www.netlify.com/"> Netlify</a>
        <br/>
        © 2020 Copyright: 925 Product. All rights reserved</p>
        </Container>
        </div>
    )
}

export default Footer