import React from 'react'

import { Container, Row, Col } from 'styled-bootstrap-grid'
import { HeaderContainer, Logout } from './styles'

const Header = ({ user }) => (
  <HeaderContainer>
    <Container>
      <Row>
        <Col col={12} md={6}>
          <p>Welcome {user.firstName}!</p>
        </Col>
        <Col col={12} md={6}>
          <Logout>
            <a href="">Logout</a>
          </Logout>
        </Col>
      </Row>
    </Container>
  </HeaderContainer>
)

export default Header
