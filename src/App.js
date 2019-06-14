import React from 'react'
import { Provider } from 'react-redux'
import { BaseCSS } from 'styled-bootstrap-grid'

import './config/reactotron'
import Routes from './routes'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <BaseCSS />
      <Routes />
    </Provider>
  )
}

export default App
