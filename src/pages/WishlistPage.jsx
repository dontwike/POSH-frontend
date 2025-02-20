import React from "react";
import WishlistProdCard from "../components/WishlistProdCard";

const WishlistPage = () => {
  return (
    <div className="pb-10 pt-5">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl sm:text-3xl font-bold uppercase">
          WishList
        </h1>
      </div>
      <WishlistProdCard />
    </div>
  );
};

export default WishlistPage;
