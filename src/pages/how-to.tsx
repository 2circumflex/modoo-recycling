import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from 'components/Layout'
import Item from 'components/HowtoItem'
import { useIntl } from 'gatsby-plugin-intl'

/** @jsx jsx */
import { jsx } from '@emotion/core'

const HowTo: React.FC = () => {
  const intl = useIntl()
  const data = {
    plastic: {
      title: intl.formatMessage({ id: 'howto.recyclable_materials.plastic' }),
      image: '',
      content: [
        intl.formatMessage({ id: 'howto.recyclable_materials_description.plastic_01' }),
        intl.formatMessage({ id: 'howto.recyclable_materials_description.plastic_02' }),
      ]
    },
    pet: {
      title: intl.formatMessage({ id: 'howto.recyclable_materials.pet' }),
      image: '',
      content: [
        intl.formatMessage({ id: 'howto.recyclable_materials_description.pet_01' }),
        intl.formatMessage({ id: 'howto.recyclable_materials_description.pet_02' }),
      ]
    },
    vinyl: {
      title: intl.formatMessage({ id: 'howto.recyclable_materials.vinyl' }),
      image: '',
      content: [
        intl.formatMessage({ id: 'howto.recyclable_materials_description.vinyl_01' }),
        intl.formatMessage({ id: 'howto.recyclable_materials_description.vinyl_02' }),
      ]
    },
    can: {
      title: intl.formatMessage({ id: 'howto.recyclable_materials.can' }),
      image: '',
      content: [
        intl.formatMessage({ id: 'howto.recyclable_materials_description.can_01' }),
        intl.formatMessage({ id: 'howto.recyclable_materials_description.can_02' }),
        intl.formatMessage({ id: 'howto.recyclable_materials_description.can_03' }),
        intl.formatMessage({ id: 'howto.recyclable_materials_description.can_04' }),
      ]
    },
    metal: {
      title: intl.formatMessage({ id: 'howto.recyclable_materials.metal' }),
      image: '',
      content: [
        intl.formatMessage({ id: 'howto.recyclable_materials_description.metal_01' }),
      ]
    },
    glass: {
      title: intl.formatMessage({ id: 'howto.recyclable_materials.glass' }),
      image: '',
      content: [
        intl.formatMessage({ id: 'howto.recyclable_materials_description.glass_01' }),
        intl.formatMessage({ id: 'howto.recyclable_materials_description.glass_02' }),
        intl.formatMessage({ id: 'howto.recyclable_materials_description.glass_03' }),
      ]
    },
    paper: {
      title: intl.formatMessage({ id: 'howto.recyclable_materials.paper' }),
      image: '',
      content: [
        intl.formatMessage({ id: 'howto.recyclable_materials_description.paper_01' }),
        intl.formatMessage({ id: 'howto.recyclable_materials_description.paper_02' }),
        intl.formatMessage({ id: 'howto.recyclable_materials_description.paper_03' }),
      ]
    }
  }
  return (
    <Layout>
      <Helmet>
        <title>How-to</title>
      </Helmet>
      <div style={{
        width: '100%'
      }}>
        <Item data={data.plastic} />
        <Item data={data.pet} />
        <Item data={data.vinyl} />
        <Item data={data.can} />
        <Item data={data.metal} />
        <Item data={data.glass} />
        <Item data={data.paper} />
      </div>
    </Layout >
  )
}

export default HowTo
