import React from 'react'
import { Slide, Heading, Image } from 'spectacle'

import currently from '../../../assets/currentlyDailyMeeting.png'

const adaptationScrumDailyMeetingCurrently = (
  <Slide bgColor='secondary' textColor='primary'>
    <Heading textColor='tertiary' size={3}>
      Adaptation des Daily Meeting <br /> La réalité
    </Heading>
    <Image src={currently} />
  </Slide>
)

export default adaptationScrumDailyMeetingCurrently
