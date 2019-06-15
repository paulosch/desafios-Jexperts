import React from 'react'
import { useSelector } from 'react-redux'

import { Container, Row, Col } from 'styled-bootstrap-grid'
import { HeaderContainer, Logout } from './styles'

export default function Header() {
  const { data, logged } = useSelector(state => state.user)

  return (
    <HeaderContainer>
      <Container>
        <Row>
          <Col col={12} md={6}>
            <p>Welcome {data.firstName}!</p>
          </Col>
          <Col col={12} md={6}>
            <Logout>
              <a href={'/'}>{logged ? 'Logout' : 'Login'}</a>
            </Logout>
          </Col>
        </Row>
      </Container>
    </HeaderContainer>
  )
}
