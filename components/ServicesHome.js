import React, { Component } from 'react'
import { Col, Container, NavLink, Row } from 'react-bootstrap'
import NavBar from './NavBar'
import Footer from './Footer'
import { Route, Routes, Switch } from 'react-router-dom'
import Home from './Home'
// import { Link, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import { Link } from 'react-router-dom'

import AddCustomer from './AddCustomer'
import UpdateCustomer from './UpdateCustomer'
import FetchCustomerById from './FetchCustomerById'
import FetchAllCustomers from './FetchAllCustomers'
import AddLoan from './AddLoan'
import FetchLoanById from './FetchLoanById'
import FetchAllLoans from './FetchAllLoans'
import Advertisement from './Advertisement'
import FindCustomerWithLoan from './FindCustomerWithLoan'

export default class ServicesHome extends Component {
  render() {
    return (
      <Container fluid >
        <Row >
          <NavBar></NavBar>
        </Row>

        <Row style={{ backgroundColor: 'lightgrey' }}>
          <Col sm={10} xs={10} md={10} lg={10} style={{ backgroundColor: 'gainsboro' }}>


            <div style={{ backgroundColor: "lightgrey", float: "left", height: "80vh", padding: "10px", display: "block" }}>
              <ul style={{ listStyleType: "none",textDecoration:"none" }}>
              <li>
                  <Link style={{textDecoration:"none", color:"black"}} activeClassName="active" to="/home"><h4>Home</h4></Link>

                </li>
                <hr/>
                <li>
                  <Link  style={{textDecoration:"none", color:"black"}} activeClassName="active" to="/addCustomer"><h4>Add Customer</h4></Link>

                </li><hr/>
                <li>
                  <Link style={{textDecoration:"none", color:"black"}} activeClassName="active" to="/updateCustomer"><h4>Update Customer</h4></Link>
                </li>
                <hr/>
                <li>
                  <Link style={{textDecoration:"none", color:"black"}} activeClassName="active" to="/fetchCustomerById"><h4>Fetch Customer By Id</h4></Link>
                </li><hr/>
                <li>
                  <Link style={{textDecoration:"none", color:"black"}} activeClassName="active" to="/fetchAllCustomer"><h4>Fetch All Customer</h4></Link>
                </li>
                <hr/>
                <li>
                  <Link style={{textDecoration:"none", color:"black"}} activeClassName="active" to="/addLoan"><h4>Add Loan</h4></Link>
                </li>
                <hr/>
                <li>
                  <Link style={{textDecoration:"none", color:"black"}} activeClassName="active" to="/fetchLoanById"><h4>Fetch Loan By Id</h4></Link>
                </li>
                <hr/>
                <li>
                  <Link style={{textDecoration:"none", color:"black"}} activeClassName="active" to="/fetchAllLoans"><h4>Fetch All Loans</h4></Link>
                </li> <hr/>
                <li>
                  <Link style={{textDecoration:"none", color:"black"}} activeClassName="active" to="/findCustomerWithLoan"><h4>Fetch Customer With Loan</h4></Link>
                </li>

              </ul>
            </div>

            <div style={{ height: "80vh", overflow: "auto", padding: "10px" }}>
              <Switch>
              <Route path="/home" component={Home} />
                <Route path="/addCustomer" component={AddCustomer} />
                <Route path="/updateCustomer" component={UpdateCustomer} />
                <Route path="/fetchCustomerById" component={FetchCustomerById} />
                <Route path="/fetchAllCustomer" component={FetchAllCustomers} />
                <Route path="/addLoan" component={AddLoan} />

                <Route path="/fetchLoanById" component={FetchLoanById} />
                <Route path="/fetchAllLoans" component={FetchAllLoans} />
                <Route path="/findCustomerWithLoan" component={FindCustomerWithLoan} />
              </Switch>
            </div>

          </Col>
          <Col sm={2} xs={2} md={2} lg={2}>
         
            <Advertisement/>
           
          </Col>

        </Row>

        <Row >
          <Col sm={12} xs={12} md={12} lg={12} style={{ textAlign: "center" }}>
            <Footer></Footer>
          </Col>

        </Row>

      </Container>
    )
  }
}
