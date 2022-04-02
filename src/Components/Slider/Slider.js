import React, { useEffect, useState } from "react";
import { Carousel, Spinner } from "react-bootstrap";
import "./slider.css";
const Slider = () => {
  const [sliderData, setSliderData] = useState([]);
  useEffect(() => {
    fetch("https://pucpc.herokuapp.com/slider")
      .then((res) => res.json())
      .then((data) => setSliderData(data[0]?.images));
  }, []);
  console.log(sliderData);
  return (
    <div className="pucpc-slider">
      <div className="slider-text text-center">
        <h1 className="slider-title"> Welcome to prime University</h1>
        <h1 className="slider-title"> Computer Programming Club </h1>
      </div>
      {sliderData ? (
        <Carousel>
          {sliderData?.map((obj) => (
            <Carousel.Item
              className="carousel-item"
              key={obj.id}
              interval={2000}
            >
              <img
                className="d-block mx-auto slider-img"
                src={obj.img}
                alt="Slider"
              />

              {/* <Carousel.Caption
                className="title"
                style={{ fontSize: "clamp(2rem,90vw,3rem)" }}
              >
                Welcome to prime University Computer Programming Club 
                
              </Carousel.Caption> */}
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (
        <Spinner className="mx-auto" animation="border" variant="danger" />
      )}
    </div>
  );
};
export default Slider;
