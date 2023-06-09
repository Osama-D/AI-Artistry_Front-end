import React, { useEffect } from "react";
import Image from "next/image";
import FileSaver from "file-saver";

import pinnedImages from "@/pages/data/PinnedImagesH.json";

// Import Swiper React components  & styles
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

function ClickedSlider({ sliderPopUp, setSliderPopUp, set_my_swiper }) {
  // to handle if scroll 1px down setState to false
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 1) {
        setTimeout(() => {
          setSliderPopUp(false);
        }, 250);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function downloadImage(_id, photo) {
    const httpsUrl = photo.replace("http://", "https://");
    FileSaver.saveAs(httpsUrl, `download-${_id}.jpg`);
  }
  return (
    <div>
      <div
        className={
          sliderPopUp
            ? "absolute h-[100vh]  w-full top-0 left-0"
            : "absolute h-[100vh] pointer-events-none w-full top-0 left-0"
        }
      >
        <div
          className={
            sliderPopUp
              ? "z-40 scale-100 opacity-100 duration-700 ease-in-out absolute top-1/2 -translate-y-1/2 w-full"
              : "z-40 scale-90 opacity-0 duration-700 ease-in-out pointer-events-none absolute top-1/2 -translate-y-1/2 w-full"
          }
        >
          <Swiper
            onInit={(ev) => {
              set_my_swiper(ev);
            }}
            effect={"coverflow"}
            centeredSlides={true}
            slidesPerView={1}
            speed={700}
            spaceBetween={0}
            breakpoints={{
              650: {
                spaceBetween: 10,
              },
              768: {
                spaceBetween: 40,
              },
              1024: {
                spaceBetween: 120,
              },
              1280: {
                spaceBetween: 220,
              },
              1530: {
                spaceBetween: -400,
              },
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 250,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={{
              type: "progressbar",
            }}
            modules={[EffectCoverflow, Pagination]}
          >
            {pinnedImages.map((post, idx) => {
              return (
                <SwiperSlide className="max-w-full" key={idx}>
                  <div className="flex flex-col mb-[30px] sm:mb-[35px] md:mb-[60px] gap-y-[10px] sm:gap-y-[15px] md:gap-y-[25px] lining m-auto  h-[58vh]  sm:h-[70vh] md:h-[80vh] justify-center items-center">
                    <div className="h-full w-full relative pointer-events-nosne">
                      <Image
                        src={post.photo}
                        alt={post.prompt}
                        layout={"fill"}
                        objectFit={"cover"}
                        unoptimized={true}
                        priority
                      />
                      {/* mobile download button */}
                      <div
                        onClick={() => downloadImage(idx, post.photo)}
                        className=" w-[65px] h-[65px] sm:w-[80px] sm:h-[80px] md:hidden cursor-pointer download absolute top-0 right-0 -translate-y-1/2 flex justify-center items-center bg-purple/[65%] blur-performance"
                      >
                        <svg
                          viewBox="0 0 39 36"
                          fill="none"
                          className="w-[21px] h-[18px] sm:w-[26px] sm:h-[23px] md:w-[39px] md:h-[36px] duration-700 ease-in-out"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.6266 26.7956L19.711 33.88M19.711 33.88L26.7954 26.7956M19.711 33.88V17.94M33.8797 26.34C36.0431 24.5533 37.4219 21.8504 37.4219 18.8256C37.4219 13.4457 33.0608 9.08444 27.6809 9.08444C27.2939 9.08444 26.9319 8.88254 26.7353 8.54911C24.4258 4.62982 20.1615 2 15.2832 2C7.94709 2 2 7.94714 2 15.2833C2 18.9426 3.47966 22.2564 5.8733 24.6587"
                            stroke="#A0A0A0"
                            strokeWidth="2.75042"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="w-full h-fit sm:h-[130px] flex justify-between gap-x-0 sm:gap-x-[25px]">
                      <div className="slider-paragraph text-left w-full flex-1 h-full py-[16px] px-8 sm:px-[36px] md:px-[50px] lg:px-[90px] text-gray font-ralewayR flex justify-start items-center bg-purple/[65%]">
                        <div className="lg:max-w-[90%]">{post.prompt}</div>
                      </div>
                      {/* download button */}
                      <button
                        onClick={() => downloadImage(idx, post.photo)}
                        aria-label="download"
                        className="w-[130px] hidden md:flex download cursor-pointer h-full justify-center items-center bg-purple/[65%]"
                      >
                        <svg
                          viewBox="0 0 39 36"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="md:w-[35px] md:h-[30px] lg:w-[37px] lg:h-[35px] duration-700 ease-in-out"
                        >
                          <path
                            d="M12.6266 26.7956L19.711 33.88M19.711 33.88L26.7954 26.7956M19.711 33.88V17.94M33.8797 26.34C36.0431 24.5533 37.4219 21.8504 37.4219 18.8256C37.4219 13.4457 33.0608 9.08444 27.6809 9.08444C27.2939 9.08444 26.9319 8.88254 26.7353 8.54911C24.4258 4.62982 20.1615 2 15.2832 2C7.94709 2 2 7.94714 2 15.2833C2 18.9426 3.47966 22.2564 5.8733 24.6587"
                            stroke="#A0A0A0"
                            strokeWidth="2.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        {/* Blur */}
        <div
          className={
            sliderPopUp
              ? "h-[500vh] opacity-100 duration-700 ease-in-out z-30 w-full fixed top-0 bg-brown/[80%] blur-performance"
              : "h-[500vh] opacity-0 pointer-events-none duration-700 ease-in-out z-30 w-full fixed inset-0 bg-brown/[80%] blur-performance"
          }
        ></div>
      </div>
    </div>
  );
}

export default ClickedSlider;
