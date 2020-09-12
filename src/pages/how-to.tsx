import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from 'components/Layout'

/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const listItemHoverOrFocus = css({
  color: '#000',
  textDecoration: 'none',
  '&:hover,&:focus': { color: 'hotpink' },
  '&:active': { color: 'red' }
})

const HowTo: React.FC = () => {
  return (
    <Layout>
      <Helmet>
        <title>How-to</title>
      </Helmet>
      <div css={{
        display: 'flex',
        width: '100%',
        justifyContent: 'space-around'
      }}>
        <nav css={{
          display: 'flex',
          width: '50%;',
          height: '100px'
        }}>
          <ul css={{
            width: '100%',
            listStyle: 'none',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center;'
          }}>
            <li><a href="#plastic" css={listItemHoverOrFocus}>플라스틱</a></li>
            <li><a href="#vinyl" css={listItemHoverOrFocus}>비닐류</a></li>
            <li><a href="#bottle" css={listItemHoverOrFocus}>캔/고철</a></li>
            <li><a href="#glass-bottle" css={listItemHoverOrFocus}>유리병</a></li>
            <li><a href="#paper" css={listItemHoverOrFocus}>종이류</a></li>
          </ul>
        </nav>
      </div>
      {/* TODO(sujin): how-to 내용 추가 */}
    </Layout>
  )
}

export default HowTo
