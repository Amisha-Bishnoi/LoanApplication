import React, { Component } from 'react';
import { Container, Image } from 'react-bootstrap';
import LoanHome from '../loanHome.jpg';
import first from '../1.jpg';
import second from '../2.jpeg';
import third from '../3.jpg';
import Carousel from 'react-bootstrap/Carousel';
import './HomeBody.css'; // Import a custom CSS file for styling

export default class HomeBody extends Component {
  render() {
    return (
      <Container fluid="lg">
        <Carousel>
          <Carousel.Item>
            <div className="carousel-image-container">
              <Image src={LoanHome} thumbnail className="carousel-image" />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-image-container">
              <Image src={third} thumbnail className="carousel-image" />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-image-container">
              <Image src={first} thumbnail className="carousel-image" />
            </div>
          </Carousel.Item>
        </Carousel>
      </Container>
    );
  }
}
