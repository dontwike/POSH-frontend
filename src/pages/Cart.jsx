import React from "react";
import CartComp from "../components/CartComp";
import { X } from "lucide-react";

const Cart = () => {
  const cartItems = [
    {
      image: "../../../public/UC_1.webp",
      name: "Kathe Velvet Floor Poul",
      price: "$222",
      size: "S",
    },
    {
      image: "../../../public/UC_1.webp",
      name: "Kathe Velvet Floor Poul",
      price: "$222",
      size: "S",
    },
    {
      image: "../../../public/UC_1.webp",
      name: "Kathe Velvet Floor Poul",
      price: "$222",
      size: "S",
    },
  ];

  const sizes = ["S", "M", "L", "XL"]; 

  return (
    <div className="w-full bg-white overflow-hidden my-10 lg:px-[100px]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="md:col-span-2">
          <h1 className="text-2xl font-bold mb-6">YOUR CART</h1>
          {cartItems.map((item, index) => (
            <div
              className="w-full mx-auto bg-white overflow-hidden mb-4 border border-1 p-2"
              key={index}
            >
              <div className="flex items-start">
                {/* Image on the left side */}
                <div className="w-full md:w-2/6 h-28 mr-4">
                  <img
                    src={item.image}
                    alt="Product"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text content on the right side */}
                <div className="w-full">
                  <p className="mb-2">{item.name}</p>
                  <p className="mb-2">{item.price}</p>
                  <div className="flex items-center mb-2">
                    <select
                      id="size"
                      className="border border-gray-300 px-2 py-1 focus:outline-none focus:border-blue-500"
                    >
                      {sizes.map((size, index) => (
                        <option key={index} value={size}>
                          {size}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="right-0 w-full flex flex-col items-end h-full justify-between">
                  <button>
                    <X size={18}/>
                  </button>

                  {/* Move to Wishlist button */}
                  <a className=" text-[#666666] hover:text-black text-sm mt-[75px]">
                    Move to Wishlist
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <CartComp />
      </div>
    </div>
  );
};

export default Cart;
