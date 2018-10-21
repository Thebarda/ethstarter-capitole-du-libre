// Import React
import React from 'react'
import { Deck } from 'spectacle'
import createTheme from 'spectacle/lib/themes/default'

// Slides
import Cover from './slides/cover'
import IntroduceMyself from './slides/introducemyself'
import Formation from './slides/formation'
import Summary from './slides/summary'

import 'normalize.css'
import './index.css'

const theme = createTheme(
  {
    primary: '#FAFAFA', // white
    secondary: '#2E2E2E', // very dark grey
    tertiary: '#58ACFA', // blue
    quaternary: '#FE9A2E' // orange
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
)

export default class Presentation extends React.Component {
  render () {
    return (
      <Deck
        transition={['zoom', 'fade']}
        transitionDuration={500}
        theme={theme}
        contentHeight={900}
        contentWidth={1400}
      >
        {Cover}
        {IntroduceMyself}
        {Formation}
        {Summary}
      </Deck>
    )
  }
}
