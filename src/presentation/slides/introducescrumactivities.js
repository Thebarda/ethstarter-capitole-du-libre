import React from 'react'
import { Slide, Heading, Text, Appear, Image } from 'spectacle'

import scrum from '../../../assets/scrum.jpg'

const introduceScrum2 = (
  <Slide bgColor='secondary' textColor='primary'>
    <Heading textColor='tertiary' size={3}>
      Scrum : Les activités
    </Heading>
    <Appear>
      <Image src={scrum} width='90rem' />
    </Appear>
  </Slide>
)

export default introduceScrum2
