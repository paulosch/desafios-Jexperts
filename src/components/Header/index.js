import React from 'react'

import { Container, Row, Col } from 'styled-bootstrap-grid'
// import { Container } from './styles';

const Header = ({ title }) => (
  <Container>
    <Row>
      <Col col={12}>
        <h2>{title}</h2>
      </Col>
    </Row>
  </Container>
)

export default Header
