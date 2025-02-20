import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-300 py-4">
      <div className="mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-gray-700 text-sm">
        {/* Left Section - Navigation Links */}
        <div className="space-y-2">
          <a href="/shop">
            <p className="pt-2">Shop</p>
          </a>
          <a href="/aboutus">
            <p className="pt-2">About us</p>
          </a>
          <a href="/contact">
            <p className="pt-2">Contact</p>
          </a>
          <a href="/tc">
            <p className="pt-2">Terms & Condition</p>
          </a>
        </div>

        {/* Middle Section - Social Media & Contact */}
        <div className="space-y-2">
          <a href="/#">
            <p className="pt-2">Instagram</p>
          </a>
          <a href="/#">
            <p className="pt-2">TikTok</p>
          </a>
          <a href="/#">
            <p className="pt-2">Pinterest</p>
          </a>
          <a href="/#">
            <p className="pt-2">Facebook</p>
          </a>
        </div>

        <div className="space-y-2">
          <a href="tel:+918817700454">
            <p className="pt-2">Tel: 8817700454</p>
          </a>
          <a href="mailto:ritikaadesigns@gmail.com">
            <p className="pt-2">Mail: ritikaadesigns@gmail.com</p>
          </a>
        </div>

        {/* Right Section - POSH Logo (Moves below on xs/sm) */}
        <a href="/">
          <h1 className="text-start text-9xl tracking-wide sm:text-start sm:col-span-1 md:col-span-1 text-black">
            POSH
          </h1>
        </a>
      </div>

      {/* Bottom Copyright Text */}
      <div className="border-t border-gray-200 pt-4 flex justify-start text-gray-500 text-xs gap-4">
        <p>© 2025</p>
        <p>Made by ritikaadesigns</p>
      </div>
    </footer>
  );
};

export default Footer;
