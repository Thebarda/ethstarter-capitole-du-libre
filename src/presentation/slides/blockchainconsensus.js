import React from 'react'
import { Slide, Heading, Appear, Text, ListItem, List } from 'spectacle'

const blockchainConsensus = (
  <Slide bgColor='secondary' textColor='primary' textAlign='center'>
    <Heading textColor='tertiary' size={3}>
      Le principe de consensus
    </Heading>
    <Appear>
      <div>
        <Text textColor='primary'>Deux types de blockchain:</Text>
        <List textAlign='center'>
          <ListItem>Publique</ListItem>
          <ListItem>Privée</ListItem>
        </List>
      </div>
    </Appear>
  </Slide>
)

export default blockchainConsensus
