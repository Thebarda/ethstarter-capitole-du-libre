import React from 'react'
import CodeSlide from 'spectacle-code-slide'

const codeRemoveContribution = (
  <CodeSlide
    lang='js'
    style={{ marginTop: '-60rem' }}
    code={require('raw-loader!../../../assets/ethstarter-sol.example')}
    ranges={[
      { loc: [62, 73] },
      { loc: [2, 19] },
      { loc: [62, 63] },
      { loc: [63, 64] },
      { loc: [64, 65] },
      { loc: [65, 66] },
      { loc: [66, 67] },
      { loc: [67, 70] }
    ]}
  />
)

export default codeRemoveContribution
