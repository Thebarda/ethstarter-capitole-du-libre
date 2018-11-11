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
import ScrumArtefacts from './slides/scrumartefacts'
import IntroduceScrumActivities from './slides/introducescrumactivities'
import IntroduceAgileMore from './slides/introduceagilemore'
import AdaptationScrumDailyMeetingExpected from './slides/adaptationscrumdailymeeting'
import AdaptationScrumDailyMeetingCurrently from './slides/adaptationscrumdailymeetingcurrently'
import adaptationscrumdailymeetingSolution from './slides/adaptationscrumdailymeetingsolution'
import MoreScrumAndAgility from './slides/morescrumagility'
import TitleTech from './slides/titletech'
import Warning from './slides/warning'
import WhatIsBlockchain from './slides/whatisblockchain'
import BlockchainSchema from './slides/blockchainstorage'
import BlockData from './slides/blockchaindatablock'
import TransactionData from './slides/blockchaindatatransaction'
import Decentralized from './slides/decentralized'
import BlockchainConsensus from './slides/blockchainconsensus'
import BlockCreation from './slides/blockcreation'
import IntroduceEthereum from './slides/introduceethereum'
import EthereumUnits from './slides/ethereumunits'
import SmartContracts from './slides/smartcontracts'
import CodeSmartContracts from './slides/codesmartcontract'
import TechnosUsedBack from './slides/technosusedback'
import TechnosUsedFront from './slides/technosusedfront'
import TechnosUsedServer from './slides/technousedserver'
import TechnosUsedTestCI from './slides/technosusedtestci'
import DevStructure from './slides/devstructure.js'
import SetupGanacheCli from './slides/setupganachecli'
import DeploySmartContract from './slides/deploysmartsontract'
import CodeRemoveContribution from './slides/coderemovecontribution'
import CallSmartContract from './slides/callsmartcontractfunction'
import Improvements from './slides/improvements'
import Thanks from './slides/thanks'

import AreYouOk from './slides/areyouok'

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
        {ScrumArtefacts}
        {IntroduceScrumActivities}
        {IntroduceAgileMore}
        {AdaptationScrumDailyMeetingExpected}
        {AdaptationScrumDailyMeetingCurrently}
        {adaptationscrumdailymeetingSolution}
        {MoreScrumAndAgility}
        {TitleTech}
        {Warning}
        {WhatIsBlockchain}
        {BlockchainSchema}
        {BlockData}
        {TransactionData}
        {Decentralized}
        {BlockCreation}
        {BlockchainConsensus}
        {AreYouOk}
        {IntroduceEthereum}
        {EthereumUnits}
        {SmartContracts}
        {CodeSmartContracts}
        {TechnosUsedBack}
        {TechnosUsedFront}
        {TechnosUsedServer}
        {TechnosUsedTestCI}
        {DevStructure}
        {SetupGanacheCli}
        {DeploySmartContract}
        {CodeRemoveContribution}
        {CallSmartContract}
        {Improvements}
        {Thanks}
      </Deck>
    )
  }
}
