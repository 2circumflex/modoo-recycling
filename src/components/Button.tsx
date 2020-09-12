import React from 'react'

/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const cssContainer = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '36px',
  padding: '0 15px',
  borderRadius: '18px',
  backgroundColor: '#1CA67F',
})

const cssTitle = css({
  fontFamily: 'Noto Sans KR',
  fontWeight: 400,
  fontSize: '13px',
  color: 'white'
})

interface ButtonProps {
  title: string
  destination: string
}

const Button: React.FC<ButtonProps> = props => {
  const { title, destination } = props
  return (
    <React.Fragment>
      <a
        href={destination}
        css={{
          textDecoration: 'none'
        }}
      >
        <div css={cssContainer}>
          <span css={cssTitle}>
            {title}
          </span>
        </div>
      </a>
    </React.Fragment>
  )
}

export default Button
