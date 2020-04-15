import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { Image, Col, Row, Container, Card, CardColumns } from 'react-bootstrap'
import './member.css'
import Footer from '../components/footer'
import memImage from '../image/member.jpg'
import githubImg from '../image/githubLogo_blk.png'
import lkImg from '../image/lkLogo.png'

class Member extends Component {
  render () {

    const members = get(this, 'props.data.allContentfulMember.edges')
    console.log(members)
    const fst_line = members.map((member,i) => {
      while(i < 4){
        return (
          <Col>
          <Card className="member_row">
            <Img alt="" fluid={member.node.photo.fluid}/>
            <Card.Body>
              <Card.Title>{member.node.name}</Card.Title>
              <a href={member.node.github}>
                <Image src={githubImg} className="icon"></Image>
              </a>
              <a href={member.node.linkedin}>
                <Image src={lkImg} className="icon"></Image>
              </a>
            </Card.Body>
          </Card>
          </Col>
        )
      }
    })
    const scd_line = members.map((member,i) => {
      while(i >= 4){
        return (
          <Col xs={3}>
          <Card className="member_row">
            <Img alt="" fluid={member.node.photo.fluid}/>
            <Card.Body>
              <Card.Title>{member.node.name}</Card.Title>
              <a href={member.node.github}>
                <Image src={githubImg} className="icon"></Image>
              </a>
              <a href={member.node.linkedin}>
                <Image src={lkImg} className="icon"></Image>
              </a>
            </Card.Body>
          </Card>
          </Col>
        )
      }
    })

    return (
      <Layout>
        <Container>
          <Row>{fst_line}</Row>
          <Row className="justify-content-md-center">{scd_line}</Row>
        </Container>
        <Footer></Footer>
      </Layout>
    )
  }
}

export default Member

export const pageQuery = graphql`
  query MemberQuery {
    allContentfulMember(sort: {fields: name}) {
      edges {
        node {
          linkedin
          name
          github
          photo {
            fluid(maxHeight: 1000, resizingBehavior: SCALE) {
                ...GatsbyContentfulFluid
              }
          }
        }
      }
    }
  }
`
