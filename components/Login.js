// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

// export default function HomePageBody() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleLogin = async (event) => {
//         event.preventDefault();
//         try {
//             const response = await fetch('http://localhost:8080/findCustomerForLogin', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json', // Use application/json for JSON data
//                 },
//                 body: JSON.stringify({ email, password }), // Send data as JSON string
//             });

//             if (response.ok) {
//                 // Handle successful login
//                 console.log('Login successful');
//             } else {
//                 // Handle login failure
//                 console.log('Login failed');
//             }
//         } catch (error) {
//             console.error('Error during login:', error);
//         }
//     };

//     return (
//         <Form onSubmit={handleLogin}>
//             <Form.Group className="mb-3" controlId="formBasicEmail">
//                 <Form.Label>Email address</Form.Label>
//                 <Form.Control type="email" placeholder="Enter email" name='email' onChange={(e) => setEmail(e.target.value)} />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicPassword">
//                 <Form.Label>Password</Form.Label>
//                 <Form.Control type="password" placeholder="Password" name='password' onChange={(e) => setPassword(e.target.value)} />
//             </Form.Group>

//             <Button variant="primary" type="submit">
//                 Submit
//             </Button>
//         </Form>
//     );
// }


import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom'; // Import useHistory

const Login = () => {
  // const history = useHistory(); // Get the history object
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:8080/findCustomerForLogin?email=${email}&password=${password}`);
      console.log('Response Status:', response.status);
      const data = await response.json();
      console.log('Response Data:', data);

      if (data.success) {
        // Redirect to homepage on successful login
       console.log("Login Success");
      } else {
        console.log('Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
     

<Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={handleEmailChange} />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={handlePasswordChange}/>
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  );
};

export default Login;
