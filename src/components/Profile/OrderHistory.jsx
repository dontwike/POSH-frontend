import React, { useState } from 'react'

const orders = [
    {
      id: 1,
      date: "Feb 21 2025",
      orderNumber: "WOO_586964",
      totalItems: 1,
      payment: "Cash on delivery",
      totalAmount: "$2000",
    },
    {
      id: 2,
      date: "Feb 21 2025",
      orderNumber: "WOO_586964",
      totalItems: 1,
      payment: "Cash on delivery",
      totalAmount: "$2000",
    },
  ];

const OrderHistory = () => {

    const [orderList, setOrderList] = useState(orders);

  return (
    <div className="px-2">
      {orderList.map((order) => (
        <div key={order.id} className="border mb-4">
          <div className="grid grid-cols-2 md:flex md:flex-row items-start justify-between text-gray-700 text-sm py-3 border px-6">
            <span className='my-1 text-black'>{order.date}</span>
            <span className='my-1 text-black'>Order: <span className='text-gray-700'>{order.orderNumber}</span></span>
            <span className='my-1 text-black'>Total Items: <span className='text-gray-700'>{order.totalItems}</span></span>
            <span className='my-1 text-black'>Payment: <span className='text-gray-700'>{order.payment}</span></span>
          </div>
          <div className="flex justify-end space-x-4 py-4 mr-6">
            <button className="border border-black px-4 py-2">Track Order</button>
            <button className="bg-black text-white px-4 py-2">Return / Exchange</button>
          </div>
          <div className="profilebtn bg-[#666666] text-[#e5e5e5] py-2 flex justify-between text-xl">
            <span className="mx-6">GRAND TOTAL</span>
            <span className="mx-6">{order.totalAmount}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default OrderHistory