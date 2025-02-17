import { useState } from "react";
import { Menu, X, ShoppingCart, Heart, UserRound, Search } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="relative">
      <div className="flex justify-between items-center py-[10px]">
        {/* Logo */}
        <a href="/">
          <h1 className="text-xl font-bold">POSH</h1>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-[#666666] text-sm items-center justify-center">
          <button
            className="hover:text-black flex items-center"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
             Search
          </button>
          <a href="/shop" className="hover:text-black">Shop</a>
          <a href="/aboutus" className="hover:text-black">About us</a>
          <a href="/contact" className="hover:text-black">Contact</a>
          <a href="/cart" className="hover:text-black">
            <ShoppingCart size={18} />
          </a>
          <a href="/wishlist" className="hover:text-black">
            <Heart size={18} />
          </a>
          <a href="/profile" className="hover:text-black">
            <UserRound size={18} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Search Bar */}
      {isSearchOpen && (
        <div className="mt-2 p-2 bg-gray-100 rounded-md flex items-center w-full md:w-1/2 mx-auto">
          <Search size={18} className="text-gray-600 mr-2" />
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full bg-transparent outline-none"
          />
        </div>
      )}

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md z-50 flex flex-col space-y-4 p-5">
          <button
            className="hover:text-black flex items-center"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
             Search
          </button>
          <a href="/shop" className="hover:text-black">Shop</a>
          <a href="/aboutus" className="hover:text-black">About us</a>
          <a href="/contact" className="hover:text-black">Contact</a>
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
