import React from "react";

const CartComp = () => {
  return (
    <div>
          <h1 className="text-2xl font-semibold mb-4">Cart Details</h1>
          <div className="p-4 rounded-lg">
            <div className="flex justify-between mb-2">
              <span>Total Price</span>
              <span>$222</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Discount on MRP</span>
              <span>$222</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Coupon Discount</span>
              <button className="text-blue-500">Apply Coupon</button>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping Fee</span>
              <span>$222</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Platform Fee</span>
              <span>$222</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>$222</span>
            </div>
          </div>
          <button className="w-full bg-black text-white py-2 px-4 rounded-lg mt-4 ">
            Place Order
          </button>
        </div>
  );
};

export default CartComp;
