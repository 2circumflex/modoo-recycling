import React from 'react'
import { useIntl, FormattedMessage } from 'gatsby-plugin-intl'

const Example: React.FC = () => {
  const intl = useIntl()
  return (
    <React.Fragment>
      라이브러리 사용법 예제
      {/* https://www.gatsbyjs.com/plugins/gatsby-plugin-intl/ */}
      <br />
      {intl.formatMessage({ id: 'test' })}
      <br />
      {<FormattedMessage id='test' />}
    </React.Fragment>
  )
}

export default Example
