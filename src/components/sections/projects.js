import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { motion } from 'framer-motion'
import { useOnScreen } from '../../hooks'
import { InView } from 'react-intersection-observer'
import Icon from '../icons'

const Projects = ({ content }) => {
  const details = content[0].node
  const projects = content.slice(1, content.length)
  const sortedProjects = projects.sort(
    (a, b) => a.node.frontmatter.position > b.node.frontmatter.position
  )

  const titleReference = useRef()
  const buttonReference = useRef()

  const titleOnScreen = useOnScreen(titleReference, 0.75)
  const buttonOnScreen = useOnScreen(buttonReference, 0.75)

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const projectVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const buttonVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  return (
    <section id="projects" className="flex flex-col mt-16 md:mt-32">
      <div className="container flex flex-col">
        <motion.div
          ref={titleReference}
          variants={titleVariants}
          animate={titleOnScreen ? 'visible' : 'hidden'}
          className="flex mt-4 text-4xl text-gray-700 font-bold whitespace-no-wrap heading md:text-5xl dark:text-green-400 mb-4 md:mb-16"
        >
          {details.frontmatter.title}
        </motion.div>
        <div className="flex flex-col space-y-8 md:space-y-16 xl:space-y-32">
          {sortedProjects.map((project, index) => {
            const { body, frontmatter } = project.node
            const image = getImage(frontmatter.screenshot)
            return (
              <InView key={index} threshold={0.5} triggerOnce={true}>
                {({ inView, ref }) => (
                  <motion.div
                    ref={ref}
                    className={`w-full flex flex-col justify-center md:space-x-16 bg-white shadow-lg md:shadow-none dark:bg-gray-800 md:dark:bg-transparent md:bg-transparent rounded-md ${
                      index % 2 !== 0
                        ? 'md:flex-row-reverse md:space-x-reverse'
                        : 'md:flex-row'
                    }`}
                    position={index + 1}
                    variants={projectVariants}
                    animate={inView ? 'visible' : 'hidden'}
                  >
                    <div className="flex items-center justify-center md:w-1/2">
                      <GatsbyImage
                        className="rounded-t-md md:rounded-lg"
                        alt={frontmatter.title}
                        image={image}
                      />
                    </div>
                    <div className="content flex flex-col md:w-1/2 p-4 md:p-0">
                      <div className="flex-grow">
                        <p className="uppercase tracking-widest text-sm text-gray-500 dark:text-gray-300">
                          {frontmatter.category}
                        </p>
                        <p className="title text-3xl text-green-500 dark:text-green-400 tracking-wider font-bold mb-4">
                          {frontmatter.title} {frontmatter.emoji}
                        </p>
                        <div className="text-xs md:text-base lg:text-base tracking-wide">
                          <MDXRenderer>{body}</MDXRenderer>
                        </div>
                      </div>
                      <div className={`flex mt-4`}>
                        <div className="-m-1 tags flex-wrap flex-grow flex items-center">
                          {frontmatter.tags.map((tag, index) => {
                            return (
                              <span
                                className="m-1 text-xs bg-gray-100 dark:bg-rich-black md:dark:bg-gray-800 px-3 py-1 rounded-sm rounded-full tracking-wider"
                                key={`${frontmatter.id}-${index}`}
                              >
                                {tag}
                              </span>
                            )
                          })}
                        </div>
                        <div className="links flex flex-row space-x-2 ml-1">
                          {frontmatter.external && (
                            <a
                              className="text-green-500 dark:text-green-400 hover:text-green-600 dark:hover:text-green-500"
                              target="_blank"
                              rel="noreferrer"
                              href={frontmatter.external}
                            >
                              <Icon
                                className="w-6 h-6 fill-current"
                                name="external"
                              />
                            </a>
                          )}
                          <a
                            className="text-green-500 dark:text-green-400 hover:text-green-600 dark:hover:text-green-500"
                            target="_blank"
                            rel="noreferrer"
                            href={frontmatter.github}
                          >
                            <Icon
                              className="w-6 h-6 fill-current"
                              name="github"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </InView>
            )
          })}
          <div className="flex justify-center">
            <motion.a
              ref={buttonReference}
              variants={buttonVariants}
              animate={buttonOnScreen ? 'visible' : 'hidden'}
              className="w-64 h-16 rounded-xl border-2 border-green-400 dark:bg-gray-800 flex items-center justify-center transition duration-100 ease-in-out transform hover:-translate-y-1 hover:scale-105"
              target="_blank"
              rel="noreferrer"
              href={details.frontmatter.buttonUrl}
            >
              <p className=" font-bold text-xl text-green-500 dark:text-green-400 tracking-wide">
                {details.frontmatter.buttonText}
              </p>
            </motion.a>
          </div>
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
