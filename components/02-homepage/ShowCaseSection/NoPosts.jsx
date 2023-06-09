import Link from "next/link";
import React from "react";

function NoPosts() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center text-center gap-y-[30px] sm:gap-y-[40px] my-[170px] sm:my-[160px] md:my-[120px] lg:my-[70px]">
        <div className="max-w-[500px] flex flex-col gap-y-[6px] sm:gap-y-[8px]">
          <h2 className="uppercase main-title-size font-syncopateL">
            not found
          </h2>
          <p className="main-paragraph-size text-gray font-ralewayR">
            No post matches that title. As a new website, i invite you to
            contribute by generating fresh AI-powered images.
          </p>
        </div>
        {/* button */}
        <Link
          href="/generate"
          className="group flex justify-start items-center w-fit"
        >
          <button
            aria-label="Generate"
            className="border-l-[0.5px] border-t-[0.5px] border-b-[0.5px] border-purple generate-sizing main-paragraph-size uppercase"
          >
            Generate
          </button>
          <button
            aria-label="Generate"
            className="group border-r-[0.5px] border-t-[0.5px] border-b-[0.5px] border-white generate-sizing-arrow  flex justify-center items-center"
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
  );
}

export default NoPosts;
