import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Heading from "./global/Heading";

const CartComp = () => {
  
  const navigate = useNavigate();

  return (
    <div>
      <Heading heading={"Cart Details"} />
      <div className="py-4 rounded-lg">
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
          <button className="text-gray-500 hover:text-black">Apply Coupon</button>
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
      <button className="w-full bg-black text-white py-2 px-4 mt-4 " onClick={() => {navigate('/confirm')}}>
        Place Order
      </button>
    </div>
  );
};

export default CartComp;
