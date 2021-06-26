import * as React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <Seo title="Page not found" />
    <div className="mt-16 text-center">
      <p className="mb-16">I couldn&apos;t find that page...</p>
      <p className="text-green-400 text-6xl font-bold">¯\_(ツ)_/¯</p>
    </div>
  </Layout>
)

export default NotFoundPage
