import React from 'react'
import { Slide, Heading, Appear, Text, Image } from 'spectacle'

import blckSchema from '../../../assets/blck-schema.png'

const blockchainStorage = (
  <Slide bgColor='secondary' textColor='primary' transition={['fade', 'spin']}>
    <Heading textColor='tertiary' size={3}>
      Une technologie de stockage
    </Heading>
    <Appear>
      <Text textColor='primary'>Stocke les transactions (comme un relevé bancaire)</Text>
    </Appear>
    <Appear>
      <Image src={blckSchema} width='60rem' />
    </Appear>
  </Slide>
)

export default blockchainStorage
