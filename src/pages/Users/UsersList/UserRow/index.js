import React from 'react'

import { Row, Col } from 'styled-bootstrap-grid'
// import { Container } from './styles';

const UserRow = ({ user }) => (
  <li>
    <Row>
      <Col col={6} sm={8} md={10}>
        {user.name}
      </Col>
      <Col col={6} sm={4} md={2}>
        Funções
      </Col>
    </Row>
  </li>
)

export default UserRow
