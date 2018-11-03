import React from 'react'
import CodeSlide from 'spectacle-code-slide'

const ganachecliSetup = (
  <CodeSlide
    lang='js'
    code={require('raw-loader!../../../assets/ganachecli.code')}
    ranges={[{ loc: [0, 1] }, { loc: [1, 2] }]}
  />
)

export default ganachecliSetup
