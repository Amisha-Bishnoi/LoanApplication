import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import { addCustomer } from '../Api';

  function AddCustomer() {
    const [formData, setFormData] = useState({
      name: '',
      age: 0,
      gender: 0,
      email: '',
      mobile: '',
    });
  
   
    const [submissionStatus, setSubmissionStatus] = useState({
      success: false,
      error: null,
    });

    const validateCustomerId = (customerId) => {
      return Number.isInteger(Number(customerId)) && customerId > 0;
    };
    const validateEmail = (email) => {
      // Basic email format validation using a simple regex pattern
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    };

    const validatePhoneNumber = (phoneNumber) => {
      // Basic phone number format validation using a regex pattern
      const phoneNumberPattern = /^\d{10,12}$/;
      return phoneNumberPattern.test(phoneNumber);
    };
  
   const  handleSubmit = async (event) => {
      event.preventDefault();
      // Basic validations
      if (
        formData.age <= 0 ||
        !Number.isInteger(Number(formData.age))||
        !formData.gender ||
        !formData.email ||
        !formData.mobile ||
        !validateEmail(formData.email)||
        !validatePhoneNumber(formData.mobile)
      ) {
        setSubmissionStatus({
          success: false,
          error: 'Please fill out all fields with valid data',
        });
        return;
      }
  
      try {
        const response = await addCustomer(formData);
        if (response.success) {
          setSubmissionStatus({ success: true, error: null });
        } else {
          setSubmissionStatus({ success: false, error: 'Failed to add customer' });
        }
      } catch (error) {
        console.log('Error adding customer:', error);
        setSubmissionStatus({ success: false, error: 'An error occurred' });
      }
    };

    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
    const handleGenderChange = (event) => {
      setFormData((prevData) => ({
        ...prevData,
        gender: event.target.value,
      }));
    };
    return (
  
    <Container>
        <h2 style={{textAlign:"center"}}><i class="fa fa-user" style={{fontSize:"30px", marginRight:"10px"}} />Add Customer</h2>
        <hr/>
        {submissionStatus.success && (
        <div className="success-message success">Customer added successfully!</div>
      )}
      {submissionStatus.error && (
        <div className="error-message error">{submissionStatus.error}</div>
      )}

    <Form onSubmit={handleSubmit}>

    <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCustomerId">
            <Form.Label>Customer Id</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Id"
              name="customerId"
              value={formData.customerId}
              onChange={handleChange}
             
              isInvalid={!validateCustomerId(formData.customerId)}
              />
              {!validateCustomerId(formData.customerId) && (
                <Form.Control.Feedback type="invalid">
                  Customer ID must be a positive integer.
                </Form.Control.Feedback>
              )}

          </Form.Group>

        <Form.Group as={Col} controlId="formGridCustomerName">
          <Form.Label>Customer Name</Form.Label>
          <Form.Control type="text" placeholder="Custome Name"  name="name"
              onChange={handleChange}/>
        </Form.Group>
      </Row>


      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridAge">
          <Form.Label>Age</Form.Label>
          <Form.Control type="number" placeholder="Customer Age.."  name="age"
              onChange={handleChange}/>
              {!Number.isInteger(Number(formData.age)) ||
            Number(formData.age) <= 0 ? (
              <div className="error-message error">Not a valid Age</div>
            ) : null}
        </Form.Group>

        <Form.Group as={Col} controlId="formGridGender">
            <Form.Label>Gender</Form.Label>
            <div key="gender-radio" className="mb-3">
              <Form.Check
                inline
                type="radio"
                label="Male"
                value="male"
                name="gender"
                checked={formData.gender === 'male'}
                onChange={handleGenderChange}
              />
              <Form.Check
                inline
                type="radio"
                label="Female"
                value="female"
                name="gender"
                checked={formData.gender === 'female'}
                onChange={handleGenderChange}
              />
            </div>
          </Form.Group>
      </Row>


      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email"  name="email"
              onChange={handleChange}/>
               {!validateEmail(formData.email) && (
    <div className="error-message error">Invalid email format</div>
  )}
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPhone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="text" placeholder="Phone Number"  name="mobile"
              onChange={handleChange}/> {!validatePhoneNumber(formData.mobile) && (
                <div className="error-message error">Invalid phone number format</div>
              )}
        </Form.Group>
      </Row>

      <Button style={{backgroundColor:"grey",border:"1px solid black"}} type="submit">
        Submit
      </Button>
    </Form>
    </Container>
  );
}

export default AddCustomer;