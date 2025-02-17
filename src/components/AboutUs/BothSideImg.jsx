import React from "react";

const BothSideImg = (props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="relative">
        <img
          src={props.img1}
          alt="Shop collections"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="relative">
        <img
          src={props.img1}
          alt="About us"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default BothSideImg;
