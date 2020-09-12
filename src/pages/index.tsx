import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from 'components/Layout'

const Index: React.FC = () => {
  return (
    <Layout>
      <Helmet>
        <title>모두의 재활용</title>
      </Helmet>
      <div
        css={{
          display: 'flex',
          flex: 1,
          flexGrow: 1,
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        재활용합시다!
      </div>
    </Layout>
  )
}

export default Index
