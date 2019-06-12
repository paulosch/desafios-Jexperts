import React from 'react'

import { BaseCSS } from 'styled-bootstrap-grid'
import { Wrapper } from './styles/Components'

import Routes from './routes'

function App() {
  return (
    <Wrapper>
      <BaseCSS />
      <Routes />
    </Wrapper>
  )
}

export default App
