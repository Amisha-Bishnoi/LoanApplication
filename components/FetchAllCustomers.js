import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

export default class FetchAllCustomers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: [],
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    // Fetch all customers when the component mounts
    this.fetchAllCustomers();
  }

  fetchAllCustomers = () => {
    fetch('http://localhost:8080/fetchAll') // Replace with your actual API endpoint
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch customers');
        }
        return response.json();
      })
      .then(data => {
        this.setState({
          customers: data.customerList,
          loading: false,
        });
      })
      .catch(error => {
        this.setState({
          loading: false,
          error: error.message,
        });
      });
  };

  render() {
    const { customers, loading, error } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <div>
        <h2 style={{textAlign:'center'}}><i class="fa fa-user" style={{fontSize:"30px", marginRight:"10px"}} />Customer Details</h2>
        <Table striped bordered hover variant="grey" size="sm" style={{ backgroundColor: 'black', color: '#fff',border:"1px solid black" }}>
         <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Mobile</th>
            </tr>
          </thead>
          <tbody>
            {customers.map(customer => (
              <tr key={customer.id}>
                <td>{customer.name}</td>
                <td>{customer.age}</td>
                <td>{customer.gender}</td>
                <td>{customer.email}</td>
                <td>{customer.mobile}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
    
  }
}
