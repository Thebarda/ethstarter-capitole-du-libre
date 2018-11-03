import React from 'react'
import { Slide, Heading, Image } from 'spectacle'

import devStructure from '../../../assets/devStructure.png'

const DevStructure = (
  <Slide bgColor='secondary' transition={['fade', 'spin']} textColor='white'>
    <Heading textColor='tertiary' size={3}>
      Organisation pour le développement
    </Heading>
    <br />
    <Image src={devStructure} width='60rem' />
  </Slide>
)

export default DevStructure
