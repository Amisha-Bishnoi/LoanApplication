import React, { Component } from 'react';

export default class Advertisement extends Component {
  render() {
    return (
        <>
      <div style={{ padding: '10px',backgroundColor:"gainsboro",border:"2px solid black" , margin:"10px"}}>
        
      <marquee direction="up" scrollamount="6">
            <h6> We offer Small Business Loans</h6>
            <p style={{fontSize:"15px"}}>No Application fees - Approved in less than 24 Hours - No Upfront costs. Apply Now!</p>
          </marquee>
      </div>

<div style={{ padding: '10px',backgroundColor:"gainsboro",border:"2px solid black" , margin:"10px"}}>
<marquee direction="up" scrollamount="4">  
<h6> Easiest Business loan possible. </h6>
<p style={{fontSize:"15px"}}>We want to help you become successful. We offer trust and the lowest interest rate of 5% with that.</p>
</marquee>
</div>

<div style={{ padding: '10px',backgroundColor:"gainsboro",border:"2px solid black" , margin:"10px"}}>
<marquee direction="up" scrollamount="6">    
<h6>  Small Business Loans </h6>
<p style={{fontSize:"15px"}}>Small Business Owners. — Lowest Interest Rate. Flexible Repayment Terms. Fastest Application. Apply Now!</p>
</marquee>
</div>
</>
    );
  }
}
