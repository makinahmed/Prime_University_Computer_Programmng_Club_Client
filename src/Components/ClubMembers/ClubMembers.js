import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const ClubMembers = (props) => {
    

  const { name, img, position } = props?.clubMember;

  return (
    <>
      <div>
        <img className="img-fluid w-25" src={img} alt="" />
      </div>
      <h5>{name}</h5>
      <p>{position}</p>
    </>
  );
};

export default ClubMembers;
