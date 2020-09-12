import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from 'components/Layout'

const Index: React.FC = () => {
  return (
    <Layout>
      <Helmet>
        <title>모두의 재활용</title>
      </Helmet>
      <h1>모두의 재활용</h1>
    </Layout>
  )
}

export default Index
