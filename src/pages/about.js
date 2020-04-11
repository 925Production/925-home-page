import React, { Component } from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import styles from './blog.module.css'
import { Image } from 'react-bootstrap'
import aboutImage from '../image/about.jpg'
import Footer from '../components/footer'
import ArticleFull from '../components/article-full'

class About extends Component {
  render () {
    return (
      <Layout>
        <div className={styles.hero}>
          <Image src={aboutImage} fluid/>
        </div>
        <ArticleFull></ArticleFull>
        <Footer></Footer>
      </Layout>
    )
  }
}

export default About
