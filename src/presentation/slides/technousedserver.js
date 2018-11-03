import React from 'react'
import { Slide, Heading, Image, Appear } from 'spectacle'

import ovh from '../../../assets/ovh.png'
import ganache from '../../../assets/ganache.png'

const technoUsedBack = (
  <Slide bgColor='secondary' transition={['fade', 'spin']} textColor='white'>
    <Heading textColor='tertiary' size={3}>
      Technologies: serveur et blockchain
    </Heading>
    <br />
    <Appear>
      <div>
        <Image src={ovh} />
        <Image src={ganache} />
      </div>
    </Appear>
  </Slide>
)

export default technoUsedBack
