import React, { Fragment } from 'react'

import GlobalStyle from '../../styles/global'
import { LoginContainer } from './styles'

const Login = () => (
  <Fragment>
    <GlobalStyle blue />
    <LoginContainer>
      <div>
        <input type="input" placeholder="username" />
        <input type="password" placeholder="password" />
        <button>LOGIN</button>
        <span>
          No registered? <a href="/userForm">Create an account</a>
        </span>
      </div>
    </LoginContainer>
  </Fragment>
)

export default Login
