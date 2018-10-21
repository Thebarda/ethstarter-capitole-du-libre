import React from 'react'
import { Slide, Heading, Appear, Text } from 'spectacle'

const formation = (
  <Slide bgColor='secondary' transition={['fade', 'spin']}>
    <Heading textColor='tertiary'>Formation</Heading>
    <Appear>
      <Text textColor='primary' textAlign='left' textSize='95%'>
        DUT Info (Limoges)
      </Text>
    </Appear>
    <Appear>
      <Text textColor='primary' textAlign='left' textSize='95%'>
        LP Développement et Qualité du Logiciel (Toulouse)
      </Text>
    </Appear>
  </Slide>
)

export default formation
