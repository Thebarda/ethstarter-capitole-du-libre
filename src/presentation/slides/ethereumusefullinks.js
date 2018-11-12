import React from 'react'
import { Slide, Heading, Appear, Text } from 'spectacle'

const usefulLinks = (
  <Slide bgColor='secondary' textColor='primary' transition={['fade', 'spin']}>
    <Heading textColor='tertiary' size={3}>
      Liens utiles
    </Heading>
    <Appear>
      <Text textColor='primary'>https://www.ethereum-france.com</Text>
    </Appear>
    <Appear>
      <Text textColor='primary'>https://blockchainfrance.net/</Text>
    </Appear>
    <Appear>
      <Text textColor='primary'>https://cryptoast.fr</Text>
    </Appear>
  </Slide>
)

export default usefulLinks
