import React from 'react'
import { Container } from 'react-bootstrap'
import './footer.css'

function Footer (){
    return (
        <Container >
        <p className="groupName"> 
        Powerd by 
            <a href="https://www.gatsbyjs.org/"> Gatsby.js</a> and 
            <a href="https://reactjs.org/"> React</a> | Host by 
            <a href="https://www.netlify.com/"> Netlify</a>
        <br/>
        © 2020 Copyright: 925 Product. All rights reserved</p>
        </Container>
    )
}

export default Footer