import React from 'react'
import CodeSlide from 'spectacle-code-slide'

const deploySmartContract = (
  <CodeSlide
    lang='js'
    code={require('raw-loader!../../../assets/deployedSmartContract.code')}
    ranges={[
      { loc: [0, 1] },
      { loc: [6, 7] },
      { loc: [7, 9] },
      { loc: [10, 11] },
      { loc: [11, 12] },
      { loc: [12, 13] },
      { loc: [26, 30] },
      { loc: [13, 14] },
      { loc: [14, 19] },
      { loc: [18, 26] }
    ]}
  />
)

export default deploySmartContract
