import Link from "next/link";
import React from "react";

function NavBar() {
  return (
    <div>
      <div className="nav-sizing z-20 relative">
        <div className="lining m-auto flex justify-between items-center">
          <div className="flex justify-start items-center gap-x-[12px] sm:gap-x-[16px] md:gap-x-[20px]">
            <Link
              href="/"
              className="border-[0.5px] border-purple logo-sizing main-paragraph-size flex justify-center items-center"
            >
              AI
            </Link>
            <Link href="/" className="main-paragraph-size">
              AI-Artistry
            </Link>
          </div>
          {/* button */}
          <Link
            href="/generate"
            className="group flex justify-start items-center"
          >
            <button
              aria-label="Generate"
              className="border-l-[0.5px] border-t-[0.5px] border-b-[0.5px] border-purple hidden sm:block generate-sizing main-paragraph-size"
            >
              Generate
            </button>
            <button
              aria-label="Generate"
              className="group border-r-[0.5px] border-t-[0.5px] border-b-[0.5px] border-l-[0.5px] sm:border-l-0 border-white generate-sizing-arrow flex justify-center items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 7 7"
                fill="none"
                className=" md:w-[11px] md:h-[11px] sm:w-[10px] sm:h-[10px] w-[7px] h-[7px] group-hover:rotate-[-44.8deg] duration-300 ease-in-out"
              >
                <path
                  d="M0.7 6.50001L0 5.80001L4.8 1H0.5V0H6.5V6.00001H5.5V1.7L0.7 6.50001Z"
                  fill="#DEDEDE"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
      {/* gradient */}
      <div className="z-10 w-full h-[110px] sm:h-[184px] nav-gradient absolute left-1/2 top-0 -translate-x-1/2" />
    </div>
  );
}

export default NavBar;
