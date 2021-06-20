const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Matthew Jarman',
    description: 'My portfolio site!',
    author: '@mattjarman',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-robots-txt',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-gatsby-cloud',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: path.join(__dirname, 'content'),
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1000,
              quality: 80,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Matthew Jarman',
        short_name: 'Matt',
        start_url: '/',
        background_color: '#000000',
        theme_color: '#091a28',
        display: 'standalone',
        icon: 'src/images/icon.svg',
      },
    },
  ],
}
