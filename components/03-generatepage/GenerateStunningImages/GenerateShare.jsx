import React, { useState, useEffect } from "react";

function GenerateShare({ form, loading, setRecentPosts }) {
  const [shareloading, setShareLoading] = useState(false);
  const [active, setActive] = useState(false);

  function handleSubmit() {
    // if everything is valid start sharing
    if (form.prompt && form.photo && form.name) {
      setShareLoading(true);

      fetch("https://ai-artistry-backend.cyclic.app/api/v1/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      })
        .then((res) => res.json())
        .then((data) => {
          // once you shared the desired image put in the state so it gets added instantly in your state (without refreshing the page)
          setRecentPosts((prevPosts) => [data.data, ...prevPosts]);
        })
        .catch((error) => {
          console.log("error", error);
          alert("An error has occurred! Please try again later.");
        })
        .finally(() => {
          // return everything to it's initial state
          setShareLoading(false);
        });
    }
  }

  useEffect(() => {
    // you only can share it with the community if everything is valid
    if (form.name && form.prompt && form.photo && !loading) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [form]);

  return (
    <div>
      <div className="lining m-auto">
        <div className="bg-purple/[50%] w-full lg:w-[80%] h-fit sm:h-[75px] md:h-[100px] flex justify-start items-center px-8 sm:px-[36px] md:px-[50px] lg:px-[64px] text-gray font-ralewayR uppercase">
          <p className="main-paragraph-size py-[22px] sm:py-0">
            Once you&apos;ve generated the desired image, you can share it with
            the community.
          </p>
        </div>
        {/* button */}
        <div
          onClick={handleSubmit}
          className={
            active && !shareloading
              ? "opacity-100 duration-700 ease-in-out my-[25px] sm:my-[35px] md:my-[50px] group flex justify-start items-center max-w-fit"
              : "opacity-50 pointer-events-none duration-700 ease-in-out my-[25px] sm:my-[35px] md:my-[50px] group flex justify-start items-center max-w-fit"
          }
        >
          <button
            aria-label="Share"
            className="border-l-[0.5px] border-t-[0.5px] border-b-[0.5px] border-purple flex-1 w-[180px] sm:w-[240px] md:w-[330px] generate-page-generate-buttons input-sizes uppercase"
          >
            {shareloading ? "Sharing..." : "Share"}
          </button>
          <button
            aria-label="Share"
            className="group border-r-[0.5px] border-t-[0.5px] border-b-[0.5px] input-sizes border-white  w-[50px] sm:w-[70px] md:w-[100px] flex justify-center items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 7 7"
              fill="none"
              className={
                shareloading
                  ? "w-[10px] h-[10px] sm:w-[15px] sm:h-[15px] md:w-[18px] md:h-[18px] lg:w-[21px] lg:h-[21px]  rotate-[-44.8deg] duration-300 ease-in-out"
                  : "w-[10px] h-[10px] sm:w-[15px] sm:h-[15px] md:w-[18px] md:h-[18px] lg:w-[21px] lg:h-[21px]  group-hover:rotate-[-44.8deg] duration-300 ease-in-out"
              }
            >
              <path
                d="M0.7 6.50001L0 5.80001L4.8 1H0.5V0H6.5V6.00001H5.5V1.7L0.7 6.50001Z"
                fill="#DEDEDE"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default GenerateShare;
