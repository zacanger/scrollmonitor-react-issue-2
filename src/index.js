import React from 'react'
import { render } from 'react-dom'
import Watch from 'scrollmonitor-react'

const App = () => (
  <h1>{`${typeof Watch}`}</h1>
)

render(<App />, document.getElementById('root'))
