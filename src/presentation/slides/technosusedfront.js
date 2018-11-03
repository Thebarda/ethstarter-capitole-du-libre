import React from 'react'
import { Slide, Heading, Image, Appear } from 'spectacle'

import htmlcss from '../../../assets/htmlcss.png'
import jquery from '../../../assets/jquery.jpg'

const technoUsedBack = (
  <Slide bgColor='secondary' textColor='white'>
    <Heading textColor='tertiary' size={3}>
      Technologies: front-end
    </Heading>
    <br />
    <Appear>
      <div>
        <Image src={htmlcss} style={{ float: 'left', marginLeft: '2rem' }} width='30rem' />
        <Image src={jquery} style={{ float: 'left', marginLeft: '2rem', marginTop: '3rem' }} width='30rem' />
      </div>
    </Appear>
  </Slide>
)

export default technoUsedBack
