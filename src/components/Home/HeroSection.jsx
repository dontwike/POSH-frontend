import React from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const explore = useNavigate();

  return (
    <section
      className="relative w-full h-[100vh] bg-cover bg-center bg-no-repeat md:h-[120vh]"
      style={{ backgroundImage: "url('https://res.cloudinary.com/davqmcelg/image/upload/v1744136552/Posh/HeroSection_o7k5go.webp')" }}
    >
      <div className="absolute inset-0 bg-[#7B3F00] bg-opacity-30 flex items-center justify-start p-10">
        <div className="max-w-lg text-white">
          <h1 className="text-5xl font-extrabold uppercase">Fall Collection</h1>
          <p className="mt-4 text-lg">
            Embrace your corporate wardrobe with us to always wear what you
            love!
          </p>
          <div className="w-10 h-1 bg-pink-500 my-4"></div>
          <button
            className="mt-6 px-6 py-3 bg-white text-black font-semibold uppercase hover:bg-gray-200 transition"
            onClick={() => {
              explore("/shop");
            }}
          >
            Explore
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
