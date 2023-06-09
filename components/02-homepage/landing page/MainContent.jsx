import Link from "next/link";
import React from "react";

function MainContent() {
  return (
    <div className="relative z-30 mt-[290px]">
      <div className="flex flex-col">
        <div className="lining m-auto flex flex-col gap-y-[30px] sm:gap-y-[40px]">
          <div className="max-w-[285px] sm:max-w-[387px] flex flex-col gap-y-[10px]">
            {/* max-w so that slug stay with h1 */}
            <div className="flex max-w-full sm:max-w-[77%] md:max-w-[87.5%] lg:max-w-[93%] xl:max-w-full justify-center items-center gap-x-[30px] sm:gap-x-[40px]">
              <div className="ml-[-50vw] w-full h-[0.5px] bg-purple flex-1" />
              <div className="flex font-syncopateL uppercase demi-paragraph text-purple text-right">
                Have a go!
              </div>
            </div>
            <div className="flex flex-col gap-y-[6px] sm:gap-y-[8px]">
              <h1 className="font-syncopateL ShowCase-size text-white uppercase">
                The community showcase
              </h1>
              <p className="font-ralewayR text-gray main-paragraph-size">
                Explore AI's creative potential with AI-Artistry! Generate and
                view unique, striking images created by DALL-E AI.
              </p>
            </div>
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
    </div>
  );
}

export default MainContent;
