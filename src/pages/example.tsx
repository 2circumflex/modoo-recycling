import React from 'react'
import { useIntl, FormattedMessage } from 'gatsby-plugin-intl'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Example: React.FC = () => {
  const intl = useIntl()
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "recycle-test.jpg"}) {
        childImageSharp {
          fixed(height: 300, width: 300) {
            base64
            width
            height
            src
            srcSet
          }
        }
      }
    }
  `)

  return (
    <React.Fragment>
      라이브러리 사용법 예제
      {/* https://www.gatsbyjs.com/plugins/gatsby-plugin-intl/ */}
      <br />
      {intl.formatMessage({ id: 'test' })}
      <br />
      {<FormattedMessage id='test' />}
      <br />
      {/* https://www.gatsbyjs.com/plugins/gatsby-image/ */}
      <Img fixed={data.file.childImageSharp.fixed} />
    </React.Fragment>
  )
}

export default Example
