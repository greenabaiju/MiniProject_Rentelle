
import React from "react";
import { Link } from "react-router-dom";
import {
  FiHeart,
  FiSliders,
  
  FiSearch,
  FiTrash2,
} from "react-icons/fi";

import outfit1 from "../assets/outfit1.png";
import outfit2 from "../assets/outfit2.jpeg";
import outfit3 from "../assets/outfit3.jpeg";
import outfit4 from "../assets/outfit4.jpeg";
import prodn1 from "../assets/prodn1.jpg";
import prodn2 from "../assets/prodn2.jpeg";
import prodn3 from "../assets/prodn3.jpg";
import prodn4 from "../assets/prodn4.jpg";

const DressCollection = () => {
  return (
    <main className="min-h-screen bg-[#faf8f4] text-[#29251f]">

      {/* Hero Section */}
      <section className="border-b border-[#e8e2d9] px-5 py-16 text-center sm:py-20">
        <p className="text-xs uppercase tracking-[0.3em] text-[#a47b55]">
          THE OCCASION EDIT
        </p>

        <h1 className="mt-4 font-serif text-4xl sm:text-6xl">
          The Dress Collection
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#756b60]">
          Discover beautiful outfits for weddings, celebrations,
          and life's most unforgettable moments.
        </p>

        {/* Search Design Only */}
        <div className="mx-auto mt-8 flex max-w-xl items-center border border-[#e8e2d9] bg-white p-1">
          <FiSearch className="ml-3 shrink-0 text-[#756b60]" />

          <input
            type="text"
            placeholder="Search dresses, colors or styles..."
            className="w-full bg-transparent px-3 py-3 text-sm outline-none"
          />

          <button
            type="button"
            className="bg-[#29251f] px-5 py-3 text-[10px] tracking-widest text-white transition hover:bg-[#a47b55]"
          >
            SEARCH
          </button>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="border-b border-[#e8e2d9] px-5 py-5 sm:px-8 lg:px-14">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

          <div className="flex gap-6 overflow-x-auto text-xs uppercase tracking-widest">
            <button
              type="button"
              className="whitespace-nowrap border-b-2 border-[#29251f] pb-2"
            >
              All Outfits
            </button>

            <button
              type="button"
              className="whitespace-nowrap pb-2 text-[#756b60] transition hover:text-[#a47b55]"
            >
              Bridal Wear
            </button>

            <button
              type="button"
              className="whitespace-nowrap pb-2 text-[#756b60] transition hover:text-[#a47b55]"
            >
              Evening Gowns
            </button>

            <button
              type="button"
              className="whitespace-nowrap pb-2 text-[#756b60] transition hover:text-[#a47b55]"
            >
              Sarees
            </button>

            <button
              type="button"
              className="whitespace-nowrap pb-2 text-[#756b60] transition hover:text-[#a47b55]"
            >
              Party Wear
            </button>
          </div>

          <div className="flex shrink-0 items-center gap-6 text-xs uppercase tracking-widest text-[#756b60]">
            <button type="button" className="flex items-center gap-2">
              <FiSliders />
              Filters
            </button>

            
          </div>
        </div>
      </section>

      {/* Collection Section */}
      <section className="px-5 py-12 sm:px-8 sm:py-16 lg:px-14">

        <div className="mx-auto mb-8 flex max-w-[1440px] items-center justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#a47b55]">
              CURATED FOR YOU
            </p>

            <h2 className="mt-2 font-serif text-2xl sm:text-3xl">
              Find Your Perfect Look
            </h2>
          </div>

          <p className="hidden text-xs text-[#756b60] sm:block">
            8 curated pieces
          </p>
        </div>

        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* Dress 1 */}
          <div className="group">
            <div className="relative aspect-[3/4] overflow-hidden bg-[#eee7dd]">
              <img
                src={prodn3}
                alt="Aura Midnight Silk Gown"
                className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
              />

              <span className="absolute left-3 top-3 bg-[#faf8f4] px-3 py-1.5 text-[9px] tracking-widest">
                NEW ARRIVAL
              </span>

              <button
                type="button"
                aria-label="Add to wishlist"
                className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 transition hover:bg-[#29251f] hover:text-white"
              >
                <FiHeart />
              </button>

              <button
                type="button"
                aria-label="Delete dress"
                className="absolute right-3 top-14 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-red-600 shadow-sm transition hover:bg-red-600 hover:text-white"
              >
                <FiTrash2 />
              </button>

              <Link
                to="/dressdetails/1"
                className="absolute inset-x-3 bottom-3 bg-[#29251f] py-3.5 text-center text-[10px] tracking-widest text-white transition hover:bg-[#a47b55]"
              >
                VIEW DRESS
              </Link>
            </div>

            <p className="mt-4 text-[10px] tracking-[0.2em] text-[#a47b55]">
              EVENING WEAR
            </p>

            <h3 className="mt-1 font-serif text-lg">
              Aura Midnight Silk Gown
            </h3>

            <p className="mt-2 text-xs">
              ₹1,500 <span className="text-[#756b60]">/ 3 days</span>
            </p>

            <p className="mt-2 text-xs text-[#756b60]">
              Sizes: S · M · L
            </p>
          </div>

          {/* Dress 2 */}
          <div className="group">
            <div className="relative aspect-[3/4] overflow-hidden bg-[#eee7dd]">
              <img
                src={prodn2}
                alt="Zari Embroidered Bridal Lehenga"
                className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
              />

              <span className="absolute left-3 top-3 bg-[#faf8f4] px-3 py-1.5 text-[9px] tracking-widest">
                POPULAR
              </span>

              <button
                type="button"
                aria-label="Add to wishlist"
                className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 transition hover:bg-[#29251f] hover:text-white"
              >
                <FiHeart />
              </button>

              <button
                type="button"
                aria-label="Delete dress"
                className="absolute right-3 top-14 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-red-600 shadow-sm transition hover:bg-red-600 hover:text-white"
              >
                <FiTrash2 />
              </button>

              <Link
                to="/dressdetails/2"
                className="absolute inset-x-3 bottom-3 bg-[#29251f] py-3.5 text-center text-[10px] tracking-widest text-white transition hover:bg-[#a47b55]"
              >
                VIEW DRESS
              </Link>
            </div>

            <p className="mt-4 text-[10px] tracking-[0.2em] text-[#a47b55]">
              BRIDAL COLLECTION
            </p>

            <h3 className="mt-1 font-serif text-lg">
              Zari Embroidered Bridal Lehenga
            </h3>

            <p className="mt-2 text-xs">
              ₹2,500 <span className="text-[#756b60]">/ 3 days</span>
            </p>

            <p className="mt-2 text-xs text-[#756b60]">
              Sizes: XS · S · M
            </p>
          </div>

          {/* Dress 3 */}
          <div className="group">
            <div className="relative aspect-[3/4] overflow-hidden bg-[#eee7dd]">
              <img
                src={outfit1}
                alt="Ethereal Ivory Ceremony Gown"
                className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
              />

              <span className="absolute left-3 top-3 bg-[#faf8f4] px-3 py-1.5 text-[9px] tracking-widest">
                EXCLUSIVE
              </span>

              <button
                type="button"
                aria-label="Add to wishlist"
                className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 transition hover:bg-[#29251f] hover:text-white"
              >
                <FiHeart />
              </button>

              <button
                type="button"
                aria-label="Delete dress"
                className="absolute right-3 top-14 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-red-600 shadow-sm transition hover:bg-red-600 hover:text-white"
              >
                <FiTrash2 />
              </button>

              <Link
                to="/dressdetails/3"
                className="absolute inset-x-3 bottom-3 bg-[#29251f] py-3.5 text-center text-[10px] tracking-widest text-white transition hover:bg-[#a47b55]"
              >
                VIEW DRESS
              </Link>
            </div>

            <p className="mt-4 text-[10px] tracking-[0.2em] text-[#a47b55]">
              BRIDAL COUTURE
            </p>

            <h3 className="mt-1 font-serif text-lg">
              Ethereal Ivory Ceremony Gown
            </h3>

            <p className="mt-2 text-xs">
              ₹3,000 <span className="text-[#756b60]">/ 3 days</span>
            </p>

            <p className="mt-2 text-xs text-[#756b60]">
              Sizes: S · M
            </p>
          </div>

          {/* Dress 4 */}
          <div className="group">
            <div className="relative aspect-[3/4] overflow-hidden bg-[#eee7dd]">
              <img
                src={prodn1}
                alt="Blush Pleated Bridesmaid Dress"
                className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
              />

              <span className="absolute left-3 top-3 bg-[#faf8f4] px-3 py-1.5 text-[9px] tracking-widest">
                NEW ARRIVAL
              </span>

              <button
                type="button"
                aria-label="Add to wishlist"
                className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 transition hover:bg-[#29251f] hover:text-white"
              >
                <FiHeart />
              </button>

              <button
                type="button"
                aria-label="Delete dress"
                className="absolute right-3 top-14 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-red-600 shadow-sm transition hover:bg-red-600 hover:text-white"
              >
                <FiTrash2 />
              </button>

              <Link
                to="/dressdetails/4"
                className="absolute inset-x-3 bottom-3 bg-[#29251f] py-3.5 text-center text-[10px] tracking-widest text-white transition hover:bg-[#a47b55]"
              >
                VIEW DRESS
              </Link>
            </div>

            <p className="mt-4 text-[10px] tracking-[0.2em] text-[#a47b55]">
              BRIDESMAID EDIT
            </p>

            <h3 className="mt-1 font-serif text-lg">
              Blush Pleated Bridesmaid Dress
            </h3>

            <p className="mt-2 text-xs">
              ₹1,800 <span className="text-[#756b60]">/ 3 days</span>
            </p>

            <p className="mt-2 text-xs text-[#756b60]">
              Sizes: S · M · L · XL
            </p>
          </div>

          {/* Dress 5 */}
          <div className="group">
            <div className="relative aspect-[3/4] overflow-hidden bg-[#eee7dd]">
              <img
                src={outfit2}
                alt="Vintage Velvet Reception Gown"
                className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
              />

              <button
                type="button"
                aria-label="Add to wishlist"
                className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 transition hover:bg-[#29251f] hover:text-white"
              >
                <FiHeart />
              </button>

              <button
                type="button"
                aria-label="Delete dress"
                className="absolute right-3 top-14 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-red-600 shadow-sm transition hover:bg-red-600 hover:text-white"
              >
                <FiTrash2 />
              </button>

              <Link
                to="/dressdetails/5"
                className="absolute inset-x-3 bottom-3 bg-[#29251f] py-3.5 text-center text-[10px] tracking-widest text-white transition hover:bg-[#a47b55]"
              >
                VIEW DRESS
              </Link>
            </div>

            <p className="mt-4 text-[10px] tracking-[0.2em] text-[#a47b55]">
              PARTY COUTURE
            </p>

            <h3 className="mt-1 font-serif text-lg">
              Vintage Velvet Reception Gown
            </h3>

            <p className="mt-2 text-xs">
              ₹2,100 <span className="text-[#756b60]">/ 3 days</span>
            </p>

            <p className="mt-2 text-xs text-[#756b60]">
              Sizes: XS · S · M
            </p>
          </div>

          {/* Dress 6 */}
          <div className="group">
            <div className="relative aspect-[3/4] overflow-hidden bg-[#eee7dd]">
              <img
                src={outfit3}
                alt="Emerald Handcrafted Saree"
                className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
              />

              <span className="absolute left-3 top-3 bg-[#faf8f4] px-3 py-1.5 text-[9px] tracking-widest">
                HANDCRAFTED
              </span>

              <button
                type="button"
                aria-label="Add to wishlist"
                className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 transition hover:bg-[#29251f] hover:text-white"
              >
                <FiHeart />
              </button>

              <button
                type="button"
                aria-label="Delete dress"
                className="absolute right-3 top-14 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-red-600 shadow-sm transition hover:bg-red-600 hover:text-white"
              >
                <FiTrash2 />
              </button>

              <Link
                to="/dressdetails/6"
                className="absolute inset-x-3 bottom-3 bg-[#29251f] py-3.5 text-center text-[10px] tracking-widest text-white transition hover:bg-[#a47b55]"
              >
                VIEW DRESS
              </Link>
            </div>

            <p className="mt-4 text-[10px] tracking-[0.2em] text-[#a47b55]">
              HERITAGE SILK
            </p>

            <h3 className="mt-1 font-serif text-lg">
              Emerald Handcrafted Saree
            </h3>

            <p className="mt-2 text-xs">
              ₹2,200 <span className="text-[#756b60]">/ 3 days</span>
            </p>

            <p className="mt-2 text-xs text-[#756b60]">
              Sizes: Free Size
            </p>
          </div>

          {/* Dress 7 */}
          <div className="group">
            <div className="relative aspect-[3/4] overflow-hidden bg-[#eee7dd]">
              <img
                src={prodn4}
                alt="Sculpted Metallic Cocktail Dress"
                className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
              />

              <button
                type="button"
                aria-label="Add to wishlist"
                className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 transition hover:bg-[#29251f] hover:text-white"
              >
                <FiHeart />
              </button>

              <button
                type="button"
                aria-label="Delete dress"
                className="absolute right-3 top-14 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-red-600 shadow-sm transition hover:bg-red-600 hover:text-white"
              >
                <FiTrash2 />
              </button>

              <Link
                to="/dressdetails/7"
                className="absolute inset-x-3 bottom-3 bg-[#29251f] py-3.5 text-center text-[10px] tracking-widest text-white transition hover:bg-[#a47b55]"
              >
                VIEW DRESS
              </Link>
            </div>

            <p className="mt-4 text-[10px] tracking-[0.2em] text-[#a47b55]">
              COCKTAIL & PARTY
            </p>

            <h3 className="mt-1 font-serif text-lg">
              Sculpted Metallic Cocktail Dress
            </h3>

            <p className="mt-2 text-xs">
              ₹1,650 <span className="text-[#756b60]">/ 3 days</span>
            </p>

            <p className="mt-2 text-xs text-[#756b60]">
              Sizes: S · M
            </p>
          </div>

          {/* Dress 8 */}
          <div className="group">
            <div className="relative aspect-[3/4] overflow-hidden bg-[#eee7dd]">
              <img
                src={outfit4}
                alt="Midnight Sequined Gala Gown"
                className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
              />

              <span className="absolute left-3 top-3 bg-[#faf8f4] px-3 py-1.5 text-[9px] tracking-widest">
                TRENDING
              </span>

              <button
                type="button"
                aria-label="Add to wishlist"
                className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 transition hover:bg-[#29251f] hover:text-white"
              >
                <FiHeart />
              </button>

              <button
                type="button"
                aria-label="Delete dress"
                className="absolute right-3 top-14 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-red-600 shadow-sm transition hover:bg-red-600 hover:text-white"
              >
                <FiTrash2 />
              </button>

              <Link
                to="/dressdetails/8"
                className="absolute inset-x-3 bottom-3 bg-[#29251f] py-3.5 text-center text-[10px] tracking-widest text-white transition hover:bg-[#a47b55]"
              >
                VIEW DRESS
              </Link>
            </div>

            <p className="mt-4 text-[10px] tracking-[0.2em] text-[#a47b55]">
              EVENING WEAR
            </p>

            <h3 className="mt-1 font-serif text-lg">
              Midnight Sequined Gala Gown
            </h3>

            <p className="mt-2 text-xs">
              ₹2,400 <span className="text-[#756b60]">/ 3 days</span>
            </p>

            <p className="mt-2 text-xs text-[#756b60]">
              Sizes: XS · S · M · L
            </p>
          </div>

        </div>

        {/* Load More Design Only */}
        <div className="mt-16 text-center">
          <button
            type="button"
            className="border border-[#29251f] px-10 py-4 text-xs tracking-widest transition hover:bg-[#29251f] hover:text-white"
          >
            LOAD MORE PIECES
          </button>
        </div>
      </section>

      {/* Bottom Banner */}
      <section className="bg-[#eee7dd] px-5 py-14 text-center sm:py-20">
        <p className="text-[10px] uppercase tracking-[0.3em] text-[#a47b55]">
          RENT YOUR DREAM LOOK
        </p>

        <h2 className="mx-auto mt-4 max-w-2xl font-serif text-3xl leading-tight sm:text-5xl">
          Beautiful Moments Deserve Beautiful Outfits
        </h2>

        <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-[#756b60]">
          Discover your next special-occasion outfit with Rentelle.
          Make every celebration unforgettable.
        </p>

        <Link
          to="/"
          className="mt-8 inline-block bg-[#29251f] px-8 py-4 text-[10px] tracking-[0.2em] text-white transition hover:bg-[#a47b55]"
        >
          BACK TO HOME
        </Link>
      </section>

    </main>
  );
};

export default DressCollection;
