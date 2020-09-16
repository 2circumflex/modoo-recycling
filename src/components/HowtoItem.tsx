import React from 'react'

/** @jsx jsx */
import { jsx, css } from '@emotion/core'

interface HowtoItemProps {
  data: {
    title: string
    image: string
    content: string[]
  }
}

const contentWrapper = css({
  width: '100%',
  margin: '100px 0'
})

const header = css({
  display: 'flex',
  margin: '15px 0'
})

const headerIcon = css({
  width: '5px',
  height: '30px',
  border: '1px solid #82B0D9',
  backgroundColor: '#82B0D9',
  marginRight: '10px'
})

const headerTitle = css({
  fontSize: '25px',
})

const image = css({
  width: '100%',
  height: '350px',
  border: '1px solid #F2E8DC',
  backgroundColor: '#F2E8DC'
})

const ul = css({
  listStyle: 'square'
})

const li = css({
  marginBottom: '8px'
})

const HowtoItem: React.FC<HowtoItemProps> = props => {
  const { data } = props
  const itemList = data.content.map((item, index) => (<li css={li} key={index}>{item}</li>))
  return (
    <React.Fragment>
      <div css={contentWrapper}>
        <div css={header}>
          <div css={headerIcon}></div>
          <div css={headerTitle}>
            {data.title}
          </div>
        </div>
        <div>
          <div css={image}>
            {data.image}
          </div>
          <ul css={ul}>
            {itemList}
          </ul>
        </div>
      </div>
    </React.Fragment>
  )
}

export default HowtoItem
