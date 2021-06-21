import React, { useEffect, useRef } from 'react'
import Icon from '../icons'
import PropTypes from 'prop-types'
import { useOnScreen } from '../../hooks'
import { motion, useAnimation } from 'framer-motion'

const Skills = ({ content }) => {
  const { frontmatter, exports } = content[0].node
  const { skills } = exports

  const ref = useRef()
  const onScreen = useOnScreen(ref, 0.5)

  const iconControls = useAnimation()
  const barControls = useAnimation()
  const barBackgroundControls = useAnimation()

  const sortedSkills = skills.sort((a, b) => a.proficiency < b.proficiency)
  const delay = 0.5 / sortedSkills.length
  const delay2 = 0.1 / sortedSkills.length

  useEffect(() => {
    if (onScreen) {
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
  }, [onScreen, barControls, iconControls, barBackgroundControls])

  return (
    <section id="skills" className="flex flex-col mt-32 md:h-view">
      <div className="container flex flex-col h-full">
        <p className="flex mt-4 text-2xl font-bold whitespace-no-wrap heading md:text-4xl dark:text-green-400 mb-4 md:mb-0 md:h-1/6">
          {frontmatter.title}
        </p>
        <div className="flex items-center justify-center md:h-5/6">
          <div className="flex flex-col flex-wrap w-full md:h-full">
            {sortedSkills.map(({ name, icon, proficiency }, index) => {
              return (
                <div
                  className="flex flex-row items-center justify-center mb-2 xl:mb-4"
                  key={`skills-${index}`}
                >
                  <motion.div
                    custom={index}
                    ref={ref}
                    initial={{ opacity: 0, x: 20 }}
                    animate={iconControls}
                    className="bg-gray-100 dark:bg-gray-800 shadow-md p-2 rounded-md min-w-12 w-12 h-12 xl:min-w-16 xl:w-16 xl:h-16 flex items-center justify-center mr-4"
                  >
                    <Icon className="w-6 h-6 xl:w-8 xl:h-8" name={icon} />
                  </motion.div>
                  <motion.div
                    custom={index}
                    ref={ref}
                    initial={{ opacity: 0, x: 20 }}
                    animate={barBackgroundControls}
                    className="w-full bg-gray-100 dark:bg-gray-700 mr-4 shadow-lg border-2 border-green-400 rounded-sm"
                  >
                    <div style={{ width: `${proficiency}%` }}>
                      <motion.div
                        custom={index}
                        ref={ref}
                        initial={{ opacity: 0, width: 0 }}
                        animate={barControls}
                        className="h-5 md:h-6 xl:h-8 shadow-none flex flex-col font-bold px-2 text-gray-800 justify-center bg-green-400 text-xs md:text-sm"
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
