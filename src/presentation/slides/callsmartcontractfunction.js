import React from 'react'
import CodeSlide from 'spectacle-code-slide'

const deploySmartContract = (
  <CodeSlide
    lang='js'
    code={require('raw-loader!../../../assets/deployedSmartContract.code')}
    ranges={[{ loc: [110, 111] }, { loc: [111, 112] }, { loc: [112, 113] }, { loc: [119, 122] }, { loc: [113, 119] }]}
  />
)

export default deploySmartContract
