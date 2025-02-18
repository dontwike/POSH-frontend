import React from "react";

const OrderConfirmation = () => {
  return (
    <div className="max-w-md mx-auto bg-white overflow-hidden mt-10 mb-10">
      <div className="py-4 text-center font-bold">
        <h1 className="text-4xl mb-2">ORDER CONFIRMED</h1>
        <p className="text-base">
          It's official! Your order is in, and we're making it ready for
          delivery.
        </p>
      </div>

      <div className="py-4">
        <div className="font-bold text-lg mb-2">Delivering to:</div>
        <p className="text-sm">John Doe</p>
        <p className="text-sm">+91 8123456789</p>
        <p className="text-sm">
          F-13 Sirree nikantin business hub in front of smart causeway road.
          Katargam. Sunat-395009
        </p>
      </div>

      <button className="w-full inline-block shrink-0 rounded-md border bg-black px-12 py-3 text-sm font-medium text-white transition focus:ring-3 focus:outline-hidden">
        Order Details
      </button>
    </div>
  );
};

export default OrderConfirmation;
