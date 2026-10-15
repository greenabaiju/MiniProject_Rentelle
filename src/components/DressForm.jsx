
import React from "react";

const DressForm = () => {
  return (
    <form className="space-y-8">

      {/* Basic Details */}
      <div className="border border-[#e8e2d9] bg-white p-6 sm:p-8">
        <h2 className="mb-6 border-b border-[#e8e2d9] pb-4 font-serif text-2xl">
          Dress Details
        </h2>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label className="text-sm">Dress Name *</label>
            <input
              type="text"
              name="title"
              placeholder="Enter dress name"
              required
              className="form-input"
            />
          </div>

          <div>
            <label className="text-sm">Category *</label>
            <select name="category" required className="form-input">
              <option value="">Select Category</option>
              <option>Bridal Wear</option>
              <option>Engagement Wear</option>
              <option>Party Wear</option>
              <option>Sarees</option>
              <option>Evening Gowns</option>
            </select>
          </div>

          <div>
            <label className="text-sm">Designer</label>
            <input
              type="text"
              name="designer"
              placeholder="Designer name"
              className="form-input"
            />
          </div>

          <div>
            <label className="text-sm">Color</label>
            <input
              type="text"
              name="color"
              placeholder="Enter color"
              className="form-input"
            />
          </div>

          <div>
            <label className="text-sm">Fabric</label>
            <input
              type="text"
              name="fabric"
              placeholder="Enter fabric"
              className="form-input"
            />
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="border border-[#e8e2d9] bg-white p-6 sm:p-8">
        <h2 className="mb-6 border-b border-[#e8e2d9] pb-4 font-serif text-2xl">
          Rental Pricing
        </h2>

        <div className="grid gap-5 sm:grid-cols-3">
          <div>
            <label className="text-sm">Rental Price (₹) *</label>
            <input
              type="number"
              name="price"
              placeholder="2500"
              min="1"
              required
              className="form-input"
            />
          </div>

          <div>
            <label className="text-sm">Security Deposit (₹)</label>
            <input
              type="number"
              name="deposit"
              placeholder="1000"
              min="0"
              className="form-input"
            />
          </div>

          <div>
            <label className="text-sm">Original Price (₹)</label>
            <input
              type="number"
              name="retailValue"
              placeholder="10000"
              min="0"
              className="form-input"
            />
          </div>
        </div>
      </div>

      {/* Sizes */}
      <div className="border border-[#e8e2d9] bg-white p-6 sm:p-8">
        <h2 className="mb-6 border-b border-[#e8e2d9] pb-4 font-serif text-2xl">
          Size & Availability
        </h2>

        <label className="mb-4 block text-sm">Available Sizes</label>

        <div className="flex flex-wrap gap-4">
          {["XS", "S", "M", "L", "XL", "Free Size"].map((size) => (
            <label key={size} className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                name="sizes"
                value={size}
                className="accent-[#a47b55]"
              />
              {size}
            </label>
          ))}
        </div>

        <div className="mt-6">
          <label className="text-sm">Fit Details</label>
          <input
            type="text"
            name="fitNotes"
            placeholder="Enter fitting details"
            className="form-input"
          />
        </div>
      </div>

      {/* Image */}
      <div className="border border-[#e8e2d9] bg-white p-6 sm:p-8">
        <h2 className="mb-6 border-b border-[#e8e2d9] pb-4 font-serif text-2xl">
          Dress Image
        </h2>

        <label className="text-sm">Image URL or Local Path</label>
        <input
          type="text"
          name="imageUrl"
          placeholder="/assets/outfit1.png"
          className="form-input"
        />
      </div>

      {/* Description */}
      <div className="border border-[#e8e2d9] bg-white p-6 sm:p-8">
        <h2 className="mb-6 border-b border-[#e8e2d9] pb-4 font-serif text-2xl">
          Description & Care
        </h2>

        <label className="text-sm">Dress Description</label>
        <textarea
          name="description"
          rows="4"
          placeholder="Describe the dress..."
          className="form-input"
        />

        <label className="mt-5 block text-sm">Care Instructions</label>
        <input
          type="text"
          name="care"
          placeholder="Enter care instructions"
          className="form-input"
        />
      </div>

      {/* Buttons */}
      <div className="flex flex-col justify-end gap-4 sm:flex-row">
        <button
          type="reset"
          className="border border-[#e8e2d9] px-6 py-3 text-sm hover:border-[#a47b55]"
        >
          CLEAR FORM
        </button>

        <button
          type="submit"
          className="bg-[#29251f] px-8 py-3 text-sm text-white transition hover:bg-[#a47b55]"
        >
          ADD DRESS
        </button>
      </div>

    </form>
  );
};

export default DressForm;
