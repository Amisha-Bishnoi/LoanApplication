
export const addCustomer = async (customerData) => {
  
  try{ 
     const response = await fetch(`http://localhost:8080/insert`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(customerData),
  });

  return response.json();
}
catch (error) {
    console.log('Error in addCustomer:', error);
    throw error;
}
};


