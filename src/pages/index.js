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

  const heroNode = data.hero.edges[0].node
  const aboutNode = data.about.edges[0].node
  const skillsFrontmatter = data.skillsFrontmatter.edges[0].node.frontmatter
  const projectsFrontmatter = data.projects.edges[0].node.frontmatter
  const projects = data.projects.edges.slice(1, data.projects.edges.length)

  return (
    <Layout siteTitle={seoTitle}>
      <Seo title={seoTitle} />
      <Hero frontmatter={heroNode.frontmatter} body={heroNode.body} />
      <About frontmatter={aboutNode.frontmatter} body={aboutNode.body} />
      <Skills frontmatter={skillsFrontmatter} skills={data.skills.edges} />
      <Projects frontmatter={projectsFrontmatter} projects={projects} />
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
    skillsFrontmatter: allMdx(
      filter: { fileAbsolutePath: { regex: "/index/skills/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
          }
        }
      }
    }
    skills: allSkillsJson(sort: { fields: [proficiency], order: DESC }) {
      edges {
        node {
          name
          icon
          proficiency
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
