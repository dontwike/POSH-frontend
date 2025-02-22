import React from "react";
import { shopData } from "../../Data";

const ShopCollection = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center pb-10">
      {shopData.map((product) => (
        <a
          href="/product"
          key={product.id}
          className="bg-white overflow-hidden"
        >
          <img
            src={product.img}
            alt={product.name}
            className="w-auto h-72 lg:h-auto object-contain"
          />
          <div className="pt-3">
            <h3 className="text-gray-600 hover:text-black">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default ShopCollection;
