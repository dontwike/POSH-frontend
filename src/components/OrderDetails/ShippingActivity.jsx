import React from "react";
import SubHeading from "../global/SubHeading";

const ShippingActivity = () => {
  return (
    <div>
      {/* Shipping Activity */}
      <div className="mt-6">
        <SubHeading heading={"Shipping Activity"} />
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-3">
            <div>
              <p className="font-semibold">NOV 10</p>
              <p className="text-gray-600">10:34 AM</p>
            </div>
            <div>
              <p className="font-semibold mt-4">NOV 11</p>
              <p className="text-gray-600">02:30 PM</p>
            </div>
            <div>
              <p className="font-semibold">NOV 10</p>
              <p className="text-gray-600">10:34 AM</p>
            </div>
            <div>
              <p className="font-semibold mt-4">NOV 11</p>
              <p className="text-gray-600">02:30 PM</p>
            </div>
            <div>
              <p className="font-semibold">NOV 10</p>
              <p className="text-gray-600">10:34 AM</p>
            </div>
          </div>

          <div>
            <div>
              <p className="font-semibold">Order Placed</p>
              <p className="text-gray-600">We have received your order</p>
            </div>
            <div>
              <p className="font-semibold mt-4">Order Confirmed</p>
              <p className="text-gray-600">Your order has been confirmed</p>
            </div>
            <div>
              <p className="font-semibold mt-4">Order Confirmed</p>
              <p className="text-gray-600">Your order has been confirmed</p>
            </div>
            <div>
              <p className="font-semibold mt-4">Order Confirmed</p>
              <p className="text-gray-600">Your order has been confirmed</p>
            </div>
            <div>
              <p className="font-semibold mt-4">Order Confirmed</p>
              <p className="text-gray-600">Your order has been confirmed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingActivity;
