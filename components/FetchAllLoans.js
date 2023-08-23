import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import personal from '../personal.png'

export default class FetchAllLoans extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loans: [],
    };
  }

  componentDidMount() {
    this.fetchAllLoans();
  }

  fetchAllLoans = () => {
    fetch('http://localhost:8080/fetchAllLoans') // Update the URL with your API endpoint
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          this.setState({ loans: data.loans });
        } else {
          console.error('Failed to fetch loans:', data.message);
        }
      })
      .catch(error => {
        console.error('Error fetching loans:', error);
      });
  };

  render() {
    const { loans } = this.state;

    return (
      <div>
        <h1 style={{textAlign:'center'}}><img src={personal} alt="dfd" style={{height:"45px", marginRight:"10px"}} />All Loans</h1>

        <Table striped bordered hover variant="grey" size="sm" style={{ backgroundColor: '#333', color: '#fff',border:"1px solid black" }}>
         <thead>
        <tr>
        <th>Loan ID</th>
              <th>Customer ID</th>
              <th>Amount</th>
              <th>Interest Rate</th>
              <th>Approval Status</th>
              <th>Created At</th>
              <th>Updated At</th>
        </tr>
      </thead>
      <tbody>
      {loans.map(loan => (
              <tr key={loan.id}>
                <td>{loan.id}</td>
                <td>{loan.customerId}</td>
                <td>{loan.amount}</td>
                <td>{loan.interestRate}</td>
                <td>{loan.approvalStatus}</td>
                <td>{loan.createdAt}</td>
                <td>{loan.updatedAt}</td>
              </tr>
            ))}
       </tbody>
      </Table>
          </div>
    );
  }
}
