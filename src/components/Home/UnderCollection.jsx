import React from "react";

const UnderCollection = (props) => {
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative">
          <img
            src={props.img1}
            alt="Shop collections"
            className="w-full h-auto object-cover"
          />
          <a href={props.link1}><p className="text-[#666666] mt-2 text-left">{props.name1}</p></a>
        </div>
        <div className="relative">
          <img
            src={props.img2}
            alt="About us"
            className="w-full h-auto object-cover"
          />
          <a href={props.link2}><p className="text-[#666666] mt-2 text-left">{props.name2}</p></a>
        </div>
      </div>
    </div>
  );
};

export default UnderCollection;
