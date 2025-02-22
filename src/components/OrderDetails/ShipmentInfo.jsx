import React from "react";
import SubHeading from "../global/SubHeading";

const ShipmentInfo = () => {
  return (
    <div className="grid grid-cols-1 gap-4 my-6 md:grid-cols-2">
      {/* Shipment Information & Order Details */}
      <div>
        <SubHeading heading={"Shipment Information"} />
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mb-4">
          <p className="font-semibold">Delivery Method</p>
          <p className="text-gray-600">shiprocket</p>
          <p className="font-semibold">Tracking ID</p>
          <p className="text-gray-600">123455678934567</p>
        </div>
      </div>
      <div>
        <SubHeading heading={"Order Details"} />
        <div className="grid grid-cols-2 gap-4">
          <p className="font-semibold">Date Ordered</p>
          <p className="text-gray-600">10 Nov, 2024</p>
          <p className="font-semibold">Order ID</p>
          <p className="text-gray-600">10</p>
        </div>
      </div>
    </div>
  );
};

export default ShipmentInfo;
