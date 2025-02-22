import React from "react";
import CartComp from "../components/CartComp";
import Heading from "../components/global/Heading";

const Checkout = () => {
  return (
    <div className="w-full bg-white overflow-hidden my-10 lg:px-[80px]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Heading heading={"CHECKOUT"} />
          <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
          <form>
            <div className="mb-4">
              <label
                className="block text-sm font-bold mb-2"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                className=" appearance-none border w-full py-2 px-3 bg-[#F5F5F5] leading-tight focus:outline-none focus:-outline"
                id="firstName"
                type="text"
                placeholder="First Name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-bold mb-2"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                className=" appearance-none w-full py-2 px-3 bg-[#F5F5F5] leading-tight focus:outline-none focus:-outline"
                id="lastName"
                type="text"
                placeholder="Last Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                className=" appearance-none w-full py-2 px-3 bg-[#F5F5F5] leading-tight focus:outline-none focus:-outline"
                id="email"
                type="email"
                placeholder="Email Address"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="phone">
                Phone Number
              </label>
              <input
                className=" appearance-none w-full py-2 px-3 bg-[#F5F5F5] leading-tight focus:outline-none focus:-outline"
                id="phone"
                type="tel"
                placeholder="Phone Number"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="address">
                Address
              </label>
              <input
                className=" appearance-none w-full py-2 px-3 bg-[#F5F5F5] leading-tight focus:outline-none focus:-outline"
                id="address"
                type="text"
                placeholder="Address"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="city">
                City
              </label>
              <input
                className="appearance-none w-full py-2 px-3 bg-[#F5F5F5] leading-tight focus:outline-none focus:-outline"
                id="city"
                type="text"
                placeholder="City"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="pincode">
                Pincode
              </label>
              <input
                className="appearance-none w-full py-2 px-3 bg-[#F5F5F5] leading-tight focus:outline-none focus:-outline"
                id="pincode"
                type="text"
                placeholder="Pincode"
              />
            </div>
            <div className="mb-4">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox accent-black" />
                <span className="ml-2">Save Address</span>
              </label>
            </div>
          </form>
        </div>

        <CartComp />
      </div>
    </div>
  );
};

export default Checkout;
