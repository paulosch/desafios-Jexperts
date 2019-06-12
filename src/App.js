import React from 'react'

import GlobalStyle from './styles/global'
import { BaseCSS } from 'styled-bootstrap-grid'
import { Wrapper } from './styles/Components'

import Login from './pages/Login'

function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <BaseCSS />
      <Login />
    </Wrapper>
  )
}

export default App
