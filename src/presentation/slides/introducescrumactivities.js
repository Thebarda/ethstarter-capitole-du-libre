import React from 'react'
import { Slide, Heading, Text, Appear, Image } from 'spectacle'

import scrum from '../../../assets/scrum.jpg'

const introduceScrum2 = (
  <Slide bgColor='secondary' textColor='primary'>
    <Heading textColor='tertiary' size={3}>
      Scrum
    </Heading>
    <Appear>
      <Text textColor='primary'>Les activités et artfacts</Text>
    </Appear>
    <Appear>
      <Image src={scrum} width='80rem' />
    </Appear>
  </Slide>
)

export default introduceScrum2
