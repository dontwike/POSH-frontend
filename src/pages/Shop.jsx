import React from "react";
import ShopCollection from "../components/Shop/ShopCollection";
import Heading from "../components/global/Heading";

const shop = () => {
  return (
    <div className="pt-5">
      <div className="flex justify-between items-center">
        <Heading heading={"NEW COLLECTION 2024"} />
      </div>
      <ShopCollection />
    </div>
  );
};

export default shop;
