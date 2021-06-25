import React, { useEffect, useRef } from 'react'
import Icon from '../icons'
import PropTypes from 'prop-types'
import { useOnScreen } from '../../hooks'
import { motion, useAnimation } from 'framer-motion'

const Skills = ({ content }) => {
  const { frontmatter, exports } = content[0].node
  const { skills } = exports

  const skillsReference = useRef()
  const titleReference = useRef()

  const titleOnScreen = useOnScreen(titleReference)
  const skillsOnScreen = useOnScreen(skillsReference, 0.5)

  const titleControls = useAnimation()
  const iconControls = useAnimation()
  const barControls = useAnimation()
  const barBackgroundControls = useAnimation()

  const sortedSkills = skills.sort((a, b) => a.proficiency < b.proficiency)
  const delay = 0.5 / sortedSkills.length

  useEffect(() => {
    if (titleOnScreen) {
      titleControls.start({ opacity: 1, y: 0 })
    }

    if (skillsOnScreen) {
      barControls.start(i => ({
        opacity: 1,
        width: '100%',
        transition: { delay: i * delay },
      }))

      iconControls.start(i => ({
        opacity: 1,
        x: 0,
        transition: { delay: i * delay },
      }))

      barBackgroundControls.start(i => ({
        opacity: 1,
        x: 0,
        transition: { delay: i * delay },
      }))
    }
  }, [
    titleOnScreen,
    skillsOnScreen,
    titleControls,
    barControls,
    iconControls,
    barBackgroundControls,
  ])

  return (
    <section id="skills" className="flex flex-col mt-16 md:mt-32">
      <div className="container flex flex-col h-full">
        <motion.p
          ref={titleReference}
          initial={{ opacity: 0, y: 20 }}
          animate={titleControls}
          className="flex mt-4 text-gray-700 text-4xl font-bold whitespace-no-wrap heading md:text-5xl dark:text-green-400 mb-4 md:mb-16"
        >
          {frontmatter.title}
        </motion.p>
        <div className="flex items-center justify-center">
          <div className="w-full grid gap-y-2 grid-cols-1 md:grid-cols-none md:grid-rows-6 md:grid-flow-col xl:gap-y-4">
            {sortedSkills.map(({ name, icon, proficiency }, index) => {
              return (
                <div
                  className="flex flex-row items-center justify-center"
                  key={`skills-${index}`}
                >
                  <motion.div
                    custom={index}
                    ref={skillsReference}
                    initial={{ opacity: 0, x: 20 }}
                    animate={iconControls}
                    className="border border-gray-200 dark:border-0 dark:border-transparent dark:bg-gray-800 shadow-md p-2 rounded-md min-w-12 w-12 h-12 xl:min-w-16 xl:w-16 xl:h-16 flex items-center justify-center mr-4"
                  >
                    <Icon className="w-6 h-6 xl:w-8 xl:h-8" name={icon} />
                  </motion.div>
                  <motion.div
                    custom={index}
                    ref={skillsReference}
                    initial={{ opacity: 0, x: 20 }}
                    animate={barBackgroundControls}
                    className="w-full bg-gray-100 dark:bg-gray-700 mr-4 shadow-lg border-2 border-green-400 rounded-sm"
                  >
                    <div style={{ width: `${proficiency}%` }}>
                      <motion.div
                        custom={index}
                        ref={skillsReference}
                        initial={{ opacity: 0, width: 0 }}
                        animate={barControls}
                        className="h-6 xl:h-8 shadow-none flex flex-col font-bold uppercase px-2 text-gray-800 justify-center bg-green-400 text-xs tracking-wider antialiased"
                      >
                        {name}
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

Skills.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        exports: PropTypes.object.isRequired,
        frontmatter: PropTypes.object.isRequired,
      }).isRequired,
    }).isRequired
  ).isRequired,
}

export default Skills
