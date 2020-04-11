import React, { Component } from 'react'
import { Image } from 'react-bootstrap'
import gameImage from '../image/game.jpg'
import styles from './blog.module.css'
import Layout from '../components/layout'
import ArticleFull from '../components/article-full'
import Footer from '../components/footer'


class Game extends Component {
  render () {
    return (
      <Layout>
        <div className={styles.hero}>
          <Image src={gameImage} fluid/>
        </div>
        <ArticleFull></ArticleFull>
        <Footer></Footer>
      </Layout>
    )
  }
}

export default Game