import React, { Component } from 'react'
import styles from './blog.module.css'
import Layout from '../components/layout'
class Game extends Component {
  render () {
    return (
      <Layout>
        <div className={styles.hero}>Game</div>
        This is the game page
      </Layout>
    )
  }
}

export default Game