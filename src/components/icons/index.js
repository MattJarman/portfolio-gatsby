import React from 'react'
import PropTypes from 'prop-types'

import Github from './github'
import LinkedIn from './linkedin'
import Person from './person'
import Chart from './chart'
import Moon from './moon'
import Sun from './sun'

import Javascript from './javascript'
import Docker from './docker'
import Git from './git'
import Laravel from './laravel'
import MongoDB from './mongodb'
import MySQL from './mysql'
import Node from './node'
import PHP from './php'
import ReactJS from './react'

const Icon = props => {
  switch (props.name.toLowerCase()) {
    case 'github':
      return <Github {...props} />
    case 'linkedin':
      return <LinkedIn {...props} />
    case 'person':
      return <Person {...props} />
    case 'chart':
      return <Chart {...props} />
    case 'javascript':
      return <Javascript {...props} />
    case 'docker':
      return <Docker {...props} />
    case 'git':
      return <Git {...props} />
    case 'laravel':
      return <Laravel {...props} />
    case 'mongodb':
      return <MongoDB {...props} />
    case 'mysql':
      return <MySQL {...props} />
    case 'node':
      return <Node {...props} />
    case 'php':
      return <PHP {...props} />
    case 'react':
      return <ReactJS {...props} />
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
