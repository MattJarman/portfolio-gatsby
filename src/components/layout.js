/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { debounce } from 'lodash'
import { useStaticQuery, graphql } from 'gatsby'

import Header from './header'

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
      console.log('removing listener')
      window.removeEventListener('resize', resizeHandler)
    }
  })

  const data = useStaticQuery(graphql`
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
      <Header siteTitle={data.site.siteMetadata?.title || 'Title'} />
      <div className="transition-colors duration-300 dark:bg-rich-black dark:text-gray-200">
        <div className="flex flex-col justify-between container mx-auto px-8">
          <main className="mb-auto">{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with{' '}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
          </footer>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
