import React from 'react'
import { useIntl } from 'gatsby-plugin-intl'
import Img, { FluidObject } from 'gatsby-image'

/** @jsx jsx */
import { jsx, css } from '@emotion/core'

export interface HowtoItemProps {
  title: string
  image: string
  content: string[]
  imageFluid: FluidObject
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

const cssLists = css({
  listStyle: 'square'
})

const cssListItem = css({
  marginBottom: '8px'
})

const HowtoItem: React.FC<HowtoItemProps> = props => {
  const intl = useIntl()
  const { title, content, imageFluid } = props
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
          <Img fluid={imageFluid} />
          <ul css={cssLists}>
            {itemList}
          </ul>
        </div>
      </div>
    </React.Fragment>
  )
}

export default HowtoItem
