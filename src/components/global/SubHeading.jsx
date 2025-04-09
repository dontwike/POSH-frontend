import React from "react";

const SubHeading = (props) => {
  return (
    <h1 className="text-xl md:text-2xl lg:text-3xl uppercase mb-4">{props.subheading}</h1>
  );
};

export default SubHeading;
