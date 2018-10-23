import React from 'react'
import { Slide, Heading, Text, Appear, List, ListItem } from 'spectacle'

const projectCharacters = (
  <Slide bgColor='secondary' textColor='primary'>
    <Heading textColor='tertiary' size={3}>
      Personas
    </Heading>
    <Appear>
      <Text textColor='primary'>3 personas</Text>
    </Appear>
    <Appear>
      <div>
        <List textAlign='center'>
          <ListItem>L&apos;entrepreneur</ListItem>
          <ListItem>Le Contributeur</ListItem>
          <ListItem>Le Modérateur</ListItem>
        </List>
      </div>
    </Appear>
  </Slide>
)

export default projectCharacters
