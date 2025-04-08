import Feild from "../components/Profile/Fields";
import Delivery from "../components/Profile/Delivery";
import { useState } from "react";
import OrderHistory from "../components/Profile/OrderHistory";

export default function Profile() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center my-6">
        <h1 className="text-6xl uppercase">Hi, John Doe</h1>
        <button className="bg-black text-white px-8 md:px-10 py-2">
          Logout
        </button>
      </div>
      <div>
        <Feild />
      </div>
      <div className="mt-10 border pb-10">
        <div className="grid grid-cols-2 border-b mb-5">
          <div
            className={`border-r h-full py-3 flex justify-center ${
              selected === 0 ? "bg-gray-300" : "bg-white"
            }`}
          >
            <button
              className={`profilebtn text-2xl text-center border-r `}
              onClick={() => {
                setSelected(0);
              }}
            >
              DELIVERY ADDRESSES
            </button>
          </div>
          <div
            className={`h-full py-3 flex justify-center ${
              selected === 1 ? "bg-gray-300" : "bg-white"
            }`}
          >
            <button
              className="profilebtn text-2xl"
              onClick={() => {
                setSelected(1);
              }}
            >
              ORDER HISTORY
            </button>
          </div>
        </div>
        <div>
          <div className={`${selected === 1 ? "hidden" : null}`}>
            <Delivery />
          </div>
          <div className={`${selected === 0 ? "hidden" : null}`}>
            <OrderHistory />
          </div>
        </div>
      </div>
    </div>
  );
}
