import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { motion, useAnimation } from 'framer-motion'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { useOnScreen } from '../../hooks'

const About = ({ frontmatter, body }) => {
  const image = getImage(frontmatter.image)

  const titleControls = useAnimation()
  const textControls = useAnimation()
  const imageControls = useAnimation()

  const titleReference = useRef()
  const textReference = useRef()
  const imageReference = useRef()

  const titleOnScreen = useOnScreen(titleReference)
  const textOnScreen = useOnScreen(textReference, 0.75)
  const imageOnScreen = useOnScreen(imageReference, 0.75)

  useEffect(() => {
    if (titleOnScreen) {
      titleControls.start({ opacity: 1, y: 0 })
    }

    if (textOnScreen) {
      textControls.start({ opacity: 1, y: 0 })
    }

    if (imageOnScreen) {
      imageControls.start({ opacity: 1, x: 0 })
    }
  }, [
    titleOnScreen,
    textOnScreen,
    imageOnScreen,
    titleControls,
    textControls,
    imageControls,
  ])

  return (
    <section id="about" className="flex flex-col">
      <div className="container flex flex-col flex-grow">
        <motion.p
          ref={titleReference}
          initial={{ opacity: 0, y: 20 }}
          animate={titleControls}
          className="flex items-center mt-4 mb-4 md:mb-16 text-4xl font-bold whitespace-no-wrap heading md:text-5xl dark:text-green-400"
        >
          {frontmatter.title}
        </motion.p>
        <div className="flex flex-col items-center flex-grow md:flex-row">
          <motion.div
            ref={textReference}
            initial={{ opacity: 0, y: 20 }}
            animate={textControls}
            className="text-gray-700 dark:text-gray-300 text-center md:text-left text-base md:text-xl"
          >
            <MDXRenderer>{body}</MDXRenderer>
          </motion.div>
          <motion.div
            ref={imageReference}
            initial={{ opacity: 0, x: 20 }}
            animate={imageControls}
            className="flex items-center justify-center flex-grow w-full xl:ml-24"
          >
            <GatsbyImage
              className="w-1/2 h-auto mx-8 my-4 mb-8 rounded-full shadow-md sm:mx-16 md:w-72 md:h-72 md:mb-0"
              image={image}
              alt="Me"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

About.propTypes = {
  frontmatter: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.any.isRequired,
  }).isRequired,
  body: PropTypes.string.isRequired,
}

export default About
