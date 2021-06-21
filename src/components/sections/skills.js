import React from 'react'
import Icon from '../icons'
import PropTypes from 'prop-types'

const Skills = ({ content }) => {
  const { frontmatter, exports } = content[0].node
  const { skills } = exports

  const sortedSkills = skills.sort((a, b) => a.proficiency < b.proficiency)

  return (
    <section id="skills" className="flex flex-col mt-32 md:h-view">
      <div className="container flex flex-col h-full">
        <p className="flex mt-4 mb-8 text-2xl font-bold whitespace-no-wrap heading md:text-4xl dark:text-green-400 md:h-1/6">
          {frontmatter.title}
        </p>
        <div className="flex items-center justify-center md:h-5/6">
          <div className="flex flex-col flex-wrap w-full md:h-full">
            {sortedSkills.map(({ name, icon, proficiency }, index) => {
              return (
                <div
                  className="flex flex-row items-center justify-center mb-2 xl:mb-6"
                  key={`skills-${index}`}
                >
                  <div className="bg-gray-100 dark:bg-gray-800 shadow-md p-2 rounded-md min-w-12 w-12 h-12 xl:min-w-16 xl:w-16 xl:h-16 flex items-center justify-center mr-4">
                    <Icon className="w-6 h-6 xl:w-8 xl:h-8" name={icon} />
                  </div>
                  <div className="w-full bg-gray-100 dark:bg-gray-700 mr-4 shadow-lg border-2 border-green-400 rounded-md">
                    <div
                      style={{ width: `${proficiency}%` }}
                      className="h-5 md:h-8 shadow-none flex flex-col font-bold px-2 text-gray-800 justify-center bg-green-400 text-xs md:text-sm"
                    >
                      {name}
                    </div>
                  </div>
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
        exports: PropTypes.string.isRequired,
        frontmatter: PropTypes.object.isRequired,
      }).isRequired,
    }).isRequired
  ).isRequired,
}

export default Skills
