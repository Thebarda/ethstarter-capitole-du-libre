import React from 'react'
import { Slide, Heading, Image } from 'spectacle'

import expected from '../../../assets/expectedDailyMeeting.png'

const adaptationScrumDailyMeeting = (
  <Slide bgColor='secondary' textColor='primary'>
    <Heading textColor='tertiary' size={3}>
      Adaptation des Daily Meeting <br /> Attendu
    </Heading>
    <Image src={expected} />
  </Slide>
)

export default adaptationScrumDailyMeeting
