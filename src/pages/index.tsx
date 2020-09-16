import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from 'components/Layout'
import { useIntl } from 'gatsby-plugin-intl'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Index: React.FC = () => {
  const intl = useIntl()
  const imageData = useStaticQuery(graphql`
    query {
      allFile(filter: {relativeDirectory: {eq: "index"}}, sort: {order: ASC, fields: base}) {
        edges {
          node {
            base
            childImageSharp {
              fluid {
                aspectRatio
                base64
                sizes
                src
                srcSet
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Helmet>
        <title>
          {intl.formatMessage({ id: 'index.title' })}
        </title>
      </Helmet>
      <div
        css={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        <div
          css={{
            height: '400px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <h1>
            {intl.formatMessage({ id: 'index.modoo_easy_recycling' })}
          </h1>
          <h3
            css={{
              fontWeight: 'lighter',
              textAlign: 'center'
            }}
          >
            {intl.formatMessage({ id: 'index.introduce_01' })}
            <br />
            {intl.formatMessage({ id: 'index.introduce_02' })}
          </h3>
        </div>
        <hr
          css={{
            width: '100%',
            border: 'none',
            height: '1px',
            color: '#333',
            backgroundColor: '#dbdbdb'
          }}
        />
        <div
          css={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '50px 0'
          }}
        >
          <Img
            fluid={imageData.allFile.edges[0].node.childImageSharp.fluid}
            css={{
              width: '500px',
              height: '300px'
            }}
          />
          <span>
            {intl.formatMessage({ id: 'index.section_01' })}
          </span>
        </div>
        <hr
          css={{
            width: '100%',
            border: 'none',
            height: '1px',
            color: '#333',
            backgroundColor: '#dbdbdb'
          }}
        />
        <div
          css={{
            width: '100%',
            height: '400px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '50px 0'
          }}
        >
          <Img
            fluid={imageData.allFile.edges[1].node.childImageSharp.fluid}
            css={{
              width: '500px',
              height: '300px'
            }}
          />
          <span>
            {intl.formatMessage({ id: 'index.section_02' })}
          </span>
        </div>
      </div>
    </Layout>
  )
}

export default Index
