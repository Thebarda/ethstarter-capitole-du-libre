// Import React
import React from 'react'
import { Deck } from 'spectacle'
import createTheme from 'spectacle/lib/themes/default'

// Slides
import Cover from './slides/cover'
import IntroduceMyself from './slides/introducemyself'
import Formation from './slides/formation'
import Summary from './slides/summary'
import projectContext from './slides/projectcontext'
import projectCharacters from './slides/projectcharacters'
import projectCharacters2 from './slides/projectcharacters2'
import projectGlobal from './slides/projectglobalfunc'
import projectContributor from './slides/projectcontributorfunc'
import projectContractor from './slides/projectconractorfunc'
import projectModerator from './slides/projectmoderatorfunc'
import titleAgilite from './slides/titleagilite'
import IntroduceAgile from './slides/introduceagile'
import IntroduceScrum from './slides/introducescrum'
import IntroduceScrum2 from './slides/introducescrum2'
import IntroduceScrumActivities from './slides/introducescrumactivities'
import IntroduceAgileMore from './slides/introduceagilemore'
import AdaptationScrumDailyMeetingExpected from './slides/adaptationscrumdailymeeting'
import AdaptationScrumDailyMeetingCurrently from './slides/adaptationscrumdailymeetingcurrently'
import adaptationscrumdailymeetingSolution from './slides/adaptationscrumdailymeetingsolution'

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
        {projectContext}
        {projectCharacters}
        {projectCharacters2}
        {projectGlobal}
        {projectContributor}
        {projectContractor}
        {projectModerator}
        {titleAgilite}
        {IntroduceAgile}
        {IntroduceScrum}
        {IntroduceScrum2}
        {IntroduceScrumActivities}
        {IntroduceAgileMore}
        {AdaptationScrumDailyMeetingExpected}
        {AdaptationScrumDailyMeetingCurrently}
        {adaptationscrumdailymeetingSolution}
      </Deck>
    )
  }
}
