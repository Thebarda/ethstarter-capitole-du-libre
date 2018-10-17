import React from 'react'
import { Slide, Heading, Text, Image } from 'spectacle'

import ethereum from '../../../assets/ethereum_logo.png'
import scrum from '../../../assets/scrum_logo.png'

const Cover = (
  <Slide bgColor='primary'>
    <Image src={ethereum} width='10rem' style={{ position: 'absolute', marginTop: '-13rem' }} />
    <Image src={scrum} width='10rem' style={{ position: 'absolute', marginTop: '-13rem', marginLeft: '68rem' }} />
    <Heading size={1} textFont='primary'>
      Ethstarter
    </Heading>
    <Text>Application web de financement participatif utilisant de l&apos;Ethereum</Text>
    <br />
    <Text textSize='70%' textAlign='right' margin='100px'>
      Capitole du libre - 2018
    </Text>
  </Slide>
)

export default Cover
