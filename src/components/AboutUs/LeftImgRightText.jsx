import React from "react";
import ImageComp from "../ImageComp";

const LeftImgRightText = (props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
      {/* Left Side - Image */}
      <ImageComp src={props.img1} alt="Shop collections" />

      {/* Right Side - Text */}
      <div className="flex flex-col justify-center lg:pl-5">
        <h1 className="text-black mt-2 text-left text-[64px]">{props.heading}</h1>

        <div className="text-[#666666] text-[14px]">
          {props.points.map((point, index) => (
            <p className="text-[#666666] text-[14px]" key={index}>{point}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftImgRightText;
