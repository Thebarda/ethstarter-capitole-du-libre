import React from 'react'
import { Slide, Heading, Text, Appear, List, ListItem } from 'spectacle'

const introduceScrum = (
  <Slide bgColor='secondary' textColor='primary'>
    <Heading textColor='tertiary' size={3}>
      Scrum
    </Heading>
    <Appear>
      <Text textColor='primary'>Trois piliers:</Text>
    </Appear>
    <List textAlign='center'>
      <Appear>
        <ListItem>Transparence</ListItem>
      </Appear>
      <Appear>
        <ListItem>Inspection</ListItem>
      </Appear>
      <Appear>
        <ListItem>Adaptation</ListItem>
      </Appear>
    </List>
  </Slide>
)

export default introduceScrum
