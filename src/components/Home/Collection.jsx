import React from "react";
import { products } from "../../Data";

const Collection = (props) => {

  return (
    <section className="py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl sm:text-3xl font-bold uppercase">
          {props.title}
        </h1>
        <a href="#" className="text-gray-600 hover:underline">
          View all
        </a>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white overflow-hidden">
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-72 lg:h-96 object-cover"
            />
            <div className="py-3">
              <h3 className="text-gray-600">{product.name}</h3>
              <p className="text-gray-600">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Collection;
