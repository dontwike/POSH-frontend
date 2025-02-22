import React from "react";
import LeftImgRightText from "../components/AboutUs/LeftImgRightText";
import LeftTextRightImg from "../components/AboutUs/LeftTextRightImg";
import BothSideImg from "../components/AboutUs/BothSideImg";
import UnderCollection from "../components/Home/UnderCollection";
import ImageComp from "../components/ImageComp";

const Aboutus = () => {
  return (
    <div className="flex flex-col">
      <div className="mb-5">
        <LeftImgRightText
          heading="About us"
          points={[
            "At Cavaya, we believe that furniture is more than",
            "just functional—it's a statement of style and personality.",
          ]}
          img1="https://plus.unsplash.com/premium_photo-1676299910876-747eeb0c11dc?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
      <div className="mb-5">
        <LeftTextRightImg img1="https://plus.unsplash.com/premium_photo-1676299910876-747eeb0c11dc?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </div>

      <div className="mb-5">
        <BothSideImg img1="https://plus.unsplash.com/premium_photo-1676299910876-747eeb0c11dc?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </div>

      <div className="mb-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ImageComp
            src="https://plus.unsplash.com/premium_photo-1676299910876-747eeb0c11dc?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Shop collections"
          />

          <div className="flex flex-col justify-center text-[#666666] text-[14px] pl-5">
            <p className="mb-5">
              Our team is dedicated to offering personalized service <br /> and
              design advice, ensuring you find the perfect pieces to <br /> suit
              your style and home.
            </p>
            <p>
              We believe that great furniture brings warmth and <br /> character
              to any space, transforming it into something <br /> truly special.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-5">
        <h1 className="text-[48px]">Collections</h1>
        <UnderCollection
          name1="New collection"
          name2="Fall collection"
          link1="/shop"
          link2="/shop"
          img1="https://plus.unsplash.com/premium_photo-1676299910876-747eeb0c11dc?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          img2="https://plus.unsplash.com/premium_photo-1676299910876-747eeb0c11dc?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </div>
  );
};

export default Aboutus;
