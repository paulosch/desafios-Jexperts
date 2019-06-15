import { createStore, compose, applyMiddleware } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import createSagaMiddleware from 'redux-saga'

import history from '../routes/history'

import reducers from './ducks'
import sagas from './sagas'

const middlewares = [routerMiddleware(history)]

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null

const sagaMiddleware = createSagaMiddleware({ sagaMonitor })

middlewares.push(sagaMiddleware)

const composer =
  process.env.NODE_ENV === 'development'
    ? compose(
        applyMiddleware(...middlewares),
        console.tron.createEnhancer()
      )
    : compose(applyMiddleware(...middlewares))

const store = createStore(connectRouter(history)(reducers), composer)

sagaMiddleware.run(sagas)

export default store
