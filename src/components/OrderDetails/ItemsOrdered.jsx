import React from "react";
import SubHeading from "../global/SubHeading";

const ItemsOrdered = () => {
  const items = [
    {
      id: 1,
      name: "Kathe Velvet Floor Pouf",
      size: "S",
      price: "$222",
      img: "https://res.cloudinary.com/davqmcelg/image/upload/v1744136551/Posh/ELZA_JACKET_REAL_ALT_0027_lead_okgbnq.webp",
    },
    {
      id: 2,
      name: "Kathe Velvet Floor Pouf",
      size: "S",
      price: "$222",
      img: "https://res.cloudinary.com/davqmcelg/image/upload/v1744136549/Posh/ELZA_JACKET_OFFW_SOPHIE_II_PANT_OFFW_0002_lead_fhq3sx.webp",
    },
    {
      id: 3,
      name: "Kathe Velvet Floor Pouf",
      size: "S",
      price: "$222",
      img: "https://res.cloudinary.com/davqmcelg/image/upload/v1744136547/Posh/ELZA_JACKET_BLK_0018_lead_532a3604-1ad7-46c9-9726-d318efed803d_ckah3l.webp",
    },
  ];

  return (
    <div className="w-full mt-10">
      <SubHeading heading={"ITEMS IN YOUR ORDERS"} />
      <div className="space-y-2">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center p-4 border rounded-md"
          >
            <div className="w-16 h-20 bg-gray-200 flex-shrink-0">
              <img src={item.img} alt="not found" />
            </div>
            <div className="ml-4 flex-1 space-y-3">
              <p className="font-semibold">{item.name}</p>
              <p className="text-[#666666] text-sm">{item.size}</p>
            </div>
            <p className="font-semibold text-[#666666]">{item.price}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center space-x-4 mt-4 gap-4">
        <button className=" border font-semibold uppercase py-1 px-7 md:py-3 md:px-12 ">
          Cancel Order
        </button>
        <button className="bg-black font-semibold text-white px-12 py-3">
          Get Help
        </button>
      </div>
    </div>
  );
};

export default ItemsOrdered;
