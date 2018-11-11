import React from 'react'
import { Slide, Heading, Text, Appear, List, ListItem } from 'spectacle'

const projectContext = (
  <Slide bgColor='secondary' textColor='primary' transition={['fade', 'spin']}>
    <Heading textColor='tertiary' size={3}>
      Génèse du projet
    </Heading>
    <Appear>
      <Text textColor='primary'>Projet tutoré</Text>
    </Appear>
    <Appear>
      <div>
        <Text textColor='primary'>7 Personnes:</Text>
        <List textAlign='center'>
          <ListItem textSize='80%'>1 Product Owner</ListItem>
          <ListItem textSize='80%'>1 Scrum Master</ListItem>
          <ListItem textSize='80%'>5 Développeurs</ListItem>
        </List>
      </div>
    </Appear>
    <Appear>
      <Text textColor='primary'>4 Releases</Text>
    </Appear>
    <Appear>
      <Text textColor='primary'>2 Sprints / Release</Text>
    </Appear>
    <Appear>
      <Text textColor='primary'>1 Sprint = 2 Jours</Text>
    </Appear>
  </Slide>
)

export default projectContext
