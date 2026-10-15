
import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import DressForm from "../components/DressForm";

const AddDress = () => {
  return (
    <main className="min-h-screen bg-[#faf8f4] text-[#29251f]">

      {/* Header */}
      <section className="border-b border-[#e8e2d9] px-6 py-10">
        <div className="mx-auto max-w-6xl">

          <Link
            to="/dresses"
            className="inline-flex items-center gap-2 text-sm text-[#756b60] hover:text-[#a47b55]"
          >
            <FiArrowLeft />
            Back to Collection
          </Link>

          <h1 className="mt-6 font-serif text-3xl sm:text-4xl">
            Add a New Dress
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-7 text-[#756b60]">
            Add dress details, upload an image, and set the rental price
            to include your outfit in the Rentelle collection.
          </p>

        </div>
      </section>

      {/* Dress Form */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <DressForm />
      </section>

    </main>
  );
};

export default AddDress;
