
import React from "react";
import { Link } from "react-router-dom";
import {
  FiArrowLeft,
  FiHeart,
  FiEdit2,
  FiTrash2,
} from "react-icons/fi";

import prodn3 from "../assets/prodn3.jpg";
import prodn2 from "../assets/prodn2.jpeg";
import outfit1 from "../assets/outfit1.png";
import outfit2 from "../assets/outfit2.jpeg";

const DressDetails = () => {
  return (
    <main className="min-h-screen bg-[#faf8f4] text-[#29251f]">

      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#e8e2d9] px-5 py-5 sm:px-10">
        <Link
          to="/dresses"
          className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#756b60] hover:text-[#a47b55]"
        >
          <FiArrowLeft />
          Back to Collection
        </Link>

        <div className="flex gap-2">
          <button
            type="button"
            className="flex items-center gap-2 border border-[#e8e2d9] px-4 py-2 text-xs transition hover:bg-[#eee7dd]"
          >
            <FiEdit2 />
            Edit
          </button>

          <button
            type="button"
            aria-label="Delete dress"
            className="flex items-center gap-2 border border-red-200 px-4 py-2 text-xs text-red-600 transition hover:bg-red-50"
          >
            <FiTrash2 />
            Delete
          </button>
        </div>
      </div>

      {/* Dress Details */}
      <section className="px-5 py-10 sm:px-10 lg:py-14">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-2 md:gap-14">

          {/* Dress Image */}
          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden bg-[#eee7dd]">
              <img
                src={prodn3}
                alt="Aura Midnight Silk Gown"
                className="h-full w-full object-cover object-top"
              />
            </div>

            <span className="absolute left-4 top-4 bg-[#faf8f4] px-4 py-2 text-[10px] tracking-widest">
              NEW ARRIVAL
            </span>

            <button
              type="button"
              aria-label="Add to wishlist"
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white"
            >
              <FiHeart />
            </button>
          </div>

          {/* Dress Information */}
          <div className="flex flex-col justify-center">

            <p className="text-xs tracking-[0.25em] text-[#a47b55]">
              EVENING WEAR
            </p>

            <h1 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">
              Aura Midnight Silk Gown
            </h1>

            <p className="mt-4 text-sm leading-7 text-[#756b60]">
              An elegant statement gown designed for special occasions,
              celebrations, and unforgettable evenings.
            </p>

            {/* Price */}
            <div className="mt-6 border-y border-[#e8e2d9] py-5">
              <p className="font-serif text-3xl">₹1,500</p>
              <p className="mt-1 text-xs text-[#756b60]">
                Rental price for 3 days
              </p>
              <p className="mt-3 text-xs text-[#756b60]">
                Refundable Deposit: ₹2,000
              </p>
            </div>

            {/* Dress Information */}
            <div className="mt-6 space-y-4 text-sm">
              <div className="flex justify-between border-b border-[#e8e2d9] pb-3">
                <span className="text-[#756b60]">Category</span>
                <span>Evening Wear</span>
              </div>

              <div className="flex justify-between border-b border-[#e8e2d9] pb-3">
                <span className="text-[#756b60]">Available Sizes</span>
                <span>S, M, L</span>
              </div>

              <div className="flex justify-between border-b border-[#e8e2d9] pb-3">
                <span className="text-[#756b60]">Color</span>
                <span>Midnight Black</span>
              </div>

              <div className="flex justify-between border-b border-[#e8e2d9] pb-3">
                <span className="text-[#756b60]">Availability</span>
                <span className="text-emerald-700">Available</span>
              </div>
            </div>

            {/* Sizes */}
            <div className="mt-7">
              <p className="mb-3 text-xs font-medium uppercase tracking-widest">
                Available Sizes
              </p>

              <div className="flex gap-3">
                <button type="button" className="h-10 w-12 border border-[#e8e2d9] text-xs">
                  S
                </button>
                <button type="button" className="h-10 w-12 border border-[#29251f] bg-[#29251f] text-xs text-white">
                  M
                </button>
                <button type="button" className="h-10 w-12 border border-[#e8e2d9] text-xs">
                  L
                </button>
              </div>
            </div>

           

          </div>
        </div>
      </section>

      {/* Related Dresses */}
      <section className="border-t border-[#e8e2d9] px-5 py-12 sm:px-10 sm:py-16">
        <div className="mx-auto max-w-6xl">

          <p className="text-xs tracking-[0.25em] text-[#a47b55]">
            EXPLORE MORE
          </p>

          <h2 className="mt-3 font-serif text-3xl">
            You May Also Like
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">

            {/* Related Dress 1 */}
            <Link to="/dressdetails/2" className="group">
              <div className="aspect-[3/4] overflow-hidden bg-[#eee7dd]">
                <img
                  src={prodn2}
                  alt="Bridal Lehenga"
                  className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-3 font-serif text-lg">
                Zari Bridal Lehenga
              </h3>
              <p className="mt-1 text-xs text-[#756b60]">
                ₹2,500 / 3 days
              </p>
            </Link>

            {/* Related Dress 2 */}
            <Link to="/dressdetails/3" className="group">
              <div className="aspect-[3/4] overflow-hidden bg-[#eee7dd]">
                <img
                  src={outfit1}
                  alt="Ivory Ceremony Gown"
                  className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-3 font-serif text-lg">
                Ivory Ceremony Gown
              </h3>
              <p className="mt-1 text-xs text-[#756b60]">
                ₹3,000 / 3 days
              </p>
            </Link>

            {/* Related Dress 3 */}
            <Link to="/dressdetails/5" className="group">
              <div className="aspect-[3/4] overflow-hidden bg-[#eee7dd]">
                <img
                  src={outfit2}
                  alt="Velvet Reception Gown"
                  className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-3 font-serif text-lg">
                Velvet Reception Gown
              </h3>
              <p className="mt-1 text-xs text-[#756b60]">
                ₹2,100 / 3 days
              </p>
            </Link>

          </div>
        </div>
      </section>

    </main>
  );
};

export default DressDetails;
