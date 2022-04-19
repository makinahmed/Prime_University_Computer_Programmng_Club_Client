import React from "react";
import Contest22 from "../../Components/Gallary/Contest22";
import Fest from "../../Components/Gallary/Fest";
import Session from "../../Components/Gallary/Session";

const Gallery = () => {
  return (
    <div className="mb-5">
        <h1 className="text-center my-5 ">Our Gallery</h1>
      <Contest22 />
      <Fest />
      <Session />
    </div>
  );
};

export default Gallery;
