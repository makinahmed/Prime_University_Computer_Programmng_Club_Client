import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import "./Gallary.css";
const Gallary = () => {
  const [galleryData, setGalleryData] = useState([]);
  useEffect(() => {
    fetch("/gallaryData.JSON")
      .then((res) => res.json())
      .then((data) => setGalleryData(data?.contest1));
  }, []);

  //   galleryData.map(a=>console.log(a.img, ' im img'))
  return (
    <>
      <h1>Gallery</h1>
      <div class="container">
        <div class="row">
          {galleryData?.slice(10, 30).map((a) => (
            <div key={a?.id} class="col-md-3 g-4 md-6">
              <img className="gallery-img" src={a?.img} alt="" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
   
};
// https://i.ibb.co/pXFcdBn/IMG-20220308-141010-474.jpg
export default Gallary;
