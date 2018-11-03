import React from 'react'
import { Slide, Heading, Image } from 'spectacle'

import clap from '../../../assets/clap.gif'

const thanks = (
  <Slide bgColor='secondary' transition={['fade', 'spin']} textColor='white'>
    <Heading textColor='tertiary' size={3}>
      Remerciements
    </Heading>
    <br />
    <Image src={clap} />
  </Slide>
)

export default thanks
