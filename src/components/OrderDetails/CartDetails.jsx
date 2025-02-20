import React from "react";

const CartDetails = () => {
  return (
    <div className="max-w-4xl bg-white">
      <h1 className="text-2xl mb-4">CART DETAILS</h1>

      <div className="">
        <div className="grid grid-cols-2 gap-2">
          <p className="text-gray-600">Total Price</p>
          <p className="text-gray-600 text-right">$222</p>
          <p className="text-gray-600">Discount on MRP</p>
          <p className="text-gray-600 text-right">$222</p>
          <p className="text-gray-600">Coupon Discount</p>
          <p className="text-right text-black cursor-pointer">Apply Coupon</p>
          <p className="text-gray-600">Shipping Fee</p>
          <p className="text-gray-600 text-right">$222</p>
          <p className="text-gray-600">Platform Fee</p>
          <p className="text-gray-600 text-right">$222</p>
        </div>
      </div>

      <div className="mt-4 flex justify-between font-bold">
        <p>Total</p>
        <p>$222</p>
      </div>
    </div>
  );
};

export default CartDetails;
