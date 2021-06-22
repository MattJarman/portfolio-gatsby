import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { motion, useAnimation } from 'framer-motion'
import Icon from '../icons'
import { socialMedia } from '../../../config'

const Hero = ({ content }) => {
  const { frontmatter, body } = content[0].node

  const greetingControls = useAnimation()
  const socialControls = useAnimation()

  useEffect(() => {
    const pageLoadSequence = async () => {
      await greetingControls.start({
        opacity: 1,
        y: 0,
        transition: { delay: 0.4 },
      })
      await socialControls.start({
        opacity: 1,
        x: 0,
      })
    }

    pageLoadSequence()
  }, [greetingControls, socialControls])

  return (
    <section
      id="hero"
      className="flex flex-col pt-32 min-h-view-minus-nav sm:pt-64"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={greetingControls}
        className="container flex flex-col flex-grow h-full mx-auto mb-16"
      >
        <p className="mb-2 text-4xl font-bold sm:text-6xl dark:text-green-400">
          {frontmatter.title}
        </p>
        <p className="mb-2 text-2xl font-semibold text-gray-500 dark:text-gray-300 sm:text-4xl">
          {frontmatter.subtitle}
        </p>
        <div className="mb-12 text-base md:text-base text-gray-400">
          <MDXRenderer>{body}</MDXRenderer>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={socialControls}
          className="flex flex-row"
        >
          {socialMedia.map(({ name, icon, url }, index) => {
            return (
              <motion.a
                key={`social-media-${index}`}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href={url}
              >
                <Icon
                  className="cursor-pointer text-green-500 dark:text-green-400 hover:text-green-600 dark:hover:text-green-500 fill-current w-12 h-12 mr-2"
                  name={icon}
                />
              </motion.a>
            )
          })}
        </motion.div>
      </motion.div>
    </section>
  )
}

Hero.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        body: PropTypes.string.isRequired,
        frontmatter: PropTypes.object.isRequired,
      }).isRequired,
    }).isRequired
  ).isRequired,
}

export default Hero
