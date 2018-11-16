import React from 'react'
import { Slide, Heading, Text, Appear } from 'spectacle'

const projectContractorFunc = (
  <Slide bgColor='secondary' textColor='primary' transition={['fade', 'spin']}>
    <Heading textColor='tertiary' size={3}>
      Fonctionnalités de l&apos;Entrepreneur
    </Heading>
    <Appear>
      <Text textColor='primary'>Ajouter une campagne</Text>
    </Appear>
    <Appear>
      <Text textColor='primary'>Ajouter des contre-parties</Text>
    </Appear>
    <Appear>
      <Text textColor='primary'>Visualiser les statistiques d&apos;une campagne</Text>
    </Appear>
    <Appear>
      <Text textColor='primary'>Lister ses propres campagnes</Text>
    </Appear>
  </Slide>
)

export default projectContractorFunc
