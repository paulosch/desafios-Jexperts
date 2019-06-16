import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Creators as LoginCreators } from '../../store/ducks/auth'

import { Container, Row, Col } from 'styled-bootstrap-grid'
import { HeaderContainer, Logout } from './styles'

export default function Header() {
  const { data, logged } = useSelector(state => state.user)
  const dispatch = useDispatch()

  function logout() {
    dispatch(LoginCreators.logoutRequest())
  }

  return (
    <HeaderContainer>
      <Container>
        <Row>
          <Col col={12} md={6}>
            <p>Welcome {data.firstName}!</p>
          </Col>
          <Col col={12} md={6}>
            <Logout>
              {logged ? (
                <button onClick={logout}>Logout</button>
              ) : (
                <a href={'/'}>Login</a>
              )}
            </Logout>
          </Col>
        </Row>
      </Container>
    </HeaderContainer>
  )
}
