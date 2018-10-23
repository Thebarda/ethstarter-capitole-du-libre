import React from 'react'
import { Slide, Heading, Text, Appear } from 'spectacle'

const projectGlobalFunc = (
  <Slide bgColor='secondary' textColor='primary' transition={['fade', 'spin']}>
    <Heading textColor='tertiary' size={3}>
      Fonctionnalités globales
    </Heading>
    <Appear>
      <Text textColor='primary'>Créer un compte</Text>
    </Appear>
    <Appear>
      <Text textColor='primary'>Se connecter à un compte</Text>
    </Appear>
    <Appear>
      <Text textColor='primary'>Se déconnecter du compte</Text>
    </Appear>
    <Appear>
      <Text textColor='primary'>Modifier son compte</Text>
    </Appear>
    <Appear>
      <Text textColor='primary'>Visualiser les 10 campagnes tendances</Text>
    </Appear>
  </Slide>
)

export default projectGlobalFunc
