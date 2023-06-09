import Image from "next/image";
import React, { useState } from "react";

import pinnedImages from "@/pages/data/PinnedImagesS.json";

// Import Swiper React components & styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

function Slider({ setSliderPopUp, my_swiper }) {
  const [hovered, setHovered] = useState(null);

  const slideToSlider = (index) => {
    setTimeout(function () {
      my_swiper.slideTo(index);
    }, 175);
  };

  return (
    <div className="lining m-auto">
      <div className="mt-[80px] mb-0 sm:mb-[180px]">
        <Swiper
          breakpoints={{
            640: {
              spaceBetween: 30,
              slidesPerView: "auto",
            },
          }}
          slidesPerView={"auto"}
          spaceBetween={25}
          simulateTouch={true}
          speed={500}
        >
          {pinnedImages.map((post, idx) => {
            return (
              <SwiperSlide
                onClick={() => {
                  slideToSlider(idx);
                  window.scrollTo(0, 0);
                  setTimeout(() => {
                    setSliderPopUp(true);
                  }, 200);
                }}
                key={idx}
                className="swiper-1"
              >
                <div
                  onMouseEnter={() => {
                    setHovered(idx);
                  }}
                  onMouseLeave={() => setHovered(idx)}
                  className="relative w-[222px] h-[146px] md:h-[123px] md:w-[170px] cursor-pointer"
                >
                  {/* placeholder */}
                  <div className="absolute inset-0 bg-[#252328] m-[10px] md:m-[7px]"></div>
                  <Image
                    className="p-[10px] md:p-[7px] hover:brightness-[1.3] duration-700 ease-in-out"
                    src={post.photo}
                    alt={post.prompt}
                    objectFit="cover"
                    layout="fill"
                    unoptimized={true}
                    priority
                  />
                  <div className="line-effects-container">
                    <div
                      className={`line-effects absolute ${
                        hovered === idx ? "hovered" : ""
                      }`}
                    />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="flex mt-[20px] gap-x-[32px] sm:hidden justify-start items-center  margin-left: -50vw;">
          <div className="text-purple uppercase demi-paragraph font-syncopateL">
            Scroll
          </div>
          <div className="bg-purple h-[0.5px] w-full mr-[-50vw]"></div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
