import React from "react";

const Error = () => {
  return (
    <div className="grid h-screen place-content-center bg-white px-4">
      <div className="text-center">
        <h1 className="text-5xl font-black text-gray-400">
          Sorry page not found
        </h1>

        <p className="mt-4 text-gray-500">
          Discover our assortments and find something that captivates you.
        </p>

        <a
          href="/"
          className="mt-6 inline-block rounded-sm bg-black px-10 py-2 text-sm font-medium text-white focus:ring-3 focus:outline-hidden"
        >
          Home
        </a>
      </div>
    </div>
  );
};

export default Error;
