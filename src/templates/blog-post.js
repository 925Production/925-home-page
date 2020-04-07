import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import { Container } from 'react-bootstrap'
import Layout from '../components/layout'

import heroStyles from '../components/hero.module.css'

import GitalkComponent from 'gitalk/dist/gitalk-component'
import 'gitalk/dist/gitalk.css'

const isBrowser = typeof window !== 'undefined'
const Gitalk = isBrowser ? require('gitalk') : undefined

class BlogPostTemplate extends React.Component {

  componentDidMount () {
    const post = get(this.props, 'data.contentfulBlogPost')
    const gitalkInstance = new Gitalk({
      clientID: '0708b63cb01d8f2ba35a',
      clientSecret: 'd7a27d56bd84ac9a18e6bb0c6efebf44c6e6d9b2',
      repo: '925-home-page',
      owner: '925Production',
      admin: ['luxiaodou', 'Icejewel0319'],
      id: post.slug,      // Ensure uniqueness and length less than 50
      distractionFreeMode: false,  // Facebook-like distraction free mode
    })
    gitalkInstance.render('gitalk-container')
  }

  render () {
    const post = get(this.props, 'data.contentfulBlogPost')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={`${post.title} | ${siteTitle}`}/>
          <div className={heroStyles.hero}>
            <Img
              className={heroStyles.heroImage}
              alt={post.title}
              fluid={post.heroImage.fluid}
            />
          </div>
          <Container className="wrapper">
            <h1 className="section-headline">{post.title}</h1>
            <p
              style={{
                display: 'block',
              }}
            >
              {post.publishDate}
            </p>
            <div
              dangerouslySetInnerHTML={{
                __html: post.body.childMarkdownRemark.html,
              }}
            />

            <div id="gitalk-container"/>
          </Container>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      slug
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
