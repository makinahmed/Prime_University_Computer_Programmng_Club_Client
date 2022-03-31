import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const Teachers = () => {
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    fetch("/teachers.JSON")
      .then((res) => res.json())
      .then((data) => setTeachers(data));
  }, []);

  return (
    <div>
      <Container>
        <Row>
          {teachers.map((teacher) => (
            <Col key={teacher.id} sm={10} md={3} className="my-3 mx-auto">
              <div>
                <img className="img-fluid w-50" src={teacher.img} alt="" />
              </div>
              <h5>{teacher.name}</h5>
              <p>{teacher.position}</p>
              <p>{teacher.email}</p>
              {/* <p>{teacher?.study}</p> */}
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Teachers;
