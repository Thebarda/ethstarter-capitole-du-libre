// Import React
import React from 'react'
import { Deck, Heading, Slide, Text, Appear } from 'spectacle'
import createTheme from 'spectacle/lib/themes/default'

import 'normalize.css'

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE'
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
        <Slide transition={['slide', 'fade']} bgColor='primary'>
          <div>
            <Heading size={1} fit caps lineHeight={1} textColor='secondary'>
							Spectacle Boilerplate
            </Heading>
            <Appear>
              <div>
                <Text margin='10px 0 0' textColor='tertiary' size={1} fit bold>
									open the presentation/index.js file to get started
                </Text>
              </div>
            </Appear>
          </div>
        </Slide>
      </Deck>
    )
  }
}
