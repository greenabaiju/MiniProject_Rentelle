import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
       {/* FOOTER */}
      <footer
        id="contact"
        className="scroll-mt-20 bg-[#211e1a] px-5 py-12 text-white md:px-10 md:py-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-10 border-b border-white/15 pb-10 md:grid-cols-3">
            {/* BRAND */}
            <div>
              <Link
                to="#collections"
                onClick={(event) =>
                  scrollToSection(event, "collections")
                }
                className="font-serif text-4xl tracking-wide"
              >
                Rentelle<span className="text-[#c6a77e]">.</span>
              </Link>

              <p className="mt-4 max-w-xs text-sm leading-7 text-[#bcb2a6]">
                Timeless elegance. Rent your moment. Discover a more thoughtful
                way to dress for life's special occasions.
              </p>
            </div>

            {/* EXPLORE */}
            <div>
              <h3 className="text-[10px] tracking-[0.25em] text-[#c6a77e]">
                EXPLORE
              </h3>

              <div className="mt-5 flex flex-col items-start gap-4 text-xs text-[#d1c9bf]">
                <Link
                  to="#collections"
                  onClick={(event) =>
                    scrollToSection(event, "collections")
                  }
                  className="transition hover:text-white"
                >
                  Home
                </Link>

                <Link
                  to="#shop"
                  onClick={(event) => scrollToSection(event, "shop")}
                  className="transition hover:text-white"
                >
                  New Arrivals
                </Link>

                <Link
                  to="#atelier"
                  onClick={(event) => scrollToSection(event, "atelier")}
                  className="transition hover:text-white"
                >
                  Our Story
                </Link>

                <Link
                  to="#lookbook"
                  onClick={(event) => scrollToSection(event, "lookbook")}
                  className="transition hover:text-white"
                >
                  Lookbook
                </Link>
              </div>
            </div>

            {/* DISCOVER */}
            <div>
              <h3 className="text-[10px] tracking-[0.25em] text-[#c6a77e]">
                DISCOVER RENTELLE
              </h3>

              <p className="mt-5 max-w-xs text-sm leading-7 text-[#bcb2a6]">
                Looking for something special for your next occasion? Find
                inspiration and discover your look.
              </p>

              <Link
                to="#shop"
                onClick={(event) => scrollToSection(event, "shop")}
                className="mt-5 inline-block border-b border-[#c6a77e] pb-2 text-[10px] tracking-[0.2em] transition hover:text-[#d8bd98]"
              >
                EXPLORE OUTFITS →
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-6 text-[10px] tracking-wide text-[#a99f93] sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Rentelle. All rights reserved.</p>

            <Link
              to="#collections"
              onClick={(event) =>
                scrollToSection(event, "collections")
              }
              className="transition hover:text-white"
            >
              BACK TO TOP ↑
            </Link>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
