import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default class FetchCustomerById extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customerId: '',
      customer: {},
      error: null,
    };
  }

  handleInputChange = event => {
    this.setState({ customerId: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.fetchCustomerById();
  };

  fetchCustomerById = () => {
    const { customerId } = this.state;

    fetch(`http://localhost:8080/fetchById?cId=${customerId}`)
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          this.setState({ customer: data.customer, error: null });
        } else {
          this.setState({ customer: {}, error: data.message });
        }
      })
      .catch(error => {
        console.error('Error fetching customer:', error);
        this.setState({ customer: {}, error: 'An error occurred while fetching customer.' });
      });
  };

  render() {
    const { customerId, customer, error } = this.state;

    const tableRows = Object.keys(customer).length > 0 ? (
      <tr>
        <td>{customer.name}</td>
        <td>{customer.email}</td>
        <td>{customer.age}</td>
        <td>{customer.gender}</td>
        <td>{customer.mobile}</td>
      </tr>
    ) : null;

    return (
      <div style={{ textAlign: "center", margin: "20px" }}>
      
         <h2> <i class="fa fa-user" style={{fontSize:"30px", marginRight:"10px"}} />Fetch Customer by ID</h2>
        <form onSubmit={this.handleFormSubmit}>
          <div style={{ margin: "10px 0" }}>
            <label htmlFor="customerIdInput"><b>Enter Customer ID:</b></label>
            <input
              type="number"
              id="customerIdInput"
              value={customerId}
              onChange={this.handleInputChange}
              style={{ marginLeft: "10px", marginRight: "20px" }}
            />
            <Button type="submit" style={{backgroundColor:"grey",border:"1px solid black"}}>Fetch Customer</Button>
          </div>
        </form>
        <hr style={{ margin: "20px 0" }} />
        {error && <p className='error'>Error: {error}</p>}
        {tableRows && (
          <div>
            <h3>Customer Details</h3>
            <Table striped bordered hover variant="grey" size="sm" style={{ backgroundColor: '#333', color: '#fff',border:"1px solid black" }}>
         <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>Mobile</th>
                </tr>
              </thead>
              <tbody>
                {tableRows}
              </tbody>
            </Table>
          </div>
        )}
      </div>
    );
  }
}
