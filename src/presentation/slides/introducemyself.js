import React from 'react'
import { Slide, Text, Heading, Appear, Image } from 'spectacle'

import bleemeo from '../../../assets/bleemeo_logo_light.png'

const IntroduceMyself = (
  <Slide bgColor='secondary' transition={['fade', 'spin']}>
    <Heading size={3} textColor='tertiary'>
      Tom Darneix
    </Heading>
    <Appear>
      <Text textColor='primary' textAlign='left' textSize='95%'>
        22 ans
      </Text>
    </Appear>
    <Appear>
      <div>
        <Text textColor='primary' textAlign='left' textSize='95%'>
          Développeur frontend (React)
        </Text>
        <Image src={bleemeo} width='20rem' style={{ position: 'absolute', marginTop: '-5rem', marginLeft: '50rem' }} />
      </div>
    </Appear>
    <Appear>
      <Text textColor='primary' textAlign='left' textSize='95%'>
        Contributeurs sur des projets open-source
      </Text>
    </Appear>
    <Appear>
      <Text textColor='primary' textAlign='left' textSize='95%'>
        DUT Info (Limoges)
      </Text>
    </Appear>
    <Appear>
      <Text textColor='primary' textAlign='left' textSize='95%'>
        LP Développement et Qualité du Logiciel (Toulouse)
      </Text>
    </Appear>
  </Slide>
)

export default IntroduceMyself
