import React, { useEffect, useState } from "react";
import Collection from "../components/Home/Collection";
import { imgData } from "../Data";
import Heading from "../components/global/Heading";

const ProductPage = () => {
  const [selectedSize, setSelectedSize] = useState(null);

  useEffect(() => {
    if (selectedSize) {
      console.log(selectedSize);
    }
  }, [selectedSize]);

  return (
    <div>
      <div className="w-full mx-auto py-6 grid md:grid-cols-2 gap-8">
        {/* Left: Product Images */}
        <div className="h-screen pr-4 overflow-hidden">
          <div className="h-full overflow-y-scroll no-scrollbar">
            {imgData.map((img, index) => (
              <img
                key={index}
                src={img.src}
                alt={img.alt}
                className="w-full object-cover"
              />
            ))}
          </div>
        </div>

        {/* Right: Product Details */}
        <div className="sticky top-10 h-fit">
          <Heading heading={"NEW COLLECTION 2024"} />
          <p className="text-lg font-semibold mt-1">$222.2</p>

          {/* Size Selection */}
          <div className="mt-4">
            <p className="font-semibold">Size</p>
            <div className="flex gap-2 mt-2">
              {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                <button
                  key={size}
                  id="sizebtn"
                  className={`border px-4 py-2 text-sm transition ${
                    selectedSize === size
                      ? "bg-black text-white"
                      : "hover:bg-black hover:text-white"
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
            <a
              href="/sizechart"
              className="text-sm text-gray-600 underline mt-2 inline-block"
            >
              Size Chart
            </a>
          </div>

          {/* Buttons */}
          <div className="mt-4 flex gap-4">
            <button className="w-1/2 bg-black text-white py-2 font-semibold uppercase">
              Add to Cart
            </button>
            <button className="w-1/2 border py-2 font-semibold uppercase">
              Buy Now
            </button>
          </div>

          {/* Description */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold">Description</h2>
            <p className="text-sm text-gray-700">100% polyester</p>
            <ul className="list-disc pl-5 mt-2 text-sm text-gray-700 space-y-1">
              <li>Made in China</li>
              <li>Hand wash</li>
              <li>Unlined</li>
              <li>Pull-on styling</li>
              <li>Smocked waist</li>
              <li>Back keyhole cut-out with loop button closure</li>
              <li>Midweight plissé fabric with ruffle hem</li>
              <li>Revolve Style No. ALX-WD452</li>
              <li>Manufacturer Style No. 6CDRS01606</li>
            </ul>
          </div>
        </div>
      </div>
      <Collection title="YOU MIGHT ALSO LIKE" />
    </div>
  );
};

export default ProductPage;
