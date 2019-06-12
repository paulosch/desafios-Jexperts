import React, { Fragment } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from '../pages/Login'
import UsersList from '../pages/Users/UsersList'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/users" component={UsersList} />
    </Switch>
  </BrowserRouter>
)

export default Routes
