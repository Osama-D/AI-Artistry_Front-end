import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function PopUp() {
  const [popUp, setpopUp] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // show buton after specific view
    function handleScroll() {
      if (window.pageYOffset > 500) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      setTimeout(() => {
        setpopUp(false);
      }, 1000);
    }

    window.addEventListener("scroll", handleScroll);

    // cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // empty dependency array to ensure useEffect only runs once

  useEffect(() => {
    // Event handler function for scroll event
    const handleScroll = () => {
      // with these lines bellow we make our div's follow the scroller Y
      // and we make them in the center vertically

      // Get the current scroll position
      const scrollPosition = window.scrollY;

      // Select the fixed elements from the DOM
      const fixedElement1 = document.querySelector(".fixedElement1");
      const fixedElement2 = document.querySelector(".fixedElement2");
      const fixedElement3 = document.querySelector(".fixedElement3");

      // Get the height of the viewport
      const viewportHeight = window.innerHeight;

      // Get the height of the first fixed element
      const divHeight1 = fixedElement1.offsetHeight;

      // Set the button position based on the window width
      const buttonPosition = window.innerWidth < 640 ? 15 : 40;

      // Calculate the top position for fixedElement1
      const top1 = viewportHeight - divHeight1 - buttonPosition;

      // Set the transform and top CSS properties for fixedElement1
      fixedElement1.style.transform = `translate(-0%, ${scrollPosition}px)`;
      fixedElement1.style.top = top1 + "px";

      // ---------------------------------

      // Get the height of the second fixed element
      const divHeight2 = fixedElement2.offsetHeight;

      // Calculate the top position for fixedElement2
      const top2 = (viewportHeight - divHeight2) / 2;

      // Set the transform and top CSS properties for fixedElement2
      fixedElement2.style.transform = `translate(-50%, ${scrollPosition}px)`;
      fixedElement2.style.top = top2 + "px";

      // ---------------------------------

      // Get the height of the third fixed element
      const divHeight3 = fixedElement3.offsetHeight;

      // Calculate the top position for fixedElement3
      const top3 = (viewportHeight - divHeight3) / 2;

      // Set the transform and top CSS properties for fixedElement3
      fixedElement3.style.transform = `translate(-50%, ${scrollPosition}px)`;
      fixedElement3.style.top = top3 + "px";
    };

    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="w-full">
        {/* popUp button */}
        <motion.div onClick={() => setpopUp(true)}>
          <motion.div
            className={
              scrolled
                ? "fixedElement1 fixed opacity-100 duration-700 ease-in-out hover:scale-125 right-[15px] sm:right-10 bg-purple w-6 h-6 md:w-8 md:h-8 flex justify-center items-center cursor-pointer z-40"
                : "fixedElement1 fixed opacity-0 duration-700 ease-in-out hover:scale-[1.5] right-[15px] sm:right-10 bg-purple w-6 h-6 md:w-8 md:h-8 flex justify-center items-center cursor-pointer z-40"
            }
          ></motion.div>
        </motion.div>

        {/* PopUp */}
        <div
          className={
            popUp
              ? "fixedElement2 opacity-100 w-[90%] lg:w-[80%] xl:w-[70%] 2xl:w-[55%] px-6 sm:px-16 py-[80px] md:px-[110px] md:py-[100px] scale-100 duration-700 ease-in-out h-fit fixed m-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple z-50"
              : "fixedElement2 opacity-0 pointer-events-none w-[90%] lg:w-[80%] xl:w-[70%] 2xl:w-[55%] px-6 sm:px-16 py-[80px] md:px-[110px] md:py-[100px] scale-90 duration-700 ease-in-out h-fit fixed m-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple z-50"
          }
        >
          <div className="flex flex-col gap-y-[39px]">
            <div className="flex flex-col gap-y-[17px]">
              <h1 className="uppercase main-title-size font-syncopateL">
                Notice Regarding Photo Generation APIs.
              </h1>
              <p className="piece-of-info text-white/70 font-ralewayR">
                The three pinned photos with a small purple square in the top
                left corner were generated using the Midjourney AI, while the
                rest were created using OpenAI's DALL-E. Although there is a
                noticeable difference in quality, the Midjourney API is
                currently unavailable and its alternatives are not as good, so I
                am exclusively using OpenAI's DALL-E for new photo generation.
              </p>
            </div>
            <div
              onClick={() => setpopUp(false)}
              className="piece-of-info font-ralewayR text-brown cursor-pointer w-fit"
            >
              Thank you for your attention and understanding.
            </div>
          </div>
        </div>

        {/* popUp blur */}
        <div
          className={
            popUp
              ? "fixedElement3 h-[800vh] opacity-100 duration-700 ease-in-out z-[41] w-full fixed m-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brown/[80%] backdrop-blur-[5px]"
              : "fixedElement3 h-[800vh] opacity-0 pointer-events-none duration-700 ease-in-out z-[41] w-full fixed m-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brown/[80%] backdrop-blur-[5px]"
          }
        ></div>
      </div>
    </div>
  );
}

export default PopUp;
