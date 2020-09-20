import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from 'components/Layout'
import HowtoItem, { HowtoItemProps } from 'components/HowtoItem'

/** @jsx jsx */
import { jsx } from '@emotion/core'

const recyclingInfoList: HowtoItemProps[] = [
  {
    title: 'how-to.recyclable_materials.plastic',
    image: 'plastic.png',
    content: [
      'how-to.recyclable_materials_description.plastic_01',
      'how-to.recyclable_materials_description.plastic_02',
    ]
  },
  {
    title: 'how-to.recyclable_materials.pet',
    image: 'pet.png',
    content: [
      'how-to.recyclable_materials_description.pet_01',
      'how-to.recyclable_materials_description.pet_02',
    ]
  },
  {
    title: 'how-to.recyclable_materials.vinyl',
    image: 'vinyl.png',
    content: [
      'how-to.recyclable_materials_description.vinyl_01',
      'how-to.recyclable_materials_description.vinyl_02',
    ]
  },
  {
    title: 'how-to.recyclable_materials.can',
    image: 'can.png',
    content: [
      'how-to.recyclable_materials_description.can_01',
      'how-to.recyclable_materials_description.can_02',
      'how-to.recyclable_materials_description.can_03',
      'how-to.recyclable_materials_description.can_04',
    ]
  },
  {
    title: 'how-to.recyclable_materials.metal',
    image: 'metal.png',
    content: [
      'how-to.recyclable_materials_description.metal_01',
    ]
  },
  {
    title: 'how-to.recyclable_materials.glass',
    image: 'glass.png',
    content: [
      'how-to.recyclable_materials_description.glass_01',
      'how-to.recyclable_materials_description.glass_02',
      'how-to.recyclable_materials_description.glass_03',
    ],
  },
  {
    title: 'how-to.recyclable_materials.paper',
    image: 'paper.png',
    content: [
      'how-to.recyclable_materials_description.paper_01',
      'how-to.recyclable_materials_description.paper_02',
      'how-to.recyclable_materials_description.paper_03',
    ]
  }
]

const HowTo: React.FC = () => {
  return (
    <Layout>
      <Helmet>
        <title>분리수거 방법 - 모두의 재활용</title>
      </Helmet>
      <div style={{
        width: '100%'
      }}>
        {
          recyclingInfoList.map((item: HowtoItemProps, index: number) => {
            return (
              <HowtoItem
                key={index}
                {...item}
              />
            )
          })
        }
      </div>
    </Layout >
  )
}

export default HowTo
