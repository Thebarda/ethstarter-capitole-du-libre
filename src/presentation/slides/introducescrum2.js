import React from 'react'
import { Slide, Heading, Text, Appear, List, ListItem } from 'spectacle'

const introduceScrum2 = (
  <Slide bgColor='secondary' textColor='primary'>
    <Heading textColor='tertiary' size={3}>
      Scrum
    </Heading>
    <Appear>
      <Text textColor='primary'>Trois rôles:</Text>
    </Appear>
    <List textAlign='center'>
      <Appear>
        <ListItem>Product Owner</ListItem>
      </Appear>
      <Appear>
        <ListItem>Scrum Master</ListItem>
      </Appear>
      <Appear>
        <ListItem>L&apos;équipe de développement</ListItem>
      </Appear>
    </List>
  </Slide>
)

export default introduceScrum2
