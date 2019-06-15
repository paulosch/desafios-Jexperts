import React, { Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Control, Form } from 'react-redux-form'
import { PropagateLoader } from 'react-spinners'

import { Container, Row, Col } from 'styled-bootstrap-grid'

import { Creators as UserCreators } from '../../../store/ducks/user'

import Header from '../../../components/Header'

import {
  FormContainer,
  Divisor,
  ButtonsContainer,
  Button,
  Error
} from './styles'
import GlobalStyle from '../../../styles/global'

export default function UserForm() {
  const { loading, error, logged } = useSelector(state => state.user)
  const dispatch = useDispatch()

  function handleSubmit(value) {
    dispatch(UserCreators.putUserRequest(value.data))
  }

  function handleDelete() {
    dispatch(UserCreators.deleteUserRequest())
  }

  return (
    <Fragment>
      <Header />
      <GlobalStyle />
      <FormContainer>
        <Form model="user" onSubmit={handleSubmit}>
          <Container>
            <Row>
              <Col col={12} md={6}>
                <Control.text
                  model=".data.firstName"
                  placeholder="First name"
                  required
                />
              </Col>
              <Col col={12} md={6}>
                <Control.text
                  model=".data.lastName"
                  placeholder="Last Name"
                  required
                />
              </Col>
            </Row>

            <Row>
              <Col col={12} md={6}>
                <Control.text model=".data.phone" placeholder="Phone" />
              </Col>
              <Col col={12} md={6}>
                <Control
                  model=".data.email"
                  type="email"
                  placeholder="something@example.com"
                  required
                />
              </Col>
            </Row>

            <Row>
              <Col col={12}>
                <Divisor />
                <strong>Login informations</strong>
              </Col>
            </Row>

            <Row>
              <Col col={6}>
                <Control.text
                  model=".data.login"
                  placeholder="Login"
                  required
                />
              </Col>
            </Row>

            <Row>
              <Col col={12} md={6}>
                <Control
                  type="password"
                  model=".data.password"
                  placeholder="Password"
                  required
                />
              </Col>
              <Col col={12} md={6}>
                <Control
                  type="password"
                  model=".data.passwordConfirmation"
                  placeholder="Password confirmation"
                  required
                />
              </Col>
            </Row>

            <Row>
              <Col col={12}>
                <ButtonsContainer>
                  {loading ? (
                    <PropagateLoader
                      sizeUnit={'px'}
                      size={15}
                      color={'#1ebe1e'}
                      loading={loading}
                    />
                  ) : (
                    <Button>Save user</Button>
                  )}
                </ButtonsContainer>
              </Col>
            </Row>
            {error ? (
              <Row>
                <Col col={12}>
                  <Error>{error}</Error>
                </Col>
              </Row>
            ) : (
              ''
            )}

            {logged ? (
              <Row justifyContent={'end'}>
                <Col col={12} md={3} alignSelf={'center'}>
                  <Button danger onClick={handleDelete}>
                    Delete this user
                  </Button>
                </Col>
              </Row>
            ) : (
              ''
            )}
          </Container>
        </Form>
      </FormContainer>
    </Fragment>
  )
}
