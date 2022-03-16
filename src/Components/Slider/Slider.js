import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
// import { sliderData } from "../../FakeData/sliderData";
import './slider.css';
const Slider = () => {
  const [sliderData, setSliderData] = useState([]);
  useEffect(() => {
    fetch("/sliderData.JSON")
      .then((res) => res.json())
      .then((data) => setSliderData(data?.images));
  }, []);
  // console.log(sliderData[0], 'afas')
//   sliderData.map((i) => console.log(i.img, "imgggggggg"));
  return (
    <div>
      <Carousel>
        {sliderData?.map((obj) => (
          <Carousel.Item
            style={{ height: "90vh" }}
            key={obj.id}
            interval={1000}
          >
            <img
              className="d-block w-100 slider-img"
              src={obj.img}
              alt="Slider"
            />
            <Carousel.Caption>
              <h3 className="  title">Welcome to prime University Computer Programming Club</h3>
              <p>PUCPC</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};
export default Slider;
