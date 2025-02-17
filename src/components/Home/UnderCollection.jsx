import React from "react";
import ImageComp from "../ImageComp";

const UnderCollection = (props) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ImageComp
          src={props.img1}
          alt="Shop collections"
          name={props.name1}
          link={props.link1}
        />

        <ImageComp
          src={props.img2}
          alt="Shop collections"
          name={props.name2}
          link={props.link2}
        />
      </div>
    </div>
  );
};

export default UnderCollection;
