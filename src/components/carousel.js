import React from "react";
import { Carousel } from "react-bootstrap";
import carousel1 from "../images/carousel/carousel-1.jpg";
import carousel2 from "../images/carousel/carousel-2.jpg";
import carousel3 from "../images/carousel/carousel-3.jpg";

export default function carousel() {
  return (
    <div className="vh-90">
      <Carousel variant="dark" className="my-5">
        <Carousel.Item interval={3500}>
          <img className="d-block w-100" src={carousel1} alt="First slide" />
          <Carousel.Caption>
            <h3>Rods</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3500}>
          <img className="d-block w-100" src={carousel2} alt="Second slide" />
          <Carousel.Caption>
            <h3>Lures</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={carousel3} alt="Third slide" />
          <Carousel.Caption>
            <h3>Tackle</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
