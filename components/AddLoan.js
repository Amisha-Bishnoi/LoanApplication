import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import personal from '../personal.png'

export default function AddLoan() {
  const [loanData, setLoanData] = useState({
    customerId: '',
    id: '',
    amount: '',
    interestRate: '',
    approvalStatus: '',
  });

  const [submissionStatus, setSubmissionStatus] = useState({
    success: false,
    error: null,
  });

// Validation for customer ID
const validateCustomerId = (customerId) => {
  return Number.isInteger(Number(customerId)) && customerId > 0;
};

// Validation for loan ID
const validateLoanId = (loanId) => {
  return Number.isInteger(Number(loanId)) && loanId > 0;
};

// Validation for amount
const validateAmount = (amount) => {
  return Number(amount) > 0;
};

// Validation for interest rate
const validateInterestRate = (interestRate) => {
  return Number(interestRate) > 0;
};

// Validation for approval status
const validateApprovalStatus = (approvalStatus) => {
  return approvalStatus.trim() !== ''; // Basic validation for non-empty string
};


  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoanData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      !loanData.customerId ||
      !loanData.id ||
      !loanData.amount ||
      !loanData.interestRate ||
      !loanData.approvalStatus
    ) {
      setSubmissionStatus({
        success: false,
        error: "Please fill out all the required fields.",
      });
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/insertLoan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loanData),
      });

      if (response.ok) {
        // Handle success
        console.log('Loan added successfully');
        console.log(loanData);
        setSubmissionStatus({ success: true, error: null });
        setLoanData({
          customerId: '',
          id: '',
          amount: '',
          interestRate: '',
          approvalStatus: '',
        });
      } else {
        // Handle error
        console.error('Failed to add loan');
        console.log(loanData);
        setSubmissionStatus({ success: false, error: 'Failed to add loan' });
      }
    } catch (error) {
      console.error('Error while adding loan', error);
      setSubmissionStatus({ success: false, error: 'An error occurred while adding the loan' });
    }
  };

  return (
    <div style={{overflow:"hidden"}}>
      <h2 style={{ textAlign: 'center' }}>
      <img src={personal} alt="dfd" style={{height:"45px", marginRight:"10px"}} />
        Add Loan</h2>
        <hr/>
      {submissionStatus.success && (
        <div className="success-message success">Loan added successfully!</div>
      )}
      {submissionStatus.error && (
        <div className="error-message error">{submissionStatus.error}</div>
      )}
      <form onSubmit={handleSubmit}>
       

        <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCustomerId">
          <Form.Label>Customer Id</Form.Label>
          <Form.Control type="number" placeholder="Enter Id"  name="customerId" value={loanData.customerId} onChange={handleChange}
           isInvalid={!validateCustomerId(loanData.customerId)}
   
  />
  <Form.Control.Feedback type="invalid">
    Customer ID must be a positive integer.
  </Form.Control.Feedback>

        </Form.Group>

        <Form.Group as={Col} controlId="formGridCustomerName">
          <Form.Label>Loan Id</Form.Label>
          <Form.Control type="number" placeholder="Loan ID"  name="id"
              onChange={handleChange} isInvalid={!validateLoanId(loanData.id)}
              
            />
            <Form.Control.Feedback type="invalid">
              Please enter a valid loan ID.
            </Form.Control.Feedback>
        </Form.Group>
      </Row>


      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridAge">
          <Form.Label>Amount</Form.Label>
          <Form.Control type="number" placeholder="Loan Amount"  name="amount"
              onChange={handleChange}isInvalid={!validateAmount(loanData.amount)}
              min="1"
            />
            <Form.Control.Feedback type="invalid">
              Please enter a valid loan amount.
            </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridGender">
          <Form.Label>Interest Rate</Form.Label>
          <Form.Control type="number" placeholder="Interest Rate" name="interestRate"
              onChange={handleChange} isInvalid={!validateInterestRate(loanData.interestRate)}
           
            />
            <Form.Control.Feedback type="invalid">
              Please enter a valid interest rate.
            </Form.Control.Feedback>
        </Form.Group>
      </Row>


      <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridApprovalStatus">
  <Form.Label>Approval Status</Form.Label>
  <div key="approval-status-radio" className="mb-3">
    <Form.Check
      inline
      type="radio"
      label="Approved"
      value="Approved"
      name="approvalStatus"
      checked={loanData.approvalStatus === 'Approved'}
      onChange={handleChange}
    />
    <Form.Check
      inline
      type="radio"
      label="Pending"
      value="Pending"
      name="approvalStatus"
      checked={loanData.approvalStatus === 'Pending'}
      onChange={handleChange}
    />
  </div>
  <Form.Control.Feedback type="invalid">
    Please select an approval status.
  </Form.Control.Feedback>
</Form.Group>


        </Row>

      <Button style={{backgroundColor:"grey",border:"1px solid black"}} type="submit">
        Submit
      </Button>
      </form>
    </div>
  );
}
