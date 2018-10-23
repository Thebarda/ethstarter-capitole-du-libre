import React from 'react'
import { Slide, Heading, Image } from 'spectacle'

import persona from '../../../assets/persona.png'

const projectContractorFunc = (
  <Slide bgColor='secondary' textColor='primary' transition={['fade', 'spin']}>
    <Heading textColor='tertiary' size={3}>
      Personas
    </Heading>
    <Image src={persona} style={{ marginTop: '-10rem' }} />
  </Slide>
)

export default projectContractorFunc
