import React from 'react'
import { Slide, Text, Heading, Appear, Image } from 'spectacle'

import vitalik from '../../../assets/vitalikbuterin.jpg'

const introduceEthereum = (
  <Slide bgColor='secondary' transition={['fade', 'spin']} textColor='white'>
    <Heading textColor='tertiary' size={3}>
      L&apos;Ethereum ou la décentralisation des applications
    </Heading>
    <Appear>
      <Text textColor='primary'>
        Platforme open-source de déploiement d&apos;applications décentralisée utilisant une blockchain
      </Text>
    </Appear>
    <Appear>
      <div>
        <Text textColor='primary'>Créée par Vitalik Buterin en 2015</Text>
        <Image src={vitalik} width='20rem' style={{ position: 'absolute', marginTop: '-28rem', marginLeft: '-6rem' }} />
      </div>
    </Appear>
    <Appear>
      <Text textColor='primary'>Ether</Text>
    </Appear>
    <Appear>
      <Text textColor='primary'>Fréquence des blocs (moyenne) : 12-15 secondes</Text>
    </Appear>
    <Appear>
      <Text textColor='primary'>Logiciels client: C++, Go, Rust, Python, Javascript, Java, Ruby, Haskell</Text>
    </Appear>
    <Appear>
      <Text textColor='primary'>Execution des smarts contracts</Text>
    </Appear>
  </Slide>
)

export default introduceEthereum
