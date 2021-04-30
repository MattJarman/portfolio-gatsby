const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Matthew Jarman',
    description: 'My portfolio site!',
    author: '@mattjarman'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, '/src/images')
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Matthew Jarman',
        short_name: 'Matt',
        start_url: '/',
        background_color: '#000000',
        theme_color: '#091a28',
        display: 'standalone',
        icon: 'src/images/icon.svg'
      }
    },
    'gatsby-plugin-gatsby-cloud'
  ]
}
