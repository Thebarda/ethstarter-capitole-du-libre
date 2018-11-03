import React from 'react'
import CodeSlide from 'spectacle-code-slide'

const blockchainDataBlock = (
  <CodeSlide
    lang='js'
    style={{ marginTop: '-10rem' }}
    code={require('raw-loader!../../../assets/smartcontract.code')}
    ranges={[{ loc: [0, 6] }, { loc: [0, 1] }, { loc: [1, 2] }, { loc: [2, 3] }, { loc: [3, 4] }]}
  />
)

export default blockchainDataBlock
