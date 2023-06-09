import React, { useEffect, useState } from "react";

function LoadingScreen() {
  const [sentence, setSentence] = useState("");

  // random sentence about Ai image generation each time you refresh page
  useEffect(() => {
    const sentences = [
      "Did you know that AI image generators use algorithms to create new images?",
      "The AI image generator uses deep learning techniques to produce high-quality images.",
      "With AI image generators, you can generate unlimited variations of an image.",
      "The output of AI image generators can be used for various purposes, such as graphic design, advertising, and more.",
      "AI image generators have the ability to generate images with realistic textures, colors, and details.",
      "The training data for AI image generators comes from a large dataset of images.",
      "AI image generators can produce images of objects, scenes, and even people that do not exist in the real world.",
      "The use of generative adversarial networks (GANs) is one of the most popular techniques in AI image generation.",
      "The quality of the generated images from AI image generators continues to improve as the technology advances.",
      "With AI image generators, you can save time and resources compared to traditional image creation methods.",
      "AI image generators have the potential to revolutionize the way we create and use images.",
      "The images generated by AI image generators are often indistinguishable from real photos.",
      "One of the biggest advantages of AI image generators is their ability to generate images quickly.",
      "AI image generators can be used to create images for various industries, such as gaming, film, and more.",
      "The AI image generator can generate images in a variety of styles, from realistic to abstract.",
      "One of the challenges of AI image generation is to ensure that the generated images are diverse and unique.",
      "The use of AI image generators is becoming more widespread, with many companies investing in the technology.",
      "The field of AI image generation is constantly evolving, with new techniques and algorithms being developed.",
      "One of the limitations of AI image generators is the quality of the training data used to generate the images.",
      "To produce high-quality images, AI image generators need large amounts of high-quality training data.",
      "One of the goals of AI image generation is to generate images that are indistinguishable from real images.",
      "The use of AI image generators has the potential to reduce the time and cost of creating images.",
      "The ability of AI image generators to generate images quickly has implications for industries such as advertising.",
      "One of the challenges of using AI image generators is to ensure that the generated images are appropriate for the intended use.",
      "The future of AI image generation is promising, with many exciting developments on the horizon.",
      "One of the benefits of AI image generators is their ability to generate images that are not possible to create by hand.",
      "The use of AI image generators has the potential to change the way we create and use images in many industries.",
      "The quality of the images generated by AI image generators is constantly improving, as the technology advances.",
      "One of the strengths of AI image generators is their ability to generate images in a wide range of styles and styles.",
      "The use of AI image generators is an exciting development in the field of computer graphics.",
      "The AI image generator has the potential to greatly simplify the process of creating images for various purposes.",
      "One of the benefits of AI image generators is their ability to generate images that are not limited by the imagination of the artist.",
      "The AI image generator has the potential to greatly improve the speed and efficiency of image creation.",
    ];
    setSentence(sentences[Math.floor(Math.random() * sentences.length)]);
  }, []);

  const [loader1, setLoader1] = useState(true);
  const [loader2, setLoader2] = useState(true);
  const [Xloader2, XsetLoader2] = useState(true);

  useEffect(() => {
    // if you refresh loading screen will appear for 5 seconds
    const key = `visited`;
    const visited = localStorage.getItem(key);
    if (visited) {
      XsetLoader2(false);
    } else {
      setTimeout(() => {
        setLoader2(false);
      }, 3000);
      setTimeout(() => {
        setLoader1(false);
      }, 3500);
      setTimeout(() => {
        XsetLoader2(false);
        localStorage.setItem(key, "true");
      }, 5800);
    }

    // if you don't want to see the loading screen for 5 seconds scroll down for it to dissapear
    const handleScroll = () => {
      setTimeout(() => {
        setLoader2(false);
      }, 500);
      setTimeout(() => {
        setLoader1(false);
      }, 600);
      setTimeout(() => {
        XsetLoader2(false);
        localStorage.setItem(key, "true");
      }, 2500);
    };

    window.addEventListener("scroll", handleScroll);

    // i remove the item from localStorage if ai-artistry website got removed so that the loader start again when user open the page again
    window.addEventListener("beforeunload", () => {
      localStorage.removeItem(key);
    });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("beforeunload", () => {
        localStorage.removeItem(key);
      });
    };
  }, []);

  return (
    <>
      <div
        className={
          Xloader2
            ? "fixed inset-0 h-[100vh] z-[10000]"
            : "opacity-0 pointer-events-none h-0 -z-10"
        }
      >
        <div
          className={
            loader1
              ? "fixed opacity-100 duration-[2500ms] ease-in-out inset-0 bg-brown w-full h-full"
              : "fixed opacity-0 duration-[2500ms] ease-in-out inset-0 bg-brown w-full h-full"
          }
        >
          <div className="h-[100vh] w-full flex flex-col gap-y-[25px] justify-center items-center relative">
            <p
              className={
                loader2
                  ? "px-[25px] pointer-events-none preloader-sentences font-syncopateL max-w-[700px] text-center uppercase absolute bottom-[15%] md:bottom-[8%] opacity-100 duration-1000 ease-in-out"
                  : "px-[25px] pointer-events-none preloader-sentences font-syncopateL max-w-[700px] text-center uppercase absolute bottom-[15%] md:bottom-[8%] opacity-0 duration-1000 ease-in-out"
              }
            >
              {sentence}
            </p>
            <div className="scale-75 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div
                className={
                  loader2
                    ? "w-20 h-fit flex flex-col justify-center items-center gap-y-[4px] lining m-auto opacity-100 duration-1000 ease-in-out"
                    : "w-20 h-fit flex flex-col justify-center items-center gap-y-[4px] lining m-auto opacity-0 duration-1000 ease-in-out los"
                }
              >
                <div className="flex justify-center items-center gap-x-[4px]">
                  <div className="bg-purple w-[14px] h-[14px] box1 "></div>
                  <div className="bg-purple w-[14px] h-[14px] box2 "></div>
                </div>
                <div className="flex justify-center items-center gap-x-[4px]">
                  <div className="bg-purple w-[14px] h-[14px] box3 "></div>
                  <div className="bg-purple w-[14px] h-[14px] box4 "></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoadingScreen;
