import React from "react";
import { products } from "../../Data";
import SubHeading from "../global/SubHeading";

const Collection = (props) => {
  return (
    <section className="py-7">
      <div className="flex justify-between items-center mb-2">
        <SubHeading subheading={props.title} />
        <a href="/shop" className="text-[#666666] hover:text-black">
          View all
        </a>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 lg:gap-2">
        {products.map((product) => (
          <a
            href="/product"
            key={product.id}
            className="bg-white overflow-hidden"
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-auto lg:w-5/8 lg:h-7/8 object-cover"
            />
            <div className="py-3">
              <h3 className="text-[#666666] hover:text-black">
                {product.name}
              </h3>
              <p className="text-[#666666]">{product.price}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Collection;
