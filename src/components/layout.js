import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { debounce } from 'lodash'

import Header from './header'
import Footer from './footer'
import { graphql, useStaticQuery } from 'gatsby'

if (typeof window !== 'undefined') {
  require('smooth-scroll')('a[href*="#"]', {
    speed: 300,
  })
}

const Layout = ({ children }) => {
  // This is to sort out jank with mobile browser heights
  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const resizeHandler = event => {
      const vh = event.target.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }

    window.addEventListener('resize', debounce(resizeHandler, 100), false)

    return () => {
      window.removeEventListener('resize', resizeHandler)
    }
  })

  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div className="transition-colors duration-300 dark:bg-rich-black dark:text-gray-200">
        <Header />
        <main className="container mx-auto px-4 lg:px-32 mb-auto">
          {children}
        </main>
        <Footer siteTitle={site.siteMetadata.title} />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
