import React from 'react'
import Icon from '../icons'
import PropTypes from 'prop-types'

const Skills = ({ content }) => {
  const { frontmatter, exports } = content[0].node
  const { skills } = exports

  return (
    <section id="skills" className="flex flex-col h-view">
      <div className="container flex flex-col flex-grow">
        <div className="flex flex-col items-center flex-grow lg:flex-row">
          <p className="flex items-center mt-4 mb-8 text-2xl font-bold whitespace-no-wrap heading md:text-3xl dark:text-green-400">
            {frontmatter.title}
          </p>
        </div>
        <div className="flex flex-row">
          {skills.map(({ name, icon }, index) => {
            return (
              <div
                className="flex flex-col items-center mr-2"
                key={`skills-${index}`}
              >
                <Icon className="w-8 h-8" name={icon} />
                <p>{name}</p>
              </div>
            )
          })}
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
