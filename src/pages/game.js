import React, { Component } from 'react'
import { Image } from 'react-bootstrap'
import gameImage from '../image/game.jpg'
import styles from './blog.module.css'
import Layout from '../components/layout'
import Footer from '../components/footer'
import Video from '../components/video'
import Trailer from '../components/trailer'
import ArticleBlock from '../components/article-block'
import county_bg from '../image/county.jpg'
import hero_bg from '../image/backpic.jpg'

class Game extends Component {
  render () {
    return (
      <Layout>
        <ArticleBlock
          title="Story"
          article="
          One day a mysterious witcher come to the town. His powerful magic can heal the sick 
          people and even extend the people's life. 'I bring you a gift: the blessing from 'The 
          Lord of The Abyss'. Everyone will be alive forever, until the end of time' The witcher 
          promised. 'You just need to follow the way shown by the lord.' turn to believe 'The 
          Lord of The Abyss' to seek for an eternal life. The town built a temple according to 
          the book brought by the witcher, wear the amulet and pray to the 'The Lord of The Abyss'. 
          However, The eternal life means no future. It is a loop within a time period, from the current 
          time to a moment in the further—'the end of time' mentioned by the witcher. The followers 
          are trapped in the time loop forever. Even in this case, the period of loop is becoming 
          shorter and shorter. From repeating one year to repeating one month and even shorter. Eventually, 
          they will be fixed in a single moment, with no past and no future. Everything is 
          hidden by 'instruction of lord', and few of the followers realize this fact...
          "
          background={county_bg}
        >
        </ArticleBlock>
        <ArticleBlock
          title="Hero"
          article="
          Corinth is a magician and he was also one of the followers. One day, an accident in his study 
          of a magic book make him out of the control of 'the lord of the abyss'. He quickly realized the 
          fact that he is now stuck in a single day, and the reason for all of these is the 'the lord of the abyss'
          and the amulet was used to collect their time in the future. He determined to seek for the truth within 
          the temple and get his time in the future back.
          "
          background={hero_bg}
        >
        </ArticleBlock>
        {/* <ArticleBlock
          title="Weapons"
        >
        </ArticleBlock> */}
        <Trailer></Trailer>
        <Video></Video>
        <Footer></Footer>
      </Layout>
    )
  }
}

export default Game