import React from 'react'
import CodeSlide from 'spectacle-code-slide'

const blockchainDataBlock = (
  <CodeSlide
    lang='js'
    code={require('raw-loader!../../../assets/block.code')}
    ranges={[{ loc: [1, 2] }, { loc: [2, 3] }, { loc: [3, 4] }, { loc: [9, 10] }, { loc: [17, 20] }]}
  />
)

export default blockchainDataBlock
