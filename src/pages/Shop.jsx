import React from "react";
import ShopCollection from "../components/Shop/ShopCollection";

const shop = () => {
  return (
    <div className="pt-5">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl sm:text-3xl font-bold uppercase">
          New Collection 2024
        </h1>
      </div>
      <ShopCollection />
    </div>
  );
};

export default shop;
