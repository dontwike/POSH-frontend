import React from "react";

const ItemsOrdered = () => {
  const items = [
    { id: 1, name: "Kathe Velvet Floor Pouf", size: "S", price: "$222" },
    { id: 2, name: "Kathe Velvet Floor Pouf", size: "S", price: "$222" },
    { id: 3, name: "Kathe Velvet Floor Pouf", size: "S", price: "$222" },
  ];

  return (
    <div className="w-full mt-10">
      <h1 className="text-2xl mb-4">ITEMS IN YOUR ORDERS</h1>
      <div className="space-y-2">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center p-4 border rounded-md"
          >
            <div className="w-16 h-20 bg-gray-200 flex-shrink-0" />
            <div className="ml-4 flex-1 space-y-3">
              <p className="font-semibold">{item.name}</p>
              <p className="text-[#666666] text-sm">{item.size}</p>
            </div>
            <p className="font-semibold text-[#666666]">{item.price}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center space-x-4 mt-4 gap-4">
        <button className=" border font-semibold uppercase py-1 px-7 md:py-3 md:px-12 ">Cancel Order</button>
        <button className="bg-black font-semibold text-white px-12 py-3">
          Get Help
        </button>
      </div>
    </div>
  );
};

export default ItemsOrdered;
