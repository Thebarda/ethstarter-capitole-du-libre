import React from 'react'
import { Slide, Text, Heading, Appear, List, ListItem } from 'spectacle'

const introduceAgile = (
  <Slide bgColor='secondary' transition={['fade', 'spin']} textColor='white'>
    <Heading textColor='tertiary' size={3}>
      L&apos;Agilité dis tu ?{' '}
    </Heading>
    <Appear>
      <Text textColor='primary'>Créé dans les années 90</Text>
    </Appear>
    <Appear>
      <Text textColor='primary'>4 principes fondamentaux (2001):</Text>
    </Appear>
    <List>
      <Appear>
        <ListItem>
          <b>Les Individus et leurs interactions</b> plus que les processus et les outils
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>
          <b>Des logiciels opérationnels</b> plus qu&apos;une documentation exhaustive
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>
          <b>La collaboration avec les clients</b> plus que la négociation contractuelle
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>
          <b>L&apos;adaptation au changement</b> plus que le suivi d&apos;un plan
        </ListItem>
      </Appear>
    </List>
  </Slide>
)

export default introduceAgile
