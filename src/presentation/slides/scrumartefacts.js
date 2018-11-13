import React from 'react'
import { Slide, Heading, Text, Appear, Image } from 'spectacle'

import us from '../../../assets/userstories.png'
import burdown from '../../../assets/burndown_chart.png'

const scrumArtefacts = (
  <Slide bgColor='secondary' textColor='primary' transition={['fade', 'spin']}>
    <Heading textColor='tertiary' size={3}>
      Scrum : Les artéfacts
    </Heading>
    <Appear>
      <div>
        <Text textColor='primary'>User stories</Text>
        <Image src={us} style={{ position: 'absolute', marginLeft: '0rem' }} />
      </div>
    </Appear>
    <Appear>
      <Text textColor='primary'>Product backlog</Text>
    </Appear>
    <Appear>
      <Text textColor='primary'>Sprints et releases</Text>
    </Appear>
    <Appear>
      <Text textColor='primary'>Sprint backlog</Text>
    </Appear>
    <Appear>
      <div>
        <Text textColor='primary'>Burdown chart</Text>
        <Image src={burdown} width='60%' style={{ position: 'absolute', marginLeft: '30rem' }} />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </Appear>
  </Slide>
)

export default scrumArtefacts
