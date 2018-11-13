import React from 'react'
import { Slide, Heading, Text, Appear } from 'spectacle'

const improvements = (
  <Slide bgColor='secondary' textColor='primary'>
    <Heading textColor='tertiary' size={3}>
      Prise de recul
    </Heading>
    <Appear>
      <Text textColor='primary'>Inhabituel</Text>
    </Appear>
    <Appear>
      <Text textColor='primary'>
        Migration vers une API Restful: <br />{' '}
        <span style={{ fontSize: '90%' }}>React/VueJS, ExpressJS/Django Rest Framework</span>
      </Text>
    </Appear>
  </Slide>
)

export default improvements
