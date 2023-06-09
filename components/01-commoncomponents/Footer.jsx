import React from "react";
import Image from "next/image";
import Link from "next/link";

import { motion, useScroll, useTransform } from "framer-motion";

function Footer() {
  const { scrollYProgress } = useScroll();

  const yValue1 = useTransform(scrollYProgress, [0, 0.5, 1], [0, 200, 0 * 1]);
  const yValue2 = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0, -100, 180 * 1]
  );
  const yValue3 = useTransform(scrollYProgress, [0, 0.2, 1], [0, -300, 60 * 1]);

  return (
    <div className="relative">
      {/* mt-[100px] for footer ONLY */}
      <div className="m-auto">
        <div className="lining m-auto flex flex-col gap-y-[50px] sm:gap-y-[80px] md:gap-y-[120px] mt-[70px] sm:mt-[100px] md:mt-[200px] mb-[110px] md:mb-[230px]">
          <div className="bg-purple w-full h-[0.5px]"></div>
          <div>
            <div className="nav-sizing z-20 relative flex flex-col gap-y-[44px] sm:gap-y-0 sm:flex-row justify-between items-start">
              <div className="flex flex-col justify-start items-start gap-y-[17px] sm:gap-y-[30px] md:gap-y-[37px] w-full md:max-w-[500px]">
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
                <div className="text-gray">
                  <p className="main-paragraph-size">
                    Explore AI's creative potential with AI-Artistry! Generate
                    and view unique, striking images created by DALL-E AI.
                  </p>
                </div>
                {/* button */}
              </div>
              <Link href="/generate">
                <div className="group flex justify-start items-center">
                  <button
                    aria-label="Generate"
                    className="border-l-[0.5px] border-t-[0.5px] border-b-[0.5px] border-purple generate-sizing main-paragraph-size"
                  >
                    Generate
                  </button>
                  <button
                    aria-label="Generate"
                    className="group border-r-[0.5px] border-t-[0.5px] border-b-[0.5px] border-white generate-sizing-arrow flex justify-center items-center"
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
                </div>
              </Link>
            </div>
          </div>
        </div>
        {/* images */}
        <motion.div
          style={{ y: yValue1 }}
          className="absolute transition1 top-[-15%] sm:top-[-20%] md:top-0 -left-[1%] md:left-0 -translate-y-1/2 md:-translate-y-[20%]"
        >
          <motion.div className="max-w-full w-[50px] sm:w-[70px] md:w-[70px] lg:w-[80px] 2xl:w-[90px] h-[140px] relative -translate-x-[25%]">
            <Image
              className="pointer-events-none object-top"
              loading="lazy"
              src="/images/footer asset1.webp"
              alt="footer asset"
              objectFit="contain"
              layout={"fill"}
              unoptimized={true}
            />
          </motion.div>
        </motion.div>
        <motion.div
          style={{ y: yValue2 }}
          className="absolute transition2 overflow-hidden top-[10%] md:top-[30%] -right-[2%] md:right-0"
        >
          <motion.div className="max-w-full w-[50px] sm:w-[70px] md:w-[70px] lg:w-[80px] 2xl:w-[90px] h-[140px] relative translate-x-[25%] ">
            <Image
              className="pointer-events-none"
              src="/images/footer asset2.webp"
              alt="footer asset"
              objectFit="contain"
              layout={"fill"}
              unoptimized={true}
              loading="lazy"
            />
          </motion.div>
        </motion.div>
        <motion.div
          style={{ y: yValue3 }}
          className="absolute transition3 bottom-[6%] sm:bottom-[1%] md:bottom-0 right-1/2 translate-x-[50%]"
        >
          <motion.div className="max-w-full w-[50px] sm:w-[70px] md:w-[70px] lg:w-[80px] 2xl:w-[90px] h-[140px] relative translate-x-[25%]">
            <Image
              className="pointer-events-none object-bottom"
              src="/images/footer asset3.webp"
              alt="footer asset"
              objectFit="contain"
              layout={"fill"}
              unoptimized={true}
              loading="lazy"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Footer;
