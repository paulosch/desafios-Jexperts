import React from 'react'

import { LoginContainer } from './styles'

const Login = () => (
  <LoginContainer>
    <div>
      <input type="input" placeholder="username" />
      <input type="password" placeholder="password" />
      <button>LOGIN</button>
      <span>
        No registered? <a href="">Create an account</a>
      </span>
    </div>
  </LoginContainer>
)

export default Login
