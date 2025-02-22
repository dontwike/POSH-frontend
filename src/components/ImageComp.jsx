import React from "react";

const ImageComp = (props) => {
  return (
    <div className="relative">
      <img
        src={props.src}
        alt={props.alt}
        className="w-full h-auto object-contain"
      />
      {props.name ? (
        <a href={props.link}>
          <p className="text-[#666666] mt-2 text-left hover:text-black">
            {props.name}
          </p>
        </a>
      ) : null}
    </div>
  );
};

export default ImageComp;
