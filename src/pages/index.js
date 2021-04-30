import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import Seo from '../components/seo'

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="mt-16">
      <h1 className="text-4xl font-bold mb-8">Welcome!</h1>
      <h2 className="text-lg mb-32">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci deserunt dolorum, ducimus laudantium maiores placeat quae reiciendis rerum voluptate? Atque enim error, fugit molestiae porro quia quo! Eaque, ut!</h2>
      <div className="flex justify-items-center justify-center">
        <StaticImage
          className="shadow-lg"
          src="../images/gatsby-astronaut.png"
          width={300}
          quality={95}
          formats={['AUTO', 'WEBP', 'AVIF']}
          alt="A Gatsby astronaut"
        />
      </div>
    </div>
  </Layout>
)

export default IndexPage
