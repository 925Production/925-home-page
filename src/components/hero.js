import React from 'react'
import Img from 'gatsby-image'
import { Carousel } from 'react-bootstrap'
import styles from './hero.module.css'
import { Link } from 'gatsby'

function Hero ({data}) {
  const item = data ? data[0].node : undefined

  // console.log(item.heroImage.fluid)
  console.log(data)

  return (
    <div className={styles.hero}>
      <Carousel>
        {data.map((item) => {
          let content = item.node;
          return (
            <Carousel.Item>
              <Img
                className={styles.heroImage}
                alt={content.name}
                fluid={content.heroImage.fluid}
              />
              <Carousel.Caption>
                <div className={styles.heroDetails}>
                  <Link to="/blog/welcome-blog">
                    <h3 className={styles.heroHeadline}>{content.name}</h3>
                    <p className={styles.heroTitle}>{content.title}</p>
                    <p className={styles.heroShortBio}>{content.shortBio.shortBio}</p>
                  </Link>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          )
        })}
      </Carousel>
    </div>
  )
}
export default Hero

// export default ({ data }) => {
//   <div className={styles.hero}>
//     <Img
//       className={styles.heroImage}
//       alt={data.name}
//       fluid={data.heroImage.fluid}
//     />
//     <div className={styles.heroDetails}>
//       <h3 className={styles.heroHeadline}>{data.name}</h3>
//       <p className={styles.heroTitle}>{data.title}</p>
//       <p>{data.shortBio.shortBio}</p>
//     </div>
//   </div>
// }

