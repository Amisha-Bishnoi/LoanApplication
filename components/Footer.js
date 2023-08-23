import React, { Component } from 'react'
// import { MDBFooter } from 'mdb-react-ui-kit';
import { Container } from 'react-bootstrap';

export default class Footer extends Component {
  render() {
    return (
    //     <MDBFooter bgColor='dark' className='text-center' fluid="lg">
    //     <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
    //       &copy; {new Date().getFullYear()} Copyright:{' '}
    //       Amisha
    //     </div>
    //   </MDBFooter>
    <Container fluid="lg" className='text-center mb-0'><footer style={{backgroundColor:"grey", width:"216.99vh",height:"10vh", position:'fixed', left:0, right:0, bottom:0}}> @Copyright Amisha</footer></Container>
    
    )
  }
}
