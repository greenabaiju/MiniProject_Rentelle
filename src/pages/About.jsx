import React from "react";
import { Link } from "react-router-dom";
import outfit1 from "../assets/outfit1.png";
import outfit2 from "../assets/outfit2.jpeg";

const About = () => {
  return (
    <main className="bg-[#faf8f4] text-[#29251f] selection:bg-[#eee7dd] selection:text-[#29251f]">
     
      <section className="relative px-5 py-16 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1152px]">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            
            {/* Left Column: Narrative Content */}
            <div className="flex flex-col justify-center text-left order-2 lg:order-1">
              <span className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.3em] text-[#a47b55]">
                WELCOME TO RENTELLE
              </span>

              <h1 className="mt-4 font-serif text-3xl sm:text-5xl lg:text-[54px] font-normal leading-[1.18] tracking-tight text-[#29251f]">
                Fashion for Every Beautiful Moment.
              </h1>

              <div className="mt-6 space-y-4 text-sm sm:text-base leading-relaxed text-[#756b60]">
                <p>
                  Rentelle was founded on a simple yet transformative belief: every
                  milestone, celebration, and cherished evening deserves an
                  extraordinary look without the fleeting footprint of fast fashion.
                  From enchanting weddings and grand receptions to intimate
                  engagements and evening soirees, we bring couture-level artistry
                  directly to your wardrobe.
                </p>
                <p>
                  Our curated collections blend timeless heritage craft with modern
                  haute couture silhouettes. Through our seamless luxury rental
                  experience, you can wear the designer look of your dreams,
                  celebrate each celebration with renewed confidence, and embrace a
                  more conscious, elegant way to dress.
                </p>
              </div>

              <div className="mt-8 pt-2">
                <Link
                  to="/dresses"
                  className="group inline-flex items-center gap-2 border-b border-[#29251f] pb-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#29251f] transition-all duration-300 hover:border-[#a47b55] hover:text-[#a47b55]"
                >
                  <span>EXPLORE COLLECTION</span>
                  <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1.5">
                    →
                  </span>
                </Link>
              </div>
            </div>

            {/* Right Column: Editorial Image Crop (approx. 500px height) */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="group relative w-full max-w-[520px] overflow-hidden bg-[#eee7dd] shadow-sm">
                <div className="h-[420px] sm:h-[500px] w-full overflow-hidden">
                  <img
                    src={outfit1}
                    alt="Elegant woman wearing luxury occasion wear from Rentelle"
                    className="h-full w-full object-cover object-top transition duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      
      <section className="bg-[#eee7dd] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1152px] text-center">
          
          {/* Header */}
          <span className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.3em] text-[#a47b55]">
            WHAT WE BELIEVE IN
          </span>

          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#29251f]">
            More Than Fashion
          </h2>

          <p className="mx-auto mt-3 max-w-lg text-sm sm:text-base text-[#756b60]">
            Style, simplicity, and beautiful moments.
          </p>

          {/* Three Evenly Spaced Columns */}
          <div className="mt-14 sm:mt-16 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8 lg:gap-12">
            
            {/* Value 1 */}
            <div className="group flex flex-col items-center rounded-sm bg-[#faf8f4]/60 p-8 sm:p-9 text-center backdrop-blur-[2px] transition duration-300 ease-out hover:-translate-y-1.5 hover:bg-[#faf8f4] hover:shadow-sm">
              <span className="text-[10px] tracking-[0.25em] text-[#a47b55] uppercase font-medium">
                01 — CRAFT
              </span>
              <h3 className="mt-4 font-serif text-xl sm:text-2xl text-[#29251f]">
                Style With Love
              </h3>
              <div className="mt-2 h-px w-8 bg-[#a47b55]/40 transition-all duration-300 group-hover:w-12 group-hover:bg-[#a47b55]" />
              <p className="mt-4 text-sm leading-relaxed text-[#756b60]">
                Beautiful outfits thoughtfully chosen to help you feel confident, radiant, and uniquely yourself at every special gathering.
              </p>
            </div>

            {/* Value 2 */}
            <div className="group flex flex-col items-center rounded-sm bg-[#faf8f4]/60 p-8 sm:p-9 text-center backdrop-blur-[2px] transition duration-300 ease-out hover:-translate-y-1.5 hover:bg-[#faf8f4] hover:shadow-sm">
              <span className="text-[10px] tracking-[0.25em] text-[#a47b55] uppercase font-medium">
                02 — CONSCIOUS
              </span>
              <h3 className="mt-4 font-serif text-xl sm:text-2xl text-[#29251f]">
                Fashion Reimagined
              </h3>
              <div className="mt-2 h-px w-8 bg-[#a47b55]/40 transition-all duration-300 group-hover:w-12 group-hover:bg-[#a47b55]" />
              <p className="mt-4 text-sm leading-relaxed text-[#756b60]">
                Enjoy access to prestigious designer pieces through a seamless, circular rental experience that honors both craftsmanship and mindful living.
              </p>
            </div>

            {/* Value 3 */}
            <div className="group flex flex-col items-center rounded-sm bg-[#faf8f4]/60 p-8 sm:p-9 text-center backdrop-blur-[2px] transition duration-300 ease-out hover:-translate-y-1.5 hover:bg-[#faf8f4] hover:shadow-sm">
              <span className="text-[10px] tracking-[0.25em] text-[#a47b55] uppercase font-medium">
                03 — MOMENTS
              </span>
              <h3 className="mt-4 font-serif text-xl sm:text-2xl text-[#29251f]">
                Every Occasion
              </h3>
              <div className="mt-2 h-px w-8 bg-[#a47b55]/40 transition-all duration-300 group-hover:w-12 group-hover:bg-[#a47b55]" />
              <p className="mt-4 text-sm leading-relaxed text-[#756b60]">
                From opulent bridal ensembles to contemporary cocktail gowns, discover the perfect look for weddings, parties, and lifelong memories.
              </p>
            </div>

          </div>

        </div>
      </section>

     
      <section className="relative px-5 py-16 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1152px]">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            
            {/* Left Column: Image (~450px tall) */}
            <div className="flex justify-center">
              <div className="group relative w-full max-w-[520px] overflow-hidden bg-[#eee7dd] shadow-sm">
                <div className="h-[380px] sm:h-[450px] w-full overflow-hidden">
                  <img
                    src={outfit2}
                    alt="Rentelle occasion wear collection showcased with elegance"
                    className="h-full w-full object-cover object-center transition duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Mission Content */}
            <div className="flex flex-col justify-center text-left">
              <span className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.3em] text-[#a47b55]">
                OUR MISSION
              </span>

              <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-[46px] font-normal leading-[1.2] tracking-tight text-[#29251f]">
                Beautiful Style. Thoughtful Choices.
              </h2>

              <p className="mt-6 text-sm sm:text-base leading-relaxed text-[#756b60]">
                At Rentelle, our mission is to make finding and renting luxurious,
                occasion-worthy fashion effortless and deeply joyful. We believe that
                dressing up should never feel complicated, prohibitive, or wasteful.
                By connecting you with timeless designs, impeccably sanitized garments,
                and personalized sizing guidance, we ensure you step into every room
                feeling poised, radiant, and completely at ease.
              </p>

              <p className="mt-8 font-serif italic text-lg sm:text-xl md:text-2xl text-[#a47b55]">
                “Your moment. Your style. Your story.”
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
