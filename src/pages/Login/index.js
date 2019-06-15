import React, { Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Control, Form } from 'react-redux-form'
import { PropagateLoader } from 'react-spinners'

import { Creators as UserCreators } from '../../store/ducks/user'

import { Row, Col } from 'styled-bootstrap-grid'
import GlobalStyle from '../../styles/global'
import { LoginContainer, Error } from './styles'

export default function Login() {
  const { loading, error } = useSelector(state => state.user)
  const dispatch = useDispatch()

  function handleSubmit(value) {
    dispatch(UserCreators.getUserRequest(value.data))
  }

  return (
    <Fragment>
      <GlobalStyle blue />
      <LoginContainer>
        <Form model="user" onSubmit={handleSubmit}>
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
