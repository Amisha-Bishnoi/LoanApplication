import React from 'react';
import {Container,Row} from 'react-bootstrap';

import HomeBody from './HomeBody';

function Home() {
  return (
    <Container fluid>


      <Row>
        <HomeBody></HomeBody>
      </Row>

     
   </Container>

   
  );
}

export default Home;
