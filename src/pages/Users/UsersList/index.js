import React, { Fragment } from 'react'

import { Container, Row, Col } from 'styled-bootstrap-grid'
import GlobalStyle from '../../../styles/global'
// import { Container } from './styles';

import UserRow from './UserRow'

const UsersList = () => (
  <Fragment>
    <GlobalStyle />
    <Container>
      <Row>
        <Col col={12}>
          <ul>
            <UserRow user={{ name: 'Paulo Cesar' }} />
            <UserRow user={{ name: 'Suelen Helmann' }} />
          </ul>
        </Col>
      </Row>
    </Container>
  </Fragment>
)

export default UsersList
