import React from "react";
import Carousel from "react-bootstrap/Carousel";
// import { } from 'react-bootstrap'
import Slide1 from "../Images/Slide1.jpg";
import Image2 from "../Images/Image2.jpeg";
import Image3 from "../Images/Image3.jpeg";

export default function Slider() {
  return (
    <Carousel slide={false}>
      <Carousel.Item>
        <img className="d-block w-100" src={Slide1} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Image2} alt="Second slide" />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Image3} alt="Third slide" />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

