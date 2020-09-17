import React from 'react'
import { useIntl } from 'gatsby-plugin-intl'

/** @jsx jsx */
import { jsx, css } from '@emotion/core'

interface HowtoItemProps {
  title: string
  image: string
  content: string[]
}

const cssContentWrapper = css({
  width: '100%',
  margin: '100px 0'
})

const cssHeader = css({
  display: 'flex',
  margin: '15px 0'
})

const cssHeaderIcon = css({
  width: '5px',
  height: '30px',
  border: '1px solid #82B0D9',
  backgroundColor: '#82B0D9',
  marginRight: '10px'
})

const cssHeaderTitle = css({
  fontSize: '25px',
})

const cssImage = css({
  width: '100%',
  height: '350px',
  border: '1px solid #F2E8DC',
  backgroundColor: '#F2E8DC'
})

const cssLists = css({
  listStyle: 'square'
})

const cssListItem = css({
  marginBottom: '8px'
})

const HowtoItem: React.FC<HowtoItemProps> = props => {
  const intl = useIntl()
  const { title, image, content } = props
  const itemList = content.map((item, index) => (
    <li css={cssListItem} key={index}>
      {intl.formatMessage({ id: item })}
    </li>
  ))

  return (
    <React.Fragment>
      <div css={cssContentWrapper}>
        <div css={cssHeader}>
          <div css={cssHeaderIcon}></div>
          <div css={cssHeaderTitle}>
            {intl.formatMessage({ id: title })}
          </div>
        </div>
        <div>
          <div css={cssImage}>
            {image}
          </div>
          <ul css={cssLists}>
            {itemList}
          </ul>
        </div>
      </div>
    </React.Fragment>
  )
}

export default HowtoItem
