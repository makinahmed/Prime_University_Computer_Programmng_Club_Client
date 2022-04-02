import React from "react";
import Blog from "../../Components/Blog/Blog";
import ClubMember from "../../Components/ClubMembers/ClubMember";
import Gallary from "../../Components/Gallary/Gallary";
import Slider from "../../Components/Slider/Slider";
import Teachers from "../../Components/Teachers/Teachers";
import Wings from "../../Components/Wings/Wings";

const HOME = () => {
  return (
    <>
      <Slider />
      <Gallary />
      <Blog />
      <Wings />
      <Teachers />
      <ClubMember />
    </>
  );
};

export default HOME;
