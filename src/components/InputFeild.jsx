import React from "react";

const InputFeild = (props) => {
  return (
    <input
      type={props.type}
      id={props.type}
      name={props.type}
      placeholder={props.type}
      className="mt-1 w-full py-2 pl-3 border-gray-200 bg-white text-sm text-gray-700 shadow-xs"
    />
  );
};

export default InputFeild;
