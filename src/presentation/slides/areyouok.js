import React from 'react'
import { Slide, Heading, Image } from 'spectacle'

import mindBlow from '../../../assets/mindblow.gif'

const areyouok = (
  <Slide bgColor='secondary' transition={['fade', 'spin']} textColor='white'>
    <Heading textColor='tertiary' size={3}>
      ça va ?
    </Heading>
    <br />
    <Image src={mindBlow} />
  </Slide>
)

export default areyouok
