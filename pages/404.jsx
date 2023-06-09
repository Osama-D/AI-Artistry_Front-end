import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

function FoorOHFoor() {
  return (
    <>
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>404 Error - Page Not Found | AI-Artistry</title>
        <meta name="title" content="404 Error - Page Not Found | AI-Artistry" />
        <meta
          name="description"
          content="Oops! The page you are looking for cannot be found. Don't worry, you can still explore the world of AI-generated art on AI-Artistry. Visit homepage or use the search bar to find what you're looking for."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ai-artistry.vercel.app/*" />
        <meta
          property="og:title"
          content="404 Error - Page Not Found | AI-Artistry"
        />
        <meta
          property="og:description"
          content="Oops! The page you are looking for cannot be found. Don't worry, you can still explore the world of AI-generated art on AI-Artistry. Visit homepage or use the search bar to find what you're looking for."
        />
        <meta
          property="og:image"
          name="image"
          content="https://ai-artistry.vercel.app/images/ogImage.png"
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://ai-artistry.vercel.app/*"
        />
        <meta
          property="twitter:title"
          content="404 Error - Page Not Found | AI-Artistry"
        />
        <meta
          property="twitter:description"
          content="Oops! The page you are looking for cannot be found. Don't worry, you can still explore the world of AI-generated art on AI-Artistry. Visit homepage or use the search bar to find what you're looking for."
        />
        <meta
          property="twitter:image"
          content="https://ai-artistry.vercel.app/images/ogImage.png"
        />
        <meta name="author" content="Osama Daimallah" />
      </Head>
      <div>
        <div className="relative overflow-hidden font-ralewayR">
          <div className="flex max-h-[100vh] flex-col lining m-auto">
            <div className="h-[100vh] flex flex-col pt-[100px] md:pt-[200px]">
              <div className="flex flex-col gap-y-[30px] sm:gap-y-[40px] md:gap-y-[50px]">
                <div className="max-w-[300px] sm:max-w-[400px] md:max-w-[410px] flex flex-col gap-y-[10px]">
                  {/* for galaxy fold */}
                  <div className="flex max-[400px]:w-[43.5%] max-w-[61%] sm:max-w-[45.5%] md:max-w-[51%] lg:max-w-[61%] justify-center items-center gap-x-[30px] sm:gap-x-[40px] md:gap-x-[50px] pointer-events-none">
                    <div className="ml-[-50vw] w-full h-[0.5px] bg-purple flex-1" />
                    <div className="post-paragraph-size flex font-ralewayR uppercase text-purple text-right">
                      404
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-[6px] sm:gap-y-[8px]">
                    {/* for galaxy fold */}
                    <h1 className="text-[70px] max-[400px]:text-[50px] sm:text-[70px] md:text-[80px] lg:text-[96px] leading-[95.5%] font-syncopateL text-white uppercase">
                      not found
                    </h1>
                    <p className="post-paragraph-size font-ralewayR text-gray">
                      The page you are looking for cannot be found. Visit
                      homepage or contact me for assistance.
                    </p>
                  </div>
                </div>
                {/* button */}
                <Link
                  href="/"
                  className="group flex justify-start items-center max-w-fit"
                >
                  <button
                    aria-label="home"
                    className="border-l-[0.5px] border-t-[0.5px] border-b-[0.5px] border-purple flex-1  w-[190px] sm:w-[270px] md:w-[330px] generate-page-generate-buttons input-sizes uppercase"
                  >
                    go back home
                  </button>
                  <button
                    aria-label="home"
                    className="group border-r-[0.5px] border-t-[0.5px] border-b-[0.5px] border-white  w-[50px] sm:w-[70px] md:w-[100px] input-sizes flex justify-center items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 7 7"
                      fill="none"
                      className="w-[10px] h-[10px] sm:w-[15px] sm:h-[15px] md:w-[18px] md:h-[18px] lg:w-[21px] lg:h-[21px]  group-hover:rotate-[-44.8deg] duration-300 ease-in-out"
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
            {/* Image */}
            <div className="absolute -z-10 max-w-full w-[1200px] h-full sm:h-[650px] md:h-[750px] lg:h-[850px] xl:h-[950px] 2xl:h-full bottom-0 right-0 translate-x-[20%] 2xl:-translate-x-[2%]">
              <Image
                className="pointer-events-none object-bottom"
                src="/images/404 page background1.webp"
                alt="404 image"
                objectFit="contain"
                layout="fill"
                unoptimized={true}
                priority
              />
            </div>
          </div>
          {/* not found pattern */}
          <div className=" pointer-events-none">
            <div className="z-10 absolute top-0 flex flex-col flex-nowrap text-[60px] md:text-[156px] uppercase font-syncopateB leading-[90%] md:leading-[84%]">
              <div className="font-syncopateB text-transparent not-found-text-stroke whitespace-nowrap ">
                Not Found Not Found Not Found Not Found Not Found Not Found Not
                Found Not Found Not Found Not Found Not Found Not Found Not
                Found Not Found Not Found Not Found Not Found Not Found Not
                Found Not Found Not Found
              </div>
              <div className="font-syncopateB text-transparent not-found-text-stroke whitespace-nowrap">
                Not Found Not Found Not Found Not Found Not Found Not Found Not
                Found Not Found Not Found Not Found Not Found Not Found Not
                Found Not Found Not Found Not Found Not Found Not Found Not
                Found Not Found Not Found
              </div>
              <div className="font-syncopateB text-transparent not-found-text-stroke whitespace-nowrap">
                Not Found Not Found Not Found Not Found Not Found Not Found Not
                Found Not Found Not Found Not Found Not Found Not Found Not
                Found Not Found Not Found Not Found Not Found Not Found Not
                Found Not Found Not Found
              </div>
              <div className="font-syncopateB text-transparent not-found-text-stroke whitespace-nowrap">
                Not Found Not Found Not Found Not Found Not Found Not Found Not
                Found Not Found Not Found Not Found Not Found Not Found Not
                Found Not Found Not Found Not Found Not Found Not Found Not
                Found Not Found Not Found
              </div>
              <div className="font-syncopateB text-transparent not-found-text-stroke whitespace-nowrap">
                Not Found Not Found Not Found Not Found Not Found Not Found Not
                Found Not Found Not Found Not Found Not Found Not Found Not
                Found Not Found Not Found Not Found Not Found Not Found Not
                Found Not Found Not Found
              </div>
              <div className="font-syncopateB text-transparent not-found-text-stroke whitespace-nowrap">
                Not Found Not Found Not Found Not Found Not Found Not Found Not
                Found Not Found Not Found Not Found Not Found Not Found Not
                Found Not Found Not Found Not Found Not Found Not Found Not
                Found Not Found Not Found
              </div>
              <div className="font-syncopateB text-transparent not-found-text-stroke whitespace-nowrap">
                Not Found Not Found Not Found Not Found Not Found Not Found Not
                Found Not Found Not Found Not Found Not Found Not Found Not
                Found Not Found Not Found Not Found Not Found Not Found Not
                Found Not Found Not Found
              </div>
              <div className="font-syncopateB text-transparent not-found-text-stroke whitespace-nowrap">
                Not Found Not Found Not Found Not Found Not Found Not Found Not
                Found Not Found Not Found Not Found Not Found Not Found Not
                Found Not Found Not Found Not Found Not Found Not Found Not
                Found Not Found Not Found
              </div>
              <div className="font-syncopateB text-transparent not-found-text-stroke whitespace-nowrap ">
                Not Found Not Found Not Found Not Found Not Found Not Found Not
                Found Not Found Not Found Not Found Not Found Not Found Not
                Found Not Found Not Found Not Found Not Found Not Found Not
                Found Not Found Not Found
              </div>
              <div className="font-syncopateB text-transparent not-found-text-stroke whitespace-nowrap">
                Not Found Not Found Not Found Not Found Not Found Not Found Not
                Found Not Found Not Found Not Found Not Found Not Found Not
                Found Not Found Not Found Not Found Not Found Not Found Not
                Found Not Found Not Found
              </div>
              <div className="font-syncopateB text-transparent not-found-text-stroke whitespace-nowrap">
                Not Found Not Found Not Found Not Found Not Found Not Found Not
                Found Not Found Not Found Not Found Not Found Not Found Not
                Found Not Found Not Found Not Found Not Found Not Found Not
                Found Not Found Not Found
              </div>
              <div className="font-syncopateB text-transparent not-found-text-stroke whitespace-nowrap">
                Not Found Not Found Not Found Not Found Not Found Not Found Not
                Found Not Found Not Found Not Found Not Found Not Found Not
                Found Not Found Not Found Not Found Not Found Not Found Not
                Found Not Found Not Found
              </div>
              <div className="font-syncopateB text-transparent not-found-text-stroke whitespace-nowrap">
                Not Found Not Found Not Found Not Found Not Found Not Found Not
                Found Not Found Not Found Not Found Not Found Not Found Not
                Found Not Found Not Found Not Found Not Found Not Found Not
                Found Not Found Not Found
              </div>
              <div className="font-syncopateB text-transparent not-found-text-stroke whitespace-nowrap">
                Not Found Not Found Not Found Not Found Not Found Not Found Not
                Found Not Found Not Found Not Found Not Found Not Found Not
                Found Not Found Not Found Not Found Not Found Not Found Not
                Found Not Found Not Found
              </div>
              <div className="font-syncopateB text-transparent not-found-text-stroke whitespace-nowrap">
                Not Found Not Found Not Found Not Found Not Found Not Found Not
                Found Not Found Not Found Not Found Not Found Not Found Not
                Found Not Found Not Found Not Found Not Found Not Found Not
                Found Not Found Not Found
              </div>
              <div className="font-syncopateB text-transparent not-found-text-stroke whitespace-nowrap">
                Not Found Not Found Not Found Not Found Not Found Not Found Not
                Found Not Found Not Found Not Found Not Found Not Found Not
                Found Not Found Not Found Not Found Not Found Not Found Not
                Found Not Found Not Found
              </div>{" "}
              <div className="font-syncopateB text-transparent not-found-text-stroke whitespace-nowrap">
                Not Found Not Found Not Found Not Found Not Found Not Found Not
                Found Not Found Not Found Not Found Not Found Not Found Not
                Found Not Found Not Found Not Found Not Found Not Found Not
                Found Not Found Not Found
              </div>{" "}
              <div className="font-syncopateB text-transparent not-found-text-stroke whitespace-nowrap">
                Not Found Not Found Not Found Not Found Not Found Not Found Not
                Found Not Found Not Found Not Found Not Found Not Found Not
                Found Not Found Not Found Not Found Not Found Not Found Not
                Found Not Found Not Found
              </div>{" "}
              <div className="font-syncopateB text-transparent not-found-text-stroke whitespace-nowrap">
                Not Found Not Found Not Found Not Found Not Found Not Found Not
                Found Not Found Not Found Not Found Not Found Not Found Not
                Found Not Found Not Found Not Found Not Found Not Found Not
                Found Not Found Not Found
              </div>{" "}
              <div className="font-syncopateB text-transparent not-found-text-stroke whitespace-nowrap">
                Not Found Not Found Not Found Not Found Not Found Not Found Not
                Found Not Found Not Found Not Found Not Found Not Found Not
                Found Not Found Not Found Not Found Not Found Not Found Not
                Found Not Found Not Found
              </div>{" "}
              <div className="font-syncopateB text-transparent not-found-text-stroke whitespace-nowrap">
                Not Found Not Found Not Found Not Found Not Found Not Found Not
                Found Not Found Not Found Not Found Not Found Not Found Not
                Found Not Found Not Found Not Found Not Found Not Found Not
                Found Not Found Not Found
              </div>{" "}
              <div className="font-syncopateB text-transparent not-found-text-stroke whitespace-nowrap">
                Not Found Not Found Not Found Not Found Not Found Not Found Not
                Found Not Found Not Found Not Found Not Found Not Found Not
                Found Not Found Not Found Not Found Not Found Not Found Not
                Found Not Found Not Found
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FoorOHFoor;
