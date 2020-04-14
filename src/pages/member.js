import React, { Component } from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { Image, Col, Row, Container, Card, Button } from 'react-bootstrap'
import './member.css'
import Footer from '../components/footer'
import memImage from '../image/member.jpg'
import githubImg from '../image/githubLogo_blk.png'
import lkImg from '../image/lkLogo.png'

class Member extends Component {
  render () {

    const members = get(this, 'props.data.allContentfulMember.edges')
    console.log(members)

    return (
      <Layout>
        <Container>
          <Row className="member_row">
            <Col>
              <Card>
                <Image src={memImage} fluid/>
                <Card.Body>
                  <Card.Title>Chaochun Ma</Card.Title>
                  <a href="https://github.com/mcc12357">
                    <Image src={githubImg} className="icon"></Image>
                  </a>
                  <a href="https://github.com/mcc12357">
                    <Image src={lkImg} className="icon"></Image>
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card >
                <Image src={memImage} fluid/>
                <Card.Body>
                  <Card.Title>Kai Pang</Card.Title>
                  <a href="https://github.com/kaipang1992">
                    <Image src={githubImg} className="icon"></Image>
                  </a>
                  <a href="https://github.com/mcc12357">
                    <Image src={lkImg} className="icon"></Image>
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card >
                <Image src={memImage} fluid/>
                <Card.Body>
                  <Card.Title>Haoqian Song</Card.Title>
                  <a href="https://github.com/haoqians">
                    <Image src={githubImg} className="icon"></Image>
                  </a>
                  <a href="https://github.com/mcc12357">
                    <Image src={lkImg} className="icon"></Image>
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card >
                <Image src={memImage} fluid/>
                <Card.Body>
                  <Card.Title>Siyuan Lin</Card.Title>
                  <a href="https://github.com/Icejewel0319">
                    <Image src={githubImg} className="icon"></Image>
                  </a>
                  <a href="https://github.com/mcc12357">
                    <Image src={lkImg} className="icon"></Image>
                  </a>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="justify-content-md-center member_row">
            <Col xs={3}>
              <Card >
                <Image src={memImage} fluid/>
                <Card.Body>
                  <Card.Title>Song Lu</Card.Title>
                  <a href="https://github.com/luxiaodou">
                    <Image src={githubImg} className="icon"></Image>
                  </a>
                  <a href="https://github.com/mcc12357">
                    <Image src={lkImg} className="icon"></Image>
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={3}>
              <Card >
                <Image src={memImage} fluid/>
                <Card.Body>
                  <Card.Title>Wei Zhou</Card.Title>
                  <a href="https://github.com/zhouweieieieiei">
                    <Image src={githubImg} className="icon"></Image>
                  </a>
                  <a href="https://github.com/mcc12357">
                    <Image src={lkImg} className="icon"></Image>
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={3}>
              <Card >
                <Image src={memImage} fluid/>
                <Card.Body>
                  <Card.Title>Weizhuo Zhang</Card.Title>
                  <a href="https://github.com/weizhuoz">
                    <Image src={githubImg} className="icon"></Image>
                  </a>
                  <a href="https://github.com/mcc12357">
                    <Image src={lkImg} className="icon"></Image>
                  </a>
                </Card.Body>
              </Card>
            </Col>
          </Row>
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
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
                ...GatsbyContentfulFluid
              }
          }
        }
      }
    }
  }
`
