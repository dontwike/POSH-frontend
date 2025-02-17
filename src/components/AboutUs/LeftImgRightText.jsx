import React from "react";

const LeftImgRightText = (props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
      {/* Left Side - Image */}
      <div className="relative">
        <img
          src={props.img1}
          alt="Shop collections"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Right Side - Text */}
      <div className="flex flex-col justify-center lg:pl-5">
        <h1 className="text-black mt-2 text-left text-[64px]">{props.heading}</h1>

        {/* ✅ Changed <p> to <div> to prevent hydration error */}
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
