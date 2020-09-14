import React from 'react'
/** @jsx jsx */
import { jsx } from '@emotion/core'
import { headerMaxWidth, headerHeight, headerHorizontalPadding } from 'utils/const'
import Button from 'components/Button'

const Header: React.FC = () => {
  return (
    <div
      css={{
        position: 'fixed',
        left: 0,
        top: 0,
        zIndex: 300,
        background: 'white',
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        height: headerHeight,
        borderBottom: '1px solid #dbdbdb'
      }}
    >
      <div
        css={{
          flex: 1,
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          padding: `0 ${headerHorizontalPadding}`,
          maxWidth: headerMaxWidth
        }}
      >
        <a
          href='/'
          css={{
            textDecoration: 'none',
            color: 'black'
          }}
        >
          <div>
            <span
              css={{
                fontFamily: 'Noto Sans KR',
                fontWeight: 100,
                fontSize: '20px'
              }}
            >
              모두의
            </span>
            <br />
            <span
              css={{
                fontFamily: 'Noto Sans KR',
                fontWeight: 100,
                fontSize: '20px'
              }}
            >
              재활용
            </span>
          </div>
        </a>
        <div
          css={{
            flex: 1,
            display: 'flex',
            justifyContent: 'flex-end'
          }}
        >
          <Button
            title='분리수거방법'
            destination='/how-to'
          />
        </div>
      </div>
    </div>
  )
}

export default Header
