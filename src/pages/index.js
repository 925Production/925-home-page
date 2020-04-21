import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { Container } from 'react-bootstrap'
import Hero from '../components/hero'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'
import Footer from '../components/footer'
import Video from '../components/video'

import 'bootstrap/dist/css/bootstrap.min.css'

class RootIndex extends React.Component {
  render () {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const [author] = get(this, 'props.data.allContentfulPerson.edges')
    const hero = get(this, 'props.data.allContentfulHero.edges')

    // console.log(posts)

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Video 
            intro="Seek the truth in the temple and find back the future"
            slogan=""
            button="DOWNLOAD"/>
          <Helmet title={siteTitle}>
          <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500&display=swap" rel="stylesheet"/>
          </Helmet>
          <Hero data={hero}/>
          <Container className="wrapper">
            <h2 className="section-headline">Recent articles</h2>
            <ul className="article-list">
              {posts.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <ArticlePreview article={node}/>
                  </li>
                )
              })}
            </ul>
          </Container>
        </div>
        <Footer></Footer>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid
            }
          }
          description {
            description
          }
        }
      }
    }
    allContentfulPerson(
      filter: { contentful_id: { } }
    ) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
    allContentfulHero(
      filter: { contentful_id: {} }
    ) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          link
          heroImage: image {
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
