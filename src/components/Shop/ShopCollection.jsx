import React from "react";
import { shopData } from "../../Data";

const ShopCollection = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {shopData.map((product) => (
        <div key={product.id} className="bg-white overflow-hidden">
          <img
            src={product.img}
            alt={product.name}
            className="w-full h-72 lg:h-auto object-contain"
          />
          <div className="py-3">
            <h3 className="text-gray-600">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShopCollection;
