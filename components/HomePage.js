import React, { Component } from 'react'
import NavBar from './NavBar'
import Login from './Login'
import { Container, Row } from 'react-bootstrap'

export default class  extends Component {
  render() {
    return (
      <Container fluid >
      <Row >
        <NavBar></NavBar>
      </Row>
      <Login></Login>
      </Container>
    )
  }
}
