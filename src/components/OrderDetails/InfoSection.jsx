import React from "react";

const InfoSection = () => {
  return (
    <div>
      {/* Information Section */}
      <h1 className="mb-2 text-2xl">Information</h1>
      <div className="grid grid-cols-2 gap-4">
        <p className="font-semibold">Email Address</p>
        <p className="text-gray-600">ritika.sharma@gmail.com</p>
        <p className="font-semibold">Phone Number</p>
        <p className="text-gray-600">8817700454</p>
        <p className="font-semibold">Address</p>
        <p className="text-gray-600">wework, platina tower</p>
        <p className="font-semibold">Pincode</p>
        <p className="text-gray-600">122002</p>
      </div>
    </div>
  );
};

export default InfoSection;
