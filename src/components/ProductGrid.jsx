import React from "react";
import { FiEye, FiHeart, FiArrowRight } from "react-icons/fi";

import outfit1 from "../assets/outfit1.avif";
import outfit2 from "../assets/outfit2.avif";
import outfit3 from "../assets/outfit3.avif";
import outfit4 from "../assets/outfit4.avif";

const products = [
  {
    id: 1,
    title: "The Camel Wool Coat",
    price: "$890",
    color: "Camel",
    badge: "NEW",
    image: outfit1,
    showViewBadge: true,
  },
  {
    id: 2,
    title: "Merino Turtleneck",
    price: "$220",
    color: "Charcoal",
    image: outfit2,
    showIcons: true,
    showAddButton: true,
  },
  {
    id: 3,
    title: "Ribbed Cashmere Sweater",
    price: "$340",
    color: "Oat",
    image: outfit3,
  },
  {
    id: 4,
    title: "Silk Slip Dress",
    price: "$420",
    color: "Champagne",
    image: outfit4,
  },
];

const ProductGrid=() =>{
  return (
    <div className="min-h-screen bg-[#F9F7F2] px-6 py-12 text-[#1A1A1A] font-sans">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 flex items-end justify-between">
          <div>
            <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#8C857B]">
              JUST ARRIVED
            </span>
            <h1 className="font-serif text-5xl tracking-tight text-[#1A1A1A] mt-1">
              New In
            </h1>
          </div>

          <a
            href="#view-all"
            className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-[#1A1A1A]"
          >
            VIEW ALL <FiArrowRight size={14} />
          </a>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((item) => (
            <div key={item.id} className="flex flex-col">
              {/* Image Container */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#EFECE6]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />

                {/* Badge: "NEW" */}
                {item.badge && (
                  <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-[#1A1A1A] shadow-sm">
                    {item.badge}
                  </span>
                )}

                {/* Card 1 Floating "VIEW" Circle Badge */}
                {item.showViewBadge && (
                  <div className="absolute -top-2 right-1/4 flex h-11 w-11 items-center justify-center rounded-full bg-[#242424] text-[10px] font-medium tracking-wider text-white shadow-md">
                    VIEW
                  </div>
                )}

                {/* Card 2 Top Action Icons */}
                {item.showIcons && (
                  <>
                    <div className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm">
                      <FiEye size={14} className="text-[#1A1A1A]" />
                    </div>
                    <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm">
                      <FiHeart size={14} className="text-[#1A1A1A]" />
                    </div>
                  </>
                )}

                {/* Card 2 "ADD TO BAG" Overlay Button */}
                {item.showAddButton && (
                  <div className="absolute inset-x-4 bottom-4">
                    <div className="w-full rounded-full bg-[#2B2825] py-3 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
                      ADD TO BAG
                    </div>
                  </div>
                )}
              </div>

              {/* Product Info below image */}
              <div className="mt-3 flex items-start justify-between text-xs">
                <div>
                  <h3 className="font-serif text-sm font-normal text-[#1A1A1A]">
                    {item.title}
                  </h3>
                  <p className="mt-1 font-sans text-xs font-semibold text-[#1A1A1A]">
                    {item.price}
                  </p>
                </div>
                <span className="text-[11px] text-[#A0988E]">{item.color}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductGrid