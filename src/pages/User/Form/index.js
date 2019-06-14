import React, { Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Types as UserTypes } from '../../../store/ducks/user'

import Header from '../../../components/Header'

import { Container, Row, Col } from 'styled-bootstrap-grid'
import { FormContainer, Divisor, Button, Input } from './styles'
import GlobalStyle from '../../../styles/global'

export default function Form() {
  const user = useSelector(state => state.user.data)
  const dispatch = useDispatch()

  function changeUser() {
    dispatch({ type: UserTypes.PUT_REQUEST, payload: this.state })
  }

  function handleChange(event) {
    const { target, value } = event
    const name = target.name

    let user = {
      [name]: value
    }
  }

  function handleSubmit(event) {}

  return (
    <Fragment>
      <Header user={user} />
      <GlobalStyle />
      <FormContainer>
        <form action="">
          <Container>
            <Row>
              <Col col={12} md={6}>
                <Input
                  type="text"
                  placeholder="First Name"
                  value={user.firstName}
                />
              </Col>
              <Col col={12} md={6}>
                <Input
                  type="text"
                  placeholder="Last Name"
                  value={user.lastName}
                />
              </Col>
            </Row>

            <Row>
              <Col col={12} md={6}>
                <Input type="text" placeholder="Phone" value={user.phone} />
              </Col>
              <Col col={12} md={6}>
                <Input type="email" placeholder="E-mail" value={user.email} />
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
                <Input type="text" placeholder="Login" value={user.login} />
              </Col>
            </Row>

            <Row>
              <Col col={12} md={6}>
                <Input
                  type="password"
                  placeholder="Password"
                  value={user.password}
                />
              </Col>
              <Col col={12} md={6}>
                <Input
                  type="password"
                  placeholder="Password again"
                  value={user.password}
                />
              </Col>
            </Row>

            <Row>
              <Col col={12} md={6}>
                <Button type="submit" value="Save user" />
              </Col>
              <Col col={12} md={6}>
                <Button type="submit" value="Delete user" />
              </Col>
            </Row>
          </Container>
        </form>
      </FormContainer>
    </Fragment>
  )
}
