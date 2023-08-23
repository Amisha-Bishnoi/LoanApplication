  // import React, { Component } from 'react'
  // import {Container,Navbar,Nav, Button} from 'react-bootstrap';
  // import {Link} from 'react-router-dom';

  // export default class NavBar extends Component {
  //   render() {
  //     return (
  //       <NavBar>
  //       <Container>
  //                         <Link to="/" className="navbar-brand" style={{ color: "white" }}>
  //                           Home
  //                         </Link>
  //                         <Navbar.Toggle aria-controls="basic-navbar-nav" />
  //                         <Navbar.Collapse id="basic-navbar-nav">
  //                           <Nav className="me-auto">
  //                             <Link to="/services" className="nav-link" style={{ color: "white" }}>
  //                               Services
  //                             </Link>
  //                             <Link to="/aboutus" className="nav-link" style={{ color: "white" }}>
  //                               About Us
  //                             </Link>
  //                           </Nav>
  //                         </Navbar.Collapse>
  //                         <Navbar.Collapse className="justify-content-end">
  //                           <Navbar.Text>
  //                             <Button variant="info" as={Link} to="/login">
  //                               Login
  //                             </Button>
  //                           </Navbar.Text>
  //                         </Navbar.Collapse>
  //                       </Container>
  //       </NavBar>
  //     )
  //   }
  //}

  import React, { Component } from 'react';
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap';

export default class NavBar extends Component {
  render() {
    return (
      // <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark">
      //   <Container fluid>
      //     <Row>
      //       <Col xs={6} sm={6} md={6} lg={6}>
      //         <Navbar.Brand href="#home" style={{ color: 'white' }}>
      //           Loan Application
      //         </Navbar.Brand>
      //       </Col>
      //       <Col xs={6} sm={6} md={6} lg={6} style={{float:'right'}}>
      //         <Nav className="justify-content-end" style={{float:"right"}}>
      //           <Nav.Link href="#home" style={{ color: 'white' }}>
      //             Home
      //           </Nav.Link>
      //           <Nav.Link href="ServicesHome" style={{ color: 'white' }}>
      //             Services
      //           </Nav.Link>
      //           <Nav.Link href="#about" style={{ color: 'white' }}>
      //             About Us
      //           </Nav.Link>
      //         </Nav>
      //       </Col>
      //     </Row>
      //   </Container>
      // </Navbar>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Container>
        <h1 style={{textAlign:"center", color:"white"}}>Loan Application</h1>
      </Container>
    </Navbar>

    );
  }
}

