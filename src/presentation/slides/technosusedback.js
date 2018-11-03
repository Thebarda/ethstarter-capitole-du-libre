import React from 'react'
import { Slide, Heading, Image, Appear } from 'spectacle'

import nodejsNpm from '../../../assets/nodejsnpm.png'
import handlebars from '../../../assets/handlebars.png'
import expressjs from '../../../assets/expressjs.png'
import mysql from '../../../assets/mysql.jpeg'
import phpmyadmin from '../../../assets/phpmyadmin.png'
import web3js from '../../../assets/web3js.jpg'

const technoUsedBack = (
  <Slide bgColor='secondary' transition={['fade', 'spin']} textColor='white'>
    <Heading textColor='tertiary' size={3}>
      Technologies: back-end
    </Heading>
    <br />
    <Appear>
      <div>
        <Image src={nodejsNpm} style={{ float: 'left', marginLeft: '2rem' }} />
        <Image src={handlebars} style={{ float: 'left', marginLeft: '2rem' }} />
        <Image src={expressjs} style={{ float: 'left' }} width='30rem' />
      </div>
    </Appear>
    <Appear>
      <div>
        <Image src={web3js} style={{ float: 'left', marginLeft: '2rem' }} width='20rem' />
        <Image src={mysql} style={{ float: 'left', marginLeft: '2rem' }} width='20rem' />
        <Image src={phpmyadmin} style={{ float: 'left', marginLeft: '2rem' }} width='20rem' />
      </div>
    </Appear>
  </Slide>
)

export default technoUsedBack
