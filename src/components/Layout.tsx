import React from 'react'

/** @jsx jsx */
import { jsx } from '@emotion/core'
import Header from 'components/Header'
import { headerMaxWidth, headerHeight, headerHorizontalPadding } from 'utils/const'

const Layout: React.FC = props => {
  return (
    <React.Fragment>
      <div
        css={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Header />
        <div
          css={{
            marginTop: headerHeight,
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <div
            css={{
              flex: 1,
              display: 'flex',
              justifyContent: 'flex-start',
              padding: `0 ${headerHorizontalPadding}`,
              maxWidth: headerMaxWidth
            }}
          >
            {props.children}
          </div>
        </div>
        {/* TODO(roy): 푸터 구현 */}
      </div>
    </React.Fragment>
  )
}

export default Layout
