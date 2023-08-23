import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

export default function FindCustomerWithLoan() {
  const [customersWithLoans, setCustomersWithLoans] = useState([]);

  useEffect(() => {
    fetchCustomersWithLoans();
  }, []);

  const fetchCustomersWithLoans = async () => {
    try {
      const response = await fetch('http://localhost:8080/findCustomerWithLoan');
      if (response.ok) {
        const data = await response.json();
        setCustomersWithLoans(data.customerList);
      } else {
        console.error('Failed to fetch customers with loans');
      }
    } catch (error) {
      console.error('Error while fetching customers with loans', error);
    }
  };

  return (
    <div>
     <h2 style={{textAlign:'center'}}><i class="fa fa-user" style={{fontSize:"30px", marginRight:"10px"}} />Customer Details</h2>
       <Table striped bordered hover variant="grey" size="sm" style={{ backgroundColor: '#333', color: '#fff',border:"1px solid black" }}>
       
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
          {customersWithLoans.map((customer) => (
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
