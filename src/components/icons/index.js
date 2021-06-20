import React from 'react'
import Github from './github'
import LinkedIn from './linkedin'
import Person from './person'
import Moon from './moon'
import Sun from './sun'
import PropTypes from 'prop-types'

const Icon = props => {
  switch (props.name.toLowerCase()) {
    case 'github':
      return <Github {...props} />
    case 'linkedin':
      return <LinkedIn {...props} />
    case 'person':
      return <Person {...props} />
    case 'moon':
      return <Moon {...props} />
    case 'sun':
      return <Sun {...props} />
  }
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Icon
