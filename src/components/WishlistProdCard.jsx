import React from "react";
import { shopData } from "../Data";

const WishlistProdCard = ({ name }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center">
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
          <div className="py-2">
            <h3 className="text-gray-600 hover:text-black">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>
          </div>

          <div>
            <button className="bg-black text-white w-full py-2">
              View Product
            </button>
          </div>
        </a>
      ))}
    </div>
  );
};

export default WishlistProdCard;
