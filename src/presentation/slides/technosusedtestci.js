import React from 'react'
import { Slide, Heading, Image, Appear } from 'spectacle'

import github from '../../../assets/github.png'
import travis from '../../../assets/travis.png'
import robotFramework from '../../../assets/robotframework.png'
import docker from '../../../assets/docker.png'

const technoUsedBack = (
  <Slide bgColor='secondary' textColor='white'>
    <Heading textColor='tertiary' size={3}>
      Technologies: tests et CI
    </Heading>
    <br />
    <Appear>
      <div>
        <Image src={github} style={{ float: 'left', marginLeft: '2rem' }} />
        <Image src={travis} style={{ float: 'left', marginLeft: '2rem' }} width='20rem' />
      </div>
    </Appear>
    <Appear>
      <div>
        <Image src={robotFramework} style={{ float: 'left', marginLeft: '2rem' }} width='20rem' />
        <Image src={docker} style={{ float: 'left', marginLeft: '2rem' }} />
      </div>
    </Appear>
  </Slide>
)

export default technoUsedBack
