import React, { Fragment } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from '../pages/Login'
import Form from '../pages/User/Form'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/userForm" component={Form} />
    </Switch>
  </BrowserRouter>
)

export default Routes
