import React from 'react'
import { Slide, Text, Appear, Heading } from 'spectacle'

const summary = (
  <Slide bgColor='secondary'>
    <Heading textColor='tertiary' size={3}>
      Sommaire
    </Heading>
    <Appear>
      <Text textColor='primary' textAlign='left' textSize='95%' lineHeight='115%'>
        Présentation du projet et de son contexte
      </Text>
    </Appear>
    <Appear>
      <Text textColor='primary' textAlign='left' textSize='95%' lineHeight='115%'>
        De la conception au développement grâce à l&apos;Agilité
      </Text>
    </Appear>
    <Appear>
      <Text textColor='primary' textAlign='left' textSize='95%' lineHeight='115%'>
        Mise en place de l&apos;environnement de développement
      </Text>
    </Appear>
  </Slide>
)

export default summary
