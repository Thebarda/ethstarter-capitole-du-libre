import React from 'react'
import CodeSlide from 'spectacle-code-slide'

const blockchainDataTransaction = (
  <CodeSlide
    lang='js'
    code={require('raw-loader!../../../assets/transaction.code')}
    ranges={[{ loc: [1, 2] }, { loc: [2, 3] }, { loc: [6, 7] }, { loc: [3, 4] }, { loc: [9, 10] }, { loc: [11, 12] }]}
  />
)

export default blockchainDataTransaction
