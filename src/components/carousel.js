import React from "react";
import { Carousel } from "react-bootstrap";
import carousel1 from "../images/carousel/carousel-1.jpg";
import carousel2 from "../images/carousel/carousel-2.jpg";
import carousel3 from "../images/carousel/carousel-3.jpg";

export default function carousel() {
  return (
    <div className="vh-90">
      <Carousel variant="dark" className="my-5 myCarousel">
        <Carousel.Item interval={3500}>
          <img
            className=" d-block w-100"
            src={carousel1}
            alt="First slide"
            style={{
              borderRadius: "5px",
            }}
          />
        </Carousel.Item>
        <Carousel.Item interval={3500}>
          <img
            className="d-block w-100"
            src={carousel2}
            alt="Second slide"
            style={{ borderRadius: "5px" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carousel3}
            alt="Third slide"
            style={{ borderRadius: "5px" }}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
