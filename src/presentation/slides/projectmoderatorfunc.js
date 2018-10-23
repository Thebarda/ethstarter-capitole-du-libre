import React from 'react'
import { Slide, Heading, Text, Appear } from 'spectacle'

const projectModeratorFunc = (
  <Slide bgColor='secondary' textColor='primary' transition={['fade', 'spin']}>
    <Heading textColor='tertiary' size={3}>
      Fonctionnalités du modérateur
    </Heading>
    <Appear>
      <Text textColor='primary'>Valider une campagne</Text>
    </Appear>
    <Appear>
      <Text textColor='primary'>Valider un compte Entrepreneur</Text>
    </Appear>
    <Appear>
      <Text textColor='primary'>Lister les campagnes à valider</Text>
    </Appear>
    <Appear>
      <Text textColor='primary'>Lister les comptes Entrepreneurs à valider</Text>
    </Appear>
  </Slide>
)

export default projectModeratorFunc
