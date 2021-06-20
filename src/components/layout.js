/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Header from './header'

if (typeof window !== 'undefined') {
  require('smooth-scroll')('a[href*="#"]', {
    speed: 300,
  })
}

const Layout = ({ children }) => {
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
