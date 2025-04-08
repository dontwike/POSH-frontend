import { Pencil, X } from "lucide-react";
import React, { useState } from "react";
import { addresses } from "../../Data";

const Delivery = () => {
  const [addressList, setAddressList] = useState(addresses);

  function handleMarkDefault(addr) {
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full px-4">
      {addresses.map((addr) => (
        <div key={addr.id} className="bg-white shadow-lg relative p-8">
          <div className="flex justify-between items-center mb-2">
            <button
              className={`profilebtn text-white px-2 py-1 text-md ${
                addr.default ? "bg-black" : "bg-[#666666]"
              }`} onClick={() => {handleMarkDefault(addr)}}
            >
              {addr.default ? "DEFAULT ADDRESS" : "MARK AS DEFAULT"}
            </button>
            <div className="flex space-x-2">
              <Pencil className="text-gray-500 cursor-pointer" size={18} />
              {!addr.default && (
                <X className="text-gray-500 cursor-pointer" size={18} />
              )}
            </div>
          </div>
          <p className="text-gray-800 font-semibold mt-5">{addr.name}</p>
          {addr.address.split(",").map((line, index) => (
            <p key={index} className="text-gray-600 text-sm pt-1">
              {line}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Delivery;
