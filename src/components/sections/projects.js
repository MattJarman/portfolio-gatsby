import React from 'react'
import PropTypes from 'prop-types'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const Projects = ({ content }) => {
  const details = content[0].node
  const projects = content.slice(1, content.length)
  const sortedProjects = projects.sort(
    (a, b) => a.node.frontmatter.position > b.node.frontmatter.position
  )

  return (
    <section id="projects" className="flex flex-col mt-16 md:mt-32">
      <div className="container flex flex-col">
        <p className="flex mt-4 text-4xl font-bold whitespace-no-wrap heading md:text-5xl dark:text-green-400 mb-4 md:mb-16">
          {details.frontmatter.title}
        </p>
        <div className="flex flex-col space-y-8 md:space-y-16">
          {sortedProjects.map((project, index) => {
            const { body, frontmatter } = project.node
            const image = getImage(frontmatter.screenshot)
            return (
              <div
                key={`project-${index}`}
                className={`w-full flex flex-col justify-center md:space-x-16 bg-gray-800 md:bg-transparent rounded-md ${
                  index % 2 !== 0
                    ? 'md:flex-row-reverse md:space-x-reverse'
                    : 'md:flex-row'
                }`}
              >
                <div className="flex items-center justify-center md:w-1/2">
                  <GatsbyImage
                    className="rounded-t-md md:rounded-lg shadow-lg"
                    alt={frontmatter.title}
                    image={image}
                  />
                </div>
                <div className="content md:w-1/2 p-4 md:p-0">
                  <p className="uppercase tracking-widest text-sm text-gray-300">
                    {frontmatter.category}
                  </p>
                  <p className="title text-3xl text-green-400 tracking-wider font-bold mb-4">
                    {frontmatter.title} {frontmatter.emoji}
                  </p>
                  <div className="text-xs md:text-sm lg:text-base tracking-wide">
                    <MDXRenderer>{body}</MDXRenderer>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

Projects.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        frontmatter: PropTypes.object.isRequired,
      }).isRequired,
    }).isRequired
  ).isRequired,
}

export default Projects
