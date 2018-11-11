import React from 'react'
import { Slide, Text, Heading, Appear } from 'spectacle'

const smartContracts = (
  <Slide bgColor='secondary' transition={['fade', 'spin']} textColor='white'>
    <Heading textColor='tertiary' size={3}>
      Les smarts contracts
    </Heading>
    <Appear>
      <Text textColor='primary'>Programmes déployables et exécutable sur une blockchain</Text>
    </Appear>
    <Appear>
      <Text textColor='primary'>Solidity (.sol)</Text>
    </Appear>
    <Appear>
      <Text textColor='primary'>Langage compilé (vers JSON)</Text>
    </Appear>
  </Slide>
)

export default smartContracts
