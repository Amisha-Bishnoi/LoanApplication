import React, { Component } from 'react';
import { Table,Button } from 'react-bootstrap';
import personal from '../personal.png'

export default class FetchLoanById extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loanId: '',
      loan: null,
      error: null,
    };
  }

  handleLoanIdChange = (event) => {
    this.setState({ loanId: event.target.value });
  };

  fetchLoanById = async () => {
    const { loanId } = this.state;

    try {
      const response = await fetch(`http://localhost:8080/fetchLoanById?id=${loanId}`);
      const data = await response.json();

      if (response.ok) {
        this.setState({ loan: data.loan, error: null });
      } else {
        this.setState({ error: 'Failed to fetch loan. Please check the ID.' });
      }
    } catch (error) {
      this.setState({ error: 'An error occurred while fetching the loan.' });
    }
  };

  render() {
    const { loanId, loan, error } = this.state;

    return (
      <div style={{textAlign:'center', margin: "20px"}}>
        
        <h2><img src={personal} alt="dfd" style={{height:"45px", marginRight:"10px"}} />Fetch Loan By ID</h2>
        <form onSubmit={this.handleFormSubmit}>
        <div style={{ margin: "10px 0" }}>
          <label>Loan ID:</label>
          <input type="number" value={loanId} onChange={this.handleLoanIdChange} style={{ marginLeft: "10px", marginRight: "20px" }}/>   
          <Button onClick={this.fetchLoanById}  style={{backgroundColor:"grey",border:"1px solid black"}}>Fetch Loan</Button>
          </div>
          </form>
          <hr  style={{ margin: "20px 0" }}/>
        
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {loan && (
          <div>
            <h4>Loan Details</h4>
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
     
              <tr key={loan.id}>
                <td>{loan.id}</td>
                <td>{loan.customerId}</td>
                <td>{loan.amount}</td>
                <td>{loan.interestRate}</td>
                <td>{loan.approvalStatus}</td>
                <td>{loan.createdAt}</td>
                <td>{loan.updatedAt}</td>
              </tr>
            
       </tbody>
            </Table>
          </div>
        )}
      </div>
    );
  }
}