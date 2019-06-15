import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'

import Login from '../pages/Login'
import UserForm from '../pages/User/UserForm'

import history from './history'

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/userForm" component={UserForm} />
    </Switch>
  </ConnectedRouter>
)

export default Routes
