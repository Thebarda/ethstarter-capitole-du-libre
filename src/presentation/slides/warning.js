import React from 'react'
import { Slide, Image } from 'spectacle'

import warning from '../../../assets/warning.gif'

const beCareful = (
  <Slide bgColor='secondary' transition={['fade', 'spin']} textColor='white'>
    <br />
    <Image src={warning} width='65rem' />
  </Slide>
)

export default beCareful
