import React, { Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Control, Form } from 'react-redux-form'
import { PropagateLoader } from 'react-spinners'

import { Creators as AuthCreators } from '../../store/ducks/auth'

import { Row, Col } from 'styled-bootstrap-grid'
import GlobalStyle from '../../styles/global'
import { LoginContainer, Error } from './styles'

export default function Login() {
  const { loading, error } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  function handleSubmit(value) {
    dispatch(AuthCreators.loginRequest(value.data))
  }

  return (
    <Fragment>
      <GlobalStyle blue />
      <LoginContainer>
        <Form model="auth" onSubmit={handleSubmit}>
          <Control.text model=".data.login" placeholder="Login" required />
          <Control
            type="password"
            model=".data.password"
            placeholder="Password"
            required
          />

          {loading ? (
            <PropagateLoader
              sizeUnit={'px'}
              size={15}
              color={'#1ebe1e'}
              loading={loading}
            />
          ) : (
            <button>LOGIN</button>
          )}

          <span>
            No registered? <a href="/userForm">Create an account</a>
          </span>

          {error ? (
            <Row>
              <Col col={12}>
                <Error>{error}</Error>
              </Col>
            </Row>
          ) : (
            ''
          )}
        </Form>
      </LoginContainer>
    </Fragment>
  )
}
