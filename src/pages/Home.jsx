
import React from "react";
import { Link } from "react-router-dom";

import background from "../assets/fashion3.jpeg";
import outfit1 from "../assets/outfit1.png";
import outfit2 from "../assets/outfit2.jpeg";
import outfit3 from "../assets/outfit3.jpeg";
import outfit4 from "../assets/outfit4.jpeg";
import product1 from "../assets/prodn1.jpg";
import product2 from "../assets/prodn2.jpeg";
import product3 from "../assets/prodn3.jpg";
import testimonial1 from "../assets/testimonial1.jpg";
import testimonial2 from "../assets/testimonial2.jpg";
import testimonial3 from "../assets/testimonial3.jpg";

function Home() {


  return (
    <main className="overflow-hidden bg-[#faf8f4] text-[#29251f]">

      {/* HERO SECTION */}
      <section
        id="collections"
        className="relative flex min-h-[650px] items-center justify-center bg-cover bg-center text-white md:min-h-[750px]"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 px-5 pb-20 text-center">
          <p className="text-xs tracking-[0.3em] text-[#e3c9a7]">
            THE OCCASION EDIT
          </p>

          <h1 className="mt-5 font-serif text-6xl sm:text-8xl md:text-9xl">
            Rentelle<span className="text-[#d6b991]">.</span>
          </h1>

          <p className="mt-5 font-serif text-xl italic sm:text-2xl">
            Timeless Elegance. Rent Your Moment.
          </p>

          <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-white/80">
            Discover beautiful occasion wear for weddings, celebrations,
            and unforgettable moments without the cost of buying.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/dresses"

              className="bg-[#faf8f4] px-7 py-4 text-xs tracking-widest text-[#29251f] transition hover:bg-[#d8bd98]"
            >
              DISCOVER COLLECTION →
            </Link>

            <Link
              to="/adddress"
              className="border border-white px-7 py-4 text-xs tracking-widest text-white transition hover:bg-white hover:text-[#29251f]"
            >
              ADD NEW OUTFIT +
            </Link>
          </div>
        </div>

        {/* HERO IMAGE GALLERY */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-white/20 bg-black/20 px-4 py-5">
          <div className="flex items-center justify-center gap-3 sm:gap-5">

            <Link
              to="#shop"

              className="h-16 w-12 overflow-hidden border border-white/40 sm:h-24 sm:w-16"
            >
              <img
                src={outfit1}
                alt="Elegant wedding outfit"
                className="h-full w-full object-cover transition duration-500 hover:scale-110"
              />
            </Link>
            <Link
              to="#shop"
              className="h-16 w-12 overflow-hidden border border-white/40 sm:h-24 sm:w-16"
            >
              <img
                src={outfit2}
                alt="Traditional occasion wear"
                className="h-full w-full object-cover transition duration-500 hover:scale-110"
              />
            </Link>
            <Link
              to="#shop"
              className="h-16 w-12 overflow-hidden border border-white/40 sm:h-24 sm:w-16"
            >
              <img
                src={outfit3}
                alt="Party wear"
                className="h-full w-full object-cover transition duration-500 hover:scale-110"
              />
            </Link>
            <Link
              to="#shop"
              className="h-16 w-12 overflow-hidden border border-white/40 sm:h-24 sm:w-16"
            >
              <img
                src={outfit4}
                alt="Evening outfit"
                className="h-full w-full object-cover transition duration-500 hover:scale-110"
              />
            </Link>

            <div className="hidden sm:block">
              <p className="text-[9px] tracking-widest text-white/70">
                FIND YOUR LOOK
              </p>
              <p className="mt-1 font-serif text-lg">
                Made for your moment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BRAND PROMISE */}
      <section className="border-b border-[#e8dfd2] bg-[#f1ece4] px-5 py-6">
        <div className="mx-auto grid max-w-6xl gap-4 text-center sm:grid-cols-3">
          <p className="text-xs text-[#62584d]">
            ✦ Occasion-ready styles
          </p>
          <p className="text-xs text-[#62584d]">
            ✦ A smarter way to dress
          </p>
          <p className="text-xs text-[#62584d]">
            ✦ Looks worth remembering
          </p>
        </div>
      </section>

      {/* LATEST COLLECTION */}
      <section id="shop" className="scroll-mt-20 px-5 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">

          <p className="text-[10px] tracking-[0.3em] text-[#9c805c]">
            CURATED FOR YOU
          </p>

          <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
                The Latest Edit
              </h2>

              <p className="mt-4 max-w-md text-sm leading-7 text-[#81776c]">
                Discover beautiful outfits for weddings, parties, and
                every occasion worth celebrating.
              </p>
            </div>

            <Link
              to="/dresses"
              className="text-xs tracking-widest transition hover:text-[#9c805c]"
            >
              EXPLORE LOOKBOOK →
            </Link>
          </div>

          {/* OUTFIT 1 */}
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">

            <article className="group">
              <div className="relative aspect-[3/4] overflow-hidden bg-[#eee9e0]">
                <img
                  src={product3}
                  alt="Elegant evening gown"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <span className="absolute left-3 top-3 bg-[#faf8f4] px-3 py-2 text-[9px] tracking-widest">
                  NEW ARRIVAL
                </span>

                <Link
                  to="/dresses"
                  className="absolute inset-x-3 bottom-3 bg-[#29251f] py-4 text-center text-xs tracking-widest text-white opacity-0 transition group-hover:opacity-100"
                >
                  EXPLORE OUTFIT →
                </Link>
              </div>

              <p className="mt-5 text-[10px] tracking-widest text-[#9c805c]">
                GOWN COLLECTION
              </p>
              <h3 className="mt-2 font-serif text-xl">
                Elegant Evening Gown
              </h3>
              <p className="mt-3 text-sm">
                ₹1,500 <span className="text-xs text-[#93887c]">/ rental</span>
              </p>
            </article>

            {/* OUTFIT 2 */}
            <article className="group">
              <div className="relative aspect-[3/4] overflow-hidden bg-[#eee9e0]">
                <img
                  src={product2}
                  alt="Elegant bridal lehenga"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <span className="absolute left-3 top-3 bg-[#faf8f4] px-3 py-2 text-[9px] tracking-widest">
                  POPULAR
                </span>

                <Link
                  to="/dresses"

                  className="absolute inset-x-3 bottom-3 bg-[#29251f] py-4 text-center text-xs tracking-widest text-white opacity-0 transition group-hover:opacity-100"
                >
                  EXPLORE OUTFIT →
                </Link>
              </div>

              <p className="mt-5 text-[10px] tracking-widest text-[#9c805c]">
                BRIDAL COLLECTION
              </p>
              <h3 className="mt-2 font-serif text-xl">
                Elegant Bridal Lehenga
              </h3>
              <p className="mt-3 text-sm">
                ₹2,500 <span className="text-xs text-[#93887c]">/ rental</span>
              </p>
            </article>

            {/* OUTFIT 3 */}
            <article className="group">
              <div className="relative aspect-[3/4] overflow-hidden bg-[#eee9e0]">
                <img
                  src={outfit1}
                  alt="Christian wedding gown"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <span className="absolute left-3 top-3 bg-[#faf8f4] px-3 py-2 text-[9px] tracking-widest">
                  EXCLUSIVE
                </span>

                <Link
                  to="/dresses"

                  className="absolute inset-x-3 bottom-3 bg-[#29251f] py-4 text-center text-xs tracking-widest text-white opacity-0 transition group-hover:opacity-100"
                >
                  EXPLORE OUTFIT →
                </Link>
              </div>

              <p className="mt-5 text-[10px] tracking-widest text-[#9c805c]">
                BRIDAL COLLECTION
              </p>
              <h3 className="mt-2 font-serif text-xl">
                Christian Wedding Gown
              </h3>
              <p className="mt-3 text-sm">
                ₹3,000 <span className="text-xs text-[#93887c]">/ rental</span>
              </p>
            </article>

            {/* OUTFIT 4 */}
            <article className="group">
              <div className="relative aspect-[3/4] overflow-hidden bg-[#eee9e0]">
                <img
                  src={product1}
                  alt="Elegant bridesmaid dress"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <span className="absolute left-3 top-3 bg-[#faf8f4] px-3 py-2 text-[9px] tracking-widest">
                  NEW ARRIVAL
                </span>

                <Link
                  to="/dresses"
                  className="absolute inset-x-3 bottom-3 bg-[#29251f] py-4 text-center text-xs tracking-widest text-white opacity-0 transition group-hover:opacity-100"
                >
                  EXPLORE OUTFIT →
                </Link>
              </div>

              <p className="mt-5 text-[10px] tracking-widest text-[#9c805c]">
                BRIDESMAID COLLECTION
              </p>
              <h3 className="mt-2 font-serif text-xl">
                Elegant Bridesmaid Dress
              </h3>
              <p className="mt-3 text-sm">
                ₹1,800 <span className="text-xs text-[#93887c]">/ rental</span>
              </p>
            </article>

          </div>
        </div>
      </section>

      {/* BRAND STORY */}
      <section
        id="atelier"
        className="scroll-mt-20 bg-[#f0ece5] px-5 py-20 md:px-10 md:py-24"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">

          <div className="relative">
            <div className="absolute -bottom-3 -right-3 h-full w-full border border-[#cbb79b]" />

            <img
              src={outfit2}
              alt="Rentelle occasion wear collection"
              className="relative z-10 h-[380px] w-full object-cover sm:h-[500px]"
            />

            <div className="absolute -bottom-6 left-5 z-20 bg-[#faf8f4] px-6 py-4">
              <p className="font-serif text-xl italic">
                Style with intention.
              </p>
            </div>
          </div>

          <div>
            <p className="text-[10px] tracking-[0.3em] text-[#8a7f72]">
              THE RENTELLE PHILOSOPHY
            </p>

            <h2 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl">
              Elegance isn't owned.
              <span className="mt-2 block italic text-[#9c805c]">
                It's experienced.
              </span>
            </h2>

            <p className="mt-7 text-sm leading-8 text-[#756b60]">
              Every celebration deserves something special. Rentelle brings
              together beautiful occasion wear so you can discover your
              perfect look and create lasting memories without the commitment
              of buying.
            </p>

            <p className="mt-4 text-sm leading-8 text-[#756b60]">
              From graceful sarees to statement-making gowns, find a look
              that feels like you.
            </p>

            <Link
              to="/about"
              className="mt-8 inline-block border-b border-[#29251f] pb-3 text-xs tracking-widest transition hover:text-[#9c805c]"
            >
              DISCOVER OUR WORLD →
            </Link>
          </div>

        </div>
      </section>

      {/* LOOKBOOK */}

      <div className="lookbook-viewport mt-10 overflow-hidden">
        <div className="lookbook-track flex gap-5">

          {/* LOOK 1 */}
          <Link
            to="#shop"
            className="lookbook-card group relative block h-[360px] w-[260px] shrink-0 overflow-hidden sm:w-[300px]"
          >
            <img
              src={product3}
              alt="Bridal gown"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-0 p-6 text-white">
              <p className="text-[10px] tracking-widest text-[#dfc49e]">LOOK 01</p>
              <h3 className="mt-2 font-serif text-2xl">Bridal Gown</h3>
            </div>
          </Link>

          {/* LOOK 2 */}
          <Link
            to="#shop"
            className="lookbook-card group relative block h-[360px] w-[260px] shrink-0 overflow-hidden sm:w-[300px]"
          >
            <img
              src={product2}
              alt="Bridal lehenga"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-0 p-6 text-white">
              <p className="text-[10px] tracking-widest text-[#dfc49e]">LOOK 02</p>
              <h3 className="mt-2 font-serif text-2xl">Bridal Lehenga</h3>
            </div>
          </Link>

          {/* LOOK 3 */}
          <Link
            to="#shop"
            className="lookbook-card group relative block h-[360px] w-[260px] shrink-0 overflow-hidden sm:w-[300px]"
          >
            <img
              src={outfit3}
              alt="Festive wear"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-0 p-6 text-white">
              <p className="text-[10px] tracking-widest text-[#dfc49e]">LOOK 03</p>
              <h3 className="mt-2 font-serif text-2xl">Festive Wear</h3>
            </div>
          </Link>

          {/* LOOK 4 */}
          <Link
            to="#shop"
            className="lookbook-card group relative block h-[360px] w-[260px] shrink-0 overflow-hidden sm:w-[300px]"
          >
            <img
              src={product1}
              alt="Party wear"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-0 p-6 text-white">
              <p className="text-[10px] tracking-widest text-[#dfc49e]">LOOK 04</p>
              <h3 className="mt-2 font-serif text-2xl">Party Wear</h3>
            </div>
          </Link>

          {/* DUPLICATE CARDS FOR CONTINUOUS SCROLL */}
          <Link to="#shop" className="lookbook-card group relative block h-[360px] w-[260px] shrink-0 overflow-hidden sm:w-[300px]">
            <img src={product3} alt="Bridal gown" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-0 p-6 text-white">
              <p className="text-[10px] tracking-widest text-[#dfc49e]">LOOK 01</p>
              <h3 className="mt-2 font-serif text-2xl">Bridal Gown</h3>
            </div>
          </Link>

          <Link to="#shop" className="lookbook-card group relative block h-[360px] w-[260px] shrink-0 overflow-hidden sm:w-[300px]">
            <img src={product2} alt="Bridal lehenga" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-0 p-6 text-white">
              <p className="text-[10px] tracking-widest text-[#dfc49e]">LOOK 02</p>
              <h3 className="mt-2 font-serif text-2xl">Bridal Lehenga</h3>
            </div>
          </Link>

          <Link to="#shop" className="lookbook-card group relative block h-[360px] w-[260px] shrink-0 overflow-hidden sm:w-[300px]">
            <img src={outfit3} alt="Festive wear" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-0 p-6 text-white">
              <p className="text-[10px] tracking-widest text-[#dfc49e]">LOOK 03</p>
              <h3 className="mt-2 font-serif text-2xl">Festive Wear</h3>
            </div>
          </Link>

          <Link to="#shop" className="lookbook-card group relative block h-[360px] w-[260px] shrink-0 overflow-hidden sm:w-[300px]">
            <img src={product1} alt="Party wear" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-0 p-6 text-white">
              <p className="text-[10px] tracking-widest text-[#dfc49e]">LOOK 04</p>
              <h3 className="mt-2 font-serif text-2xl">Party Wear</h3>
            </div>
          </Link>

        </div>
      </div>


      {/* TESTIMONIALS */}
      <section
        id="testimonials"
        className="bg-[#faf8f4] px-5 py-20 md:px-10"
      >
        <div className="mx-auto max-w-7xl">

          <div className="mb-12 text-center">
            <p className="text-xs tracking-[0.3em] text-[#9c805c]">
              KIND WORDS
            </p>

            <h2 className="mt-4 font-serif text-4xl md:text-5xl">
              Moments to Remember
            </h2>

            <p className="mt-4 text-sm text-[#81776c]">
              Beautiful outfits. Special occasions. Lasting memories.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            <article className="border border-[#e8dfd2] bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg">
              <p className="text-[#b69a65]">★★★★★</p>

              <p className="mt-5 font-serif text-lg leading-8 text-[#51483e]">
                "I found the perfect outfit for my best friend's wedding.
                Beautiful quality and such an easy rental experience."
              </p>

              <div className="mt-6 flex items-center gap-3 border-t border-[#eee7dc] pt-5">
                <img
                  src={testimonial1}
                  alt="Aarohi Verma"
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-serif">Aarohi Verma</h3>
                  <p className="text-xs text-[#81776c]">Wedding Guest</p>
                </div>
              </div>
            </article>

            <article className="border border-[#e8dfd2] bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg">
              <p className="text-[#b69a65]">★★★★★</p>

              <p className="mt-5 font-serif text-lg leading-8 text-[#51483e]">
                "The collection is gorgeous. My outfit made my special
                celebration feel even more memorable."
              </p>

              <div className="mt-6 flex items-center gap-3 border-t border-[#eee7dc] pt-5">
                <img
                  src={testimonial2}
                  alt="Meera Kapoor"
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-serif">Meera Kapoor</h3>
                  <p className="text-xs text-[#81776c]">Special Occasion</p>
                </div>
              </div>
            </article>

            <article className="border border-[#e8dfd2] bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg">
              <p className="text-[#b69a65]">★★★★★</p>

              <p className="mt-5 font-serif text-lg leading-8 text-[#51483e]">
                "A stunning outfit without the expense of buying one.
                Renting with Rentelle felt simple and elegant."
              </p>

              <div className="mt-6 flex items-center gap-3 border-t border-[#eee7dc] pt-5">
                <img
                  src={testimonial3}
                  alt="Ananya Sen"
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-serif">Ananya Sen</h3>
                  <p className="text-xs text-[#81776c]">Party Wear</p>
                </div>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* FINAL PROMOTION */}


    </main>
  );
}

export default Home;
