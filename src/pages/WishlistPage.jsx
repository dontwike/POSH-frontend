import React from "react";
import WishlistProdCard from "../components/WishlistProdCard";
import Heading from "../components/global/Heading";

const WishlistPage = () => {
  return (
    <div className="pb-10 pt-5">
      <div className="flex justify-between items-center">
        <Heading heading={"Wishlist"} />
      </div>
      <WishlistProdCard />
    </div>
  );
};

export default WishlistPage;
