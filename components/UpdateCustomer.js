import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function UpdateCustomer() {
  const [formData, setFormData] = useState({
    customerId: '',
    name: '',
    age: '',
    gender: '',
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
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberPattern = /^\d{10,12}$/;
    return phoneNumberPattern.test(phoneNumber);
  };

  const validateAge = (age) => {
    return Number.isInteger(Number(age)) && age > 0;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleGenderChange = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      gender: event.target.value,
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      formData.age <= 0 ||
      !Number.isInteger(Number(formData.age)) ||
      !formData.gender ||
      !formData.email ||
      !formData.mobile ||
      !validateEmail(formData.email) ||
      !validatePhoneNumber(formData.mobile)
    ) {
      setSubmissionStatus({
        success: false,
        error: 'Please fill out all fields with valid data',
      });
      return;
    }

    try {
      const response = await fetch(`http://localhost:8080/updateCustomer?customerId=${formData.customerId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmissionStatus({ success: true, error: null });
        console.log('Customer updated successfully');
      } else {
        setSubmissionStatus({ success: false, error: 'Failed to update customer' });
        console.error('Failed to update customer');
      }
    } catch (error) {
      setSubmissionStatus({ success: false, error: 'Error while updating customer' });
      console.error('Error while updating customer', error);
    }
  };

  return (
    <Container>
      <h2 style={{ textAlign: 'center' }}><i class="fa fa-user" style={{fontSize:"30px", marginRight:"10px"}} />Update Customer</h2>
      <hr />
      {submissionStatus.success && (
        <div className="success-message success">Customer updated successfully!</div>
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
            <Form.Control
              type="text"
              placeholder="Customer Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridAge">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="number"
              placeholder="Customer Age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              isInvalid={!validateAge(formData.age)}
              
            />
             {!validateAge(formData.age) && (
              <Form.Control.Feedback type="invalid">
                Age must be a positive integer.
              </Form.Control.Feedback>
            )}
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
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              
              isInvalid={!validateEmail(formData.email)}
              />
              {!validateEmail(formData.email) && (
                <Form.Control.Feedback type="invalid">
                  Invalid email format.
                </Form.Control.Feedback>
              )}
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPhone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Phone Number"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
             
              isInvalid={!validatePhoneNumber(formData.mobile)}
              />
              {!validatePhoneNumber(formData.mobile) && (
                <Form.Control.Feedback type="invalid">
                  Invalid phone number format.
                </Form.Control.Feedback>
              )}
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form>
    </Container>
  );
}

export default UpdateCustomer;
