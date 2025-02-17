import { useState } from "react";
import {
  Menu,
  X,
  ShoppingCart,
  Heart,
  ShoppingBag,
  UserRound,
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="container flex justify-between items-center py-[10px]">
        <a href="/">
          <h1 className="text-xl font-bold">POSH</h1>
        </a>
        <div className="hidden md:flex space-x-6 text-[#666666] text-sm items-center justify-center">
          <a href="/" className="hover:text-black">
            Home
          </a>
          <a href="/shop" className="hover:text-black">
            Shop
          </a>
          <a href="/aboutus" className="hover:text-black">
            About us
          </a>
          <a href="/contact" className="hover:text-black">
            Contact
          </a>
          <a href="/cart" className="hover:text-black">
            {" "}
            <ShoppingCart size={18} />
          </a>
          <a href="/wishlist" className="hover:text-black">
            <Heart size={18} />
          </a>
          <a href="/profile" className="hover:text-black">
            <UserRound size={18} />
          </a>
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <div className="flex items-center justify-center">
              <X size={24} />
              <a href="#" className="hover:text-black pl-5">
                {" "}
                <ShoppingCart />
              </a>
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <Menu size={24} />{" "}
              <a href="#" className="hover:text-black pl-5">
                {" "}
                <ShoppingCart />
              </a>
            </div>
          )}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 mt-2 text-[#666666] text-sm ml-3 bg-white pb-5">
          <a href="#" className="hover:text-black">
            Search
          </a>
          <a href="/shop" className="hover:text-black">
            Shop
          </a>
          <a href="/aboutus" className="hover:text-black">
            About us
          </a>
          <a href="/contact" className="hover:text-black">
            Contact
          </a>
          <a href="/wishlist" className="hover:text-black">
            <Heart size={18} />
          </a>
          <a href="/profile" className="hover:text-black">
            <UserRound size={18} />
          </a>
        </div>
      )}
    </nav>
  );
}
