/* eslint-disable no-lone-blocks */
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
// map function returns a new array 
{/*
1] map is use for traversing an array
2] map is use for traversing an array using key
*/ }
const Slider = ({ start }) => {
  return (
    <Carousel fade>
      {start.map((item) => (
        <Carousel.Item>
          <img className="d-block w-100" src={item} alt="First slide" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;
