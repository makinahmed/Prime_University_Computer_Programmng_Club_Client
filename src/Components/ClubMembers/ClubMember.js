import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ClubMembers from "./ClubMembers";

const ClubMember = () => {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    fetch("/clubMembers.JSON")
      .then((res) => res?.json())
      .then((data) => setMembers(data));
  }, []);
console.log(members);
  return (
    <>
      <Container>
        <Row className="my-3">
          <Col sm={12} className="w-50 m-auto">
            <ClubMembers key={members[0]} clubMember={members[0]} />
          </Col>
        </Row>
        <Row className="my-3">
          {members.slice(1, 3).map((a) => (
            <Col sm={12} md={4} className="  mx-auto">
              <ClubMembers key={a.id} clubMember={a} />
            </Col>
          ))}
        </Row>
        <Row className="my-3">
          <Col sm={12} className="w-50 m-auto">
            <ClubMembers key={members[3]} clubMember={members[3]} />
          </Col>
        </Row>
        <Row className="my-3">
          {members.slice(4, 9).map((a) => (
            <Col sm={12} md={4} className=" m-auto">
              <ClubMembers key={a.id} clubMember={a} />
            </Col>
          ))}
        </Row>
        <Row className="my-3">
          <Col sm={12} className="w-50 m-auto">
            <ClubMembers key={members[9]} clubMember={members[9]} />
          </Col>
        </Row>
        <Row className="my-3">
          {members.slice(10, 17).map((a) => (
            <Col sm={12} md={4} className="m-auto">
              <ClubMembers key={a.id} clubMember={a} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ClubMember;
