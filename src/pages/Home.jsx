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
        img1="../../public/UC_1.webp"
        img2="../../public/UC_2.webp"
      />
      <Collection title="Best Seller 2025" />
    </div>
  );
};

export default Home;
