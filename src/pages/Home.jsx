import React from "react";
import HeroSection from "../components/Home/HeroSection";
import Collection from "../components/Home/Collection";
import UnderCollection from "../components/Home/UnderCollection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Collection title="New Collection 2025" />
      <UnderCollection
        name1={"Shop"}
        name2={"About us"}
        link1="shop"
        link2="aboutus"
        img1="https://res.cloudinary.com/davqmcelg/image/upload/v1744136579/Posh/UC_1_iszwhn.webp"
        img2="https://res.cloudinary.com/davqmcelg/image/upload/v1744136579/Posh/UC_2_x99kwc.webp"
      />
      <Collection title="Best Seller 2025" />
    </div>
  );
};

export default Home;
