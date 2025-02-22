import { useState } from "react";
import { Menu, X, ShoppingCart, Heart, UserRound, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className={`relative ${isSearchOpen ? "pb-5" : null}`}>
      <div className="flex justify-between items-center py-[10px]">
        {/* Logo */}
        <p onClick={() => navigate("/")}>
          <h1 className="text-2xl font-bold">POSH</h1>
        </p>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-[#666666] text-sm items-center justify-center">
          <p className="hover:text-black" onClick={() => navigate("/shop")}>
            Shop
          </p>
          <p className="hover:text-black" onClick={() => navigate("/aboutus")}>
            About us
          </p>
          <p className="hover:text-black" onClick={() => navigate("/contact")}>
            Contact
          </p>
          <p className="hover:text-black" onClick={() => navigate("/search")}>
            <Search size={18} />
          </p>
          <p className="hover:text-black" onClick={() => navigate("/cart")}>
            <ShoppingCart size={18} />
          </p>
          <p className="hover:text-black" onClick={() => navigate("/wishlist")}>
            <Heart size={18} />
          </p>
          <p className="hover:text-black" onClick={() => navigate("/profile")}>
            <UserRound size={18} />
          </p>
        </div>
        <div className="flex flex-row md:hidden items-center space-x-3">
          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <p className="hover:text-black" onClick={() => navigate("/search")}>
            <Search size={18} />
          </p>
          <p className="hover:text-black" onClick={() => navigate("/wishlist")}>
            <Heart size={18} />
          </p>
          <p className="hover:text-black" onClick={() => navigate("/profile")}>
            <UserRound size={18} />
          </p>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md z-50 flex flex-col space-y-4 p-5">
          <p className="hover:text-black" onClick={() => navigate("/shop")}>
            Shop
          </p>
          <p className="hover:text-black" onClick={() => navigate("/aboutus")}>
            About us
          </p>
          <p className="hover:text-black" onClick={() => navigate("/contact")}>
            Contact
          </p>
        </div>
      )}
    </nav>
  );
}
