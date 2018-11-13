import React from 'react'
import { Slide, Heading, Appear, Text } from 'spectacle'

const blocCreation = (
  <Slide bgColor='secondary' textColor='primary' transition={['spin', 'fade']} textAlign='center'>
    <Heading textColor='tertiary' size={3}>
      Minage d&apos;un block
    </Heading>
    <Appear>
      <Text textColor='primary'>Résolution d&apos;un algorithme par la force brute</Text>
    </Appear>
    <Appear>
      <Text textColor='primary'>Consommation d&apos;énergie importante</Text>
    </Appear>
    <Appear>
      <Text textColor='primary'>Course à la résolution</Text>
    </Appear>
    <Appear>
      <Text textColor='primary'>Validation du hash (Proof of work)</Text>
    </Appear>
    <Appear>
      <Text textColor='primary'>Copie du nouveau block vers les noeuds</Text>
    </Appear>
    <Appear>
      <Text textColor='primary'>Récompense</Text>
    </Appear>
  </Slide>
)

export default blocCreation
