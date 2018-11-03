import React from 'react'
import { Slide, Heading, Appear, Text, Image } from 'spectacle'

import decentralized from '../../../assets/decentralized.png'

const blockchainStorage = (
  <Slide bgColor='secondary' textColor='primary' transition={['fade', 'spin']}>
    <Heading textColor='tertiary' size={3}>
      ...sans organe de contrôle
    </Heading>
    <Appear>
      <Text textColor='primary'>Décentralisation</Text>
    </Appear>
    <Appear>
      <Image src={decentralized} width='70rem' />
    </Appear>
  </Slide>
)

export default blockchainStorage
