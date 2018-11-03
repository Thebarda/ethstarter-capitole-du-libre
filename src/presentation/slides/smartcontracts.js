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
      <div>
        <Text textColor='primary'>Solidity (.sol)</Text>
      </div>
    </Appear>
    <Appear>
      <Text textColor='primary'>Coût en gaz (1 gaz = 0,0000000225 ether = 0.0000039 €)</Text>
    </Appear>
    <Appear>
      <Text textColor='primary'>Coût moyen d&apos;une transaction: 21 000 gaz (0.082 €)</Text>
    </Appear>
  </Slide>
)

export default smartContracts
