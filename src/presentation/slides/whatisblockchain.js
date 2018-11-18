import React from 'react'
import { Slide, Heading, Appear, BlockQuote, Quote, Cite } from 'spectacle'

const whatisblockchain = (
  <Slide bgColor='secondary' textColor='primary'>
    <Heading textColor='tertiary' size={3}>
      La blockchain ? C&apos; quoi ?
    </Heading>
    <Appear>
      <BlockQuote>
        <Quote textColor='primary' textSize='40'>
          La blockchain est une technologie de stockage et de transmission d’informations, transparente, sécurisée, et
          fonctionnant sans organe central de contrôle
        </Quote>
        <Cite textColor='primary' textSize='30'>
          Blockchain France
        </Cite>
      </BlockQuote>
    </Appear>
  </Slide>
)

export default whatisblockchain
