import React from "react";
import ShipmentInfo from "../components/OrderDetails/ShipmentInfo";
import InfoSection from "../components/OrderDetails/InfoSection";
import ShippingActivity from "../components/OrderDetails/ShippingActivity";
import CartDetails from "../components/OrderDetails/CartDetails";
import ItemsOrdered from "../components/OrderDetails/ItemsOrdered";

const OrderDeatils = () => {
  return (
    <div className="max-w-5xl mx-auto bg-white space-y-10 my-10">
      <h1 className="text-3xl mb-4">ORDER SUMMARY</h1>

      {/* Information Section */}
      <InfoSection />

      {/* Shipment Information */}
      <ShipmentInfo />

      {/* Shipping Activity */}
      <ShippingActivity />

      {/* Cart Details */}
      <CartDetails />

      {/* Ordered Items */}
      <ItemsOrdered />
    </div>
  );
};

export default OrderDeatils;
