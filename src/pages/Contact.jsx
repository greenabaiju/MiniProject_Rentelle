import React from "react";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

const Contact = () => {
  return (
    <main className="min-h-screen bg-[#faf8f4] px-5 py-14 text-[#29251f] sm:px-10 lg:py-20">

      {/* Heading */}
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-[#a47b55]">
          WE ARE HERE TO HELP
        </p>

        <h1 className="mt-4 font-serif text-4xl sm:text-5xl">
          Contact Us
        </h1>

        <p className="mt-4 text-sm leading-7 text-[#756b60]">
          Have questions about renting a dress? We would love to hear from you.
        </p>
      </div>

      {/* Contact Content */}
      <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2">

        {/* Contact Information */}
        <div className="space-y-6 border border-[#e8e2d9] bg-white p-7 sm:p-9">
          <h2 className="font-serif text-2xl">
            Get in Touch
          </h2>

          <p className="text-sm leading-7 text-[#756b60]">
            Contact us for dress availability, rental prices, and styling assistance.
          </p>

          <div className="flex items-start gap-4 pt-3">
            <FiMapPin className="mt-1 h-5 w-5 shrink-0 text-[#a47b55]" />
            <div>
              <h3 className="text-sm font-medium">Our Location</h3>
              <p className="mt-1 text-sm leading-6 text-[#756b60]">
                Trivandrum, Kerala, India
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FiPhone className="mt-1 h-5 w-5 shrink-0 text-[#a47b55]" />
            <div>
              <h3 className="text-sm font-medium">Phone</h3>
              <p className="mt-1 text-sm text-[#756b60]">
                +91 98765 43210
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FiMail className="mt-1 h-5 w-5 shrink-0 text-[#a47b55]" />
            <div>
              <h3 className="text-sm font-medium">Email</h3>
              <p className="mt-1 text-sm text-[#756b60]">
                hello@rentelle.com
              </p>
            </div>
          </div>

          <div className="border-t border-[#e8e2d9] pt-5">
            <p className="text-xs leading-6 text-[#756b60]">
              Monday – Saturday: 10 AM – 7 PM
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="border border-[#e8e2d9] bg-white p-7 sm:p-9">
          <h2 className="font-serif text-2xl">
            Send a Message
          </h2>

          <p className="mt-2 text-sm text-[#756b60]">
            Fill in the details below and get in touch with us.
          </p>

          <form className="mt-7 space-y-5">
            <div>
              <label className="text-xs font-medium">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="mt-2 w-full border border-[#e8e2d9] bg-[#faf8f4] px-4 py-3 text-sm outline-none focus:border-[#a47b55]"
              />
            </div>

            <div>
              <label className="text-xs font-medium">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="mt-2 w-full border border-[#e8e2d9] bg-[#faf8f4] px-4 py-3 text-sm outline-none focus:border-[#a47b55]"
              />
            </div>

            <div>
              <label className="text-xs font-medium">Subject</label>
              <input
                type="text"
                placeholder="Enter subject"
                className="mt-2 w-full border border-[#e8e2d9] bg-[#faf8f4] px-4 py-3 text-sm outline-none focus:border-[#a47b55]"
              />
            </div>

            <div>
              <label className="text-xs font-medium">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="mt-2 w-full resize-y border border-[#e8e2d9] bg-[#faf8f4] px-4 py-3 text-sm outline-none focus:border-[#a47b55]"
              />
            </div>

            <button
              type="button"
              className="w-full bg-[#29251f] px-6 py-4 text-xs font-medium tracking-[0.2em] text-white transition hover:bg-[#a47b55]"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>

      </div>
    </main>
  );
};

export default Contact;