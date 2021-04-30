const React = require('react')
const Uglify = require('uglify-js')

function initTheme () {
  function setTheme (theme) {
    switch (theme) {
      case 'dark':
        document.documentElement.className = 'dark'
        break
      default:
        document.documentElement.className = ''
    }

    window.__theme = theme
  }

  window.__setPreferredTheme = function (theme) {
    setTheme(theme)

    try {
      localStorage.setItem('theme', theme)
    } catch (e) {}
  }

  let theme
  try {
    theme = localStorage.getItem('theme')
  } catch (e) {}

  window.__themeListeners = []
  const darkQuery = window.matchMedia('(prefers-color-scheme: dark)')

  setTheme(theme || (darkQuery.matches ? 'dark' : 'light'))
}

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      key={0}
      dangerouslySetInnerHTML={{
        __html: Uglify.minify(`(${String(initTheme)})()`).code
      }}
    />
  ])
}
