import React, { Component } from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import styles from './blog.module.css'

class About extends Component {
  render () {
    return (
      <Layout>
        <div className={styles.hero}>About</div>
        This is the about page
      </Layout>
    )
  }
}

export default About
