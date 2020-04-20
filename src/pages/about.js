import React, { Component } from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import styles from './about.module.css'
import { Image, Container } from 'react-bootstrap'
import aboutImage from '../image/about.jpg'
import Footer from '../components/footer'

class About extends Component {
  render () {
    return (
      <Layout>
        <div className={styles.test}>
          <Container>
            <h1>About us</h1>
            <p>We are 925 Production. We are all</p>
          </Container>
        </div>
        <Footer></Footer>
      </Layout>
    )
  }
}

export default About
