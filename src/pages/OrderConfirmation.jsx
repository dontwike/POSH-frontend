import React from "react";

const OrderConfirmation = () => {
  return (
    <div className="max-w-xl mx-auto bg-white overflow-hidden mb-10">
      <div className="pb-4 text-center font-bold flex flex-col items-center">
        <img src="https://res.cloudinary.com/davqmcelg/image/upload/v1744136551/Posh/checkIcon_fbc1fe.gif" alt="" className="w-2/3"/>
        <h1 className="text-4xl mb-2">ORDER CONFIRMED</h1>
        <p className="text-base">
          It's official! Your order is in, and we're making it ready for
          delivery.
        </p>
      </div>

      <div className="py-4">
        <div className="font-bold text-lg mb-2">Delivering to:</div>
        <p className="text-sm text-[#666666]">John Doe</p>
        <p className="text-sm text-[#666666]">+91 8123456789</p>
        <p className="text-sm text-[#666666]">
          F-13 Sirree nikantin business hub in front of smart causeway road.
          Katargam. Sunat-395009
        </p>
      </div>

      <button className="w-full inline-block shrink-0 border bg-black px-12 py-3 text-sm font-medium text-white transition focus:ring-3 focus:outline-hidden">
        Order Details
      </button>
    </div>
  );
};

export default OrderConfirmation;
