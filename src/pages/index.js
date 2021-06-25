import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/seo'
import Hero from '../components/sections/hero'
import About from '../components/sections/about'
import Skills from '../components/sections/skills'
import Projects from '../components/sections/projects'

const IndexPage = ({ data }) => {
  const { frontmatter } = data.index.edges[0].node
  const { seoTitle } = frontmatter

  return (
    <Layout siteTitle={seoTitle}>
      <Seo title={seoTitle} />
      <Hero content={data.hero.edges} />
      <About content={data.about.edges} />
      <Skills content={data.skills.edges} />
      <Projects content={data.projects.edges} />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export const pageQuery = graphql`
  {
    index: allMdx(filter: { fileAbsolutePath: { regex: "/index/index/" } }) {
      edges {
        node {
          frontmatter {
            seoTitle
          }
        }
      }
    }
    hero: allMdx(filter: { fileAbsolutePath: { regex: "/index/hero/" } }) {
      edges {
        node {
          body
          frontmatter {
            title
            subtitle
          }
        }
      }
    }
    about: allMdx(filter: { fileAbsolutePath: { regex: "/index/about/" } }) {
      edges {
        node {
          body
          frontmatter {
            title
            image {
              childImageSharp {
                gatsbyImageData(
                  width: 600
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    }
    skills: allMdx(filter: { fileAbsolutePath: { regex: "/index/skills/" } }) {
      edges {
        node {
          exports {
            skills {
              name
              icon
              proficiency
            }
          }
          frontmatter {
            title
          }
        }
      }
    }
    projects: allMdx(
      filter: { fileAbsolutePath: { regex: "/index/projects/" } }
      sort: { fields: [frontmatter___position], order: ASC }
    ) {
      edges {
        node {
          body
          frontmatter {
            id
            title
            category
            emoji
            external
            github
            screenshot {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
            tags
            position
            buttonUrl
            buttonText
          }
        }
      }
    }
  }
`

export default IndexPage
