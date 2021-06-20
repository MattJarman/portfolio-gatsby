import React, { useState } from 'react'
import Icon from './icons'

const ThemeSwitcher = props => {
  if (typeof window === 'undefined') {
    return null
  }

  const [isDark, setDarkMode] = useState(window.__theme === 'dark')

  function toggleDarkMode() {
    setDarkMode(!isDark)
    window.__setPreferredTheme(!isDark ? 'dark' : 'light')
  }

  return (
    <span {...props} onClick={toggleDarkMode}>
      {isDark ? <Icon name="sun" /> : <Icon name="moon" />}
    </span>
  )
}

export default ThemeSwitcher
