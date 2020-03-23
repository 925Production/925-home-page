import React from 'react'
import Img from 'gatsby-image'
import { Carousel } from 'react-bootstrap'
import styles from './hero.module.css'

export default ({ data }) => (
  <div className={styles.hero}>
  <Carousel>
  <Carousel.Item>
    <Img
      className={styles.heroImage}
      alt={data.name}
      fluid={data.heroImage.fluid}
    />
    <Carousel.Caption>
      <div className={styles.heroDetails}>
        <h3 className={styles.heroHeadline}>{data.name}</h3>
        <p className={styles.heroTitle}>{data.title}</p>
        <p>{data.shortBio.shortBio}</p>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <Img
        className={styles.heroImage}
        alt={data.name}
        fluid={data.heroImage.fluid}
      />
    <Carousel.Caption>
      <div className={styles.heroDetails}>
        <h3 className={styles.heroHeadline}>{data.name}</h3>
        <p className={styles.heroTitle}>{data.title}</p>
        <p>{data.shortBio.shortBio}</p>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <Img
      className={styles.heroImage}
      alt={data.name}
      fluid={data.heroImage.fluid}
    />
    <Carousel.Caption>
      <div className={styles.heroDetails}>
        <h3 className={styles.heroHeadline}>{data.name}</h3>
        <p className={styles.heroTitle}>{data.title}</p>
        <p>{data.shortBio.shortBio}</p>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>

  // <div className={styles.hero}>
  //   <Img
  //     className={styles.heroImage}
  //     alt={data.name}
  //     fluid={data.heroImage.fluid}
  //   />
  //   <div className={styles.heroDetails}>
  //     <h3 className={styles.heroHeadline}>{data.name}</h3>
  //     <p className={styles.heroTitle}>{data.title}</p>
  //     <p>{data.shortBio.shortBio}</p>
  //   </div>
  // </div>
)
