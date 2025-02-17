import React from "react";
import ImageComp from "../ImageComp";

const BothSideImg = (props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <ImageComp src={props.img1} alt="Shop collections" />

      <ImageComp src={props.img1} alt="About us" />
    </div>
  );
};

export default BothSideImg;
