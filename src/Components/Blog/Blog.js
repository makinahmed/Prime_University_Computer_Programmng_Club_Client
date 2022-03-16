import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import './Blog.css';
const Blog = () => {
  const [blogData, setBlogData] = useState([]);
  useEffect(() => {
    fetch("/blogData.JSON")
      .then((res) => res.json())
      .then((data) => setBlogData(data));
  }, []);

  //   galleryData.map(a=>console.log(a.img, ' im img'))
  return (
    <>
      <h1>Blog</h1>
      <div class="container ">
        <div class="row g-5">
          {blogData.map((data) => (
            <div className="col col-md-4">
              <Card style={{ width: "18rem", height: "25rem" }}>
                <Card.Img variant="top" className="blog-card" src={data.img} />
                <Card.Body>
                  <Card.Title>
                    <h5 className="fw-bold">{data.title}</h5>
                  </Card.Title>
                  <Card.Text>{data.description.slice(0, 120)}</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
