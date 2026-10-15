
import React from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiHeart, FiShoppingBag, FiMenu } from "react-icons/fi";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#faf8f4] text-[#29251f]">

      {/* Announcement Bar */}
      <div className="bg-[#29251f] px-4 py-2.5 text-center text-[9px] tracking-[2px] text-white sm:text-[10px]">
        RENT YOUR DREAM LOOK
        <span className="mx-2 text-[#c6a582]">·</span>
        MAKE EVERY MOMENT SPECIAL
      </div>

      {/* Main Navbar */}
      <div className="border-b border-[#e8e2d9]">
        <div className="mx-auto grid h-[76px] max-w-[1440px] grid-cols-[1fr_auto_1fr] items-center px-5 sm:px-8 lg:px-14">

          {/* Left Navigation */}
          <div className="flex items-center">
            <button
              type="button"
              aria-label="Open menu"
              className="md:hidden"
            >
              <FiMenu className="h-5 w-5" />
            </button>

            <nav className="hidden items-center gap-6 md:flex lg:gap-8">
              <Link
                to="/"
                className="text-[10px] tracking-[1.5px] transition-colors hover:text-[#a47b55]"
              >
                HOME
              </Link>

              <Link
                to="/dresses"
                className="text-[10px] tracking-[1.5px] transition-colors hover:text-[#a47b55]"
              >
                COLLECTIONS
              </Link>
            </nav>
          </div>

          {/* Center Logo */}
          <Link
            to="/"
            aria-label="Rentelle home"
            className="flex flex-col items-center justify-center text-center"
          >
            <span className="font-serif text-[26px] tracking-[3px] sm:text-[30px] sm:tracking-[4px]">
              Rentelle
            </span>

            <span className="mt-1 text-[8px] tracking-[2.5px] text-[#8a7967] sm:text-[9px]">
              THE ART OF RENTING
            </span>
          </Link>

          {/* Right Navigation and Icons */}
          <div className="flex items-center justify-self-end gap-3 sm:gap-5 lg:gap-7">

            <nav className="hidden items-center gap-6 lg:flex">
              <Link
                to="/about"
                className="text-[10px] tracking-[1.5px] transition-colors hover:text-[#a47b55]"
              >
                OUR STORY
              </Link>

              <Link
                to="/contact"
                className="text-[10px] tracking-[1.5px] transition-colors hover:text-[#a47b55]"
              >
                CONTACT
              </Link>
            </nav>
            {/* Search */}
            <Link
              to="/search"
              aria-label="Search dresses"
              className="transition-colors hover:text-[#a47b55]"
            >
              <FiSearch size={19} strokeWidth={1.4} />
            </Link>

            {/* Wishlist */}
            <Link
              to="/wishlist"
              aria-label="Wishlist"
              className="transition-colors hover:text-[#a47b55]"
            >
              <FiHeart size={19} strokeWidth={1.4} />
            </Link>

            {/* Rental Bag */}
    

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
