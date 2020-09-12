import React from 'react'

/** @jsx jsx */
import { jsx } from '@emotion/core'

const Layout: React.FC = props => {
  return (
    <React.Fragment>
      <div
        css={{
          height: '100%',
          display: 'flex'
        }}
      >
        {/* TODO(roy): 헤더 구현 */}
        {props.children}
        {/* TODO(roy): 푸터 구현 */}
      </div>
    </React.Fragment>
  )
}

export default Layout
