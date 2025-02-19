import React from "react";
import ImageComp from "../ImageComp";

const LeftTextRightImg = (props) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center text-left lg:pl-10">
          <p className="text-[#666666] text-[14px] pb-5">
            Our collection combines the timeless elegance of vintage <br />
            design with the sleek lines of modern aesthetics.
          </p>
          <p className="text-[#666666] text-[14px] pb-5">
            Whether you're looking to furnish a cozy nook or a <br />
            contemporary loft, we have something for every taste.
          </p>
          <p className="text-[#666666] text-[14px] pb-5">
            Each piece is carefully curated to reflect quality <br />
            craftsmanship and enduring beauty. Our mission is to <br />
            provide you with unique furniture that stands the test of <br />
            time, both in durability and design.{" "}
          </p>
          <p className="text-[#666666] text-[14px] pb-5">
            We’re passionate about creating spaces that inspire and <br />
            comfort. Shop with us and find your perfect blend of old <br />
            and new.
          </p>
        </div>

        <ImageComp src={props.img1} alt="About us" />
      </div>
    </div>
  );
};

export default LeftTextRightImg;
