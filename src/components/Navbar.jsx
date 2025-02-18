  import { useState } from "react";
  import { Menu, X, ShoppingCart, Heart, UserRound, Search } from "lucide-react";

  export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
      <nav className={`relative ${isSearchOpen ? "pb-5" : null}`}>
        <div className="flex justify-between items-center py-[10px]">
          {/* Logo */}
          <a href="/">
            <h1 className="text-xl font-bold">POSH</h1>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 text-[#666666] text-sm items-center justify-center">
            <a href="/shop" className="hover:text-black">
              Shop
            </a>
            <a href="/aboutus" className="hover:text-black">
              About us
            </a>
            <a href="/contact" className="hover:text-black">
              Contact
            </a>
            <a href="/search" className="hover:text-black">
              <Search size={18} />
            </a>
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
          <div className="flex flex-row md:hidden items-center space-x-3">
            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <a href="/search" className="hover:text-black">
              <Search size={18} />
            </a>
            <a href="/wishlist" className="hover:text-black ">
              <Heart size={18} />
            </a>
            <a href="/profile" className="hover:text-black">
              <UserRound size={18} />
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md z-50 flex flex-col space-y-4 p-5">
            <a href="/shop" className="hover:text-black">
              Shop
            </a>
            <a href="/aboutus" className="hover:text-black">
              About us
            </a>
            <a href="/contact" className="hover:text-black">
              Contact
            </a>
          </div>
        )}
      </nav>
    );
  }
