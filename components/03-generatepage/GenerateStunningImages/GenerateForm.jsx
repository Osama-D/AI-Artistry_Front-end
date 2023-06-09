import React, { useState } from "react";
import Image from "next/image";

import Loading from "@/components/02-homepage/ShowCaseSection/Loading";
import GeneratePattern from "./GeneratePattern";
import GenerateShare from "./GenerateShare";

function GenerateForm({ setRecentPosts }) {
  const [serverMessages, setServerMessages] = useState(false);
  const [serverErrorMessages, setServerErrorMessages] = useState(false);

  const [nameError, setNameError] = useState(false);
  const [promptError, setPromptError] = useState(false);
  const [nameSuccess, setNameSuccess] = useState(false);
  const [promptSuccess, setPromptSuccess] = useState(false);

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
    pinned: false,
  });

  async function handleSubmit(e) {
    e.preventDefault();
    if (form.name && form.prompt) {
      setLoading(true);
      setNameError(false);
      setNameSuccess(true);
      setPromptError(false);
      setPromptSuccess(true);
      try {
        // display message that your prompts has been approved
        // and that your image is in the process of generating
        setTimeout(() => {
          setServerMessages(true);
        }, 500);
        setTimeout(() => {
          setServerMessages(false);
        }, 4000);
        window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
        const response = await fetch(
          "https://ai-artistry-backend.cyclic.app/api/v1/dalle",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ prompt: form.prompt }),
          }
        );
        const data = await response.json();
        setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` });
      } catch (error) {
        // display error message that your prompts has been declined
        window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
        setTimeout(() => {
          setServerErrorMessages(true);
        }, 500);
        setTimeout(() => {
          setServerErrorMessages(false);
        }, 4000);
      } finally {
        // return everything to it's initial state
        setLoading(false);

        setNameError(false);
        setNameSuccess(true);
        setPromptError(false);
        setPromptSuccess(true);
      }
    } else if (!form.name && !form.prompt) {
      setNameError(true);
      setNameSuccess(false);
      setPromptError(true);
      setPromptSuccess(false);

      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    } else if (form.name && !form.prompt) {
      setNameError(false);
      setNameSuccess(true);
      setPromptError(true);
      setPromptSuccess(false);
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    } else if (!form.name && form.prompt) {
      setNameError(true);
      setNameSuccess(false);
      setPromptError(false);
      setPromptSuccess(true);
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  }

  // to preview your generated image
  function handleClick() {
    const newTab = window.open();

    newTab?.document.write(
      `<!DOCTYPE html><head><title>Generated Image Preview</title></head><body><img src="${form.photo}" width="100%" height="100%" ></body></html>`
    );

    newTab?.document.close();
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="relative lining m-auto">
        <div className="w-full lg:w-[80%] flex flex-col gap-y-[15px] sm:gap-y-[20px] md:gap-y-[30px]">
          {/* name input */}
          <div className="pl-[25px] sm:pl-[35px] md:pl-[50px] lg:pl-[65px] main-paragraph-size w-full border-[0.5px] border-purple flex justify-between items-center">
            <input
              onChange={handleChange}
              value={form.name}
              name="name"
              autoComplete="on"
              className="input-sizes placeholder:text-gray text-white w-full outline-none bg-transparent pr-8"
              type="text"
              placeholder="Share your name with us..."
              maxLength={12}
            />
            {/* success/error icon */}
            <div
              className={
                nameSuccess || nameError
                  ? "mr-4 opacity-100 duration-700 ease-in-out pointer-events-none sm:mr-6 md:mr-8 flex-none border-[0.5px] border-purple w-[24px] h-[24px] sm:w-[30px] sm:h-[30px]  md:w-[40px] md:h-[40px] flex justify-center items-center"
                  : "mr-4 opacity-0 flex duration-700 ease-in-out pointer-events-none sm:mr-6 md:mr-8 flex-none border-[0.5px] border-purple w-[24px] h-[24px] sm:w-[30px] sm:h-[30px]  md:w-[40px] md:h-[40px] justify-center items-center"
              }
            >
              {nameError ? (
                <svg
                  viewBox="0 0 2 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[2px] h-[8px] sm:w-[2px] sm:h-[11px] md:w-[2px] md:h-[13px]"
                >
                  <path
                    d="M0 0H2V9.1H0V0ZM0 10.4H2V13H0V10.4Z"
                    fill="#8832D5"
                  />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 13 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[8px] h-[7px] sm:w-[10px] sm:h-[9px] md:w-[13px] md:h-[11px]"
                >
                  <path
                    d="M13 0.946309L4.08571 9L0 5.30872L1.04743 4.36242L4.08571 7.10067L11.9526 0L13 0.946309Z"
                    fill="#8832D5"
                  />
                </svg>
              )}
            </div>
          </div>
          {/* prompt input */}
          <div className="pl-[25px] sm:pl-[35px] md:pl-[50px] lg:pl-[65px] main-paragraph-size w-full border-[0.5px] border-purple flex justify-between items-center">
            <input
              value={form.prompt}
              onChange={handleChange}
              name="prompt"
              className="input-sizes placeholder:text-gray text-white w-full outline-none bg-transparent pr-8"
              type="text"
              placeholder="Ery beautiful goddess, standing hollow, resembles something like..."
              maxLength={450}
            />
            {/* success/error icon */}
            <div
              className={
                promptSuccess || promptError
                  ? "mr-4 opacity-100 duration-700 ease-in-out pointer-events-none sm:mr-6 md:mr-8 flex-none border-[0.5px] border-purple w-[24px] h-[24px] sm:w-[30px] sm:h-[30px]  md:w-[40px] md:h-[40px] flex justify-center items-center"
                  : "mr-4 opacity-0 duration-700 ease-in-out pointer-events-none sm:mr-6 md:mr-8 flex-none border-[0.5px] border-purple w-[24px] h-[24px] sm:w-[30px] sm:h-[30px]  md:w-[40px] md:h-[40px] flex justify-center items-center"
              }
            >
              {promptError ? (
                <svg
                  viewBox="0 0 2 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[2px] h-[8px] sm:w-[2px] sm:h-[11px] md:w-[2px] md:h-[13px]"
                >
                  <path
                    d="M0 0H2V9.1H0V0ZM0 10.4H2V13H0V10.4Z"
                    fill="#8832D5"
                  />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 13 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[8px] h-[7px] sm:w-[10px] sm:h-[9px] md:w-[13px] md:h-[11px]"
                >
                  <path
                    d="M13 0.946309L4.08571 9L0 5.30872L1.04743 4.36242L4.08571 7.10067L11.9526 0L13 0.946309Z"
                    fill="#8832D5"
                  />
                </svg>
              )}
            </div>
          </div>
          {/* generated image */}
          <div className="relative w-full h-[250px] sm:h-[300px] md:h-[500px] border-[0.5px] border-purple flex justify-center items-center">
            {form.photo ? (
              <>
                {/* Image */}
                <Image
                  className="opacity-100 pointer-events-none duration-700 ease-in-out"
                  src={form.photo}
                  alt={form.prompt}
                  objectFit="cover"
                  layout={"fill"}
                  unoptimized
                  priority
                />
                {/* loading */}
                <div
                  className={
                    loading
                      ? "absolute opacity-100 duration-700 ease-in-out pointer-events-none bg-brown/[65%] backdrop-blur-[5px] w-full h-[100%] flex justify-center items-center"
                      : "absolute opacity-0 duration-700 ease-in-out pointer-events-none bg-brown/[65%] backdrop-blur-[5px] w-full h-[100%] flex justify-center items-center"
                  }
                >
                  <Loading />
                </div>
                {/* preview button */}
                <div
                  onClick={handleClick}
                  className="cursor-pointer flex justify-center items-center absolute bottom-0 overflow-hidden right-0 mr-4 sm:mr-6 md:mr-8 mb-4 sm:mb-6 md:mb-8 bg-brown w-[24px] h-[24px] sm:w-[30px] sm:h-[30px]  md:w-[40px] md:h-[40px]"
                >
                  <div className="bg-purple w-[8px] h-[8px] sm:w-[12px] sm:h-[12px]  hover:w-[50px] hover:h-[50px] duration-700 ease-in-out md:w-[50%] md:h-[50%] m-auto "></div>
                </div>
              </>
            ) : (
              <>
                {/* placeholder icon */}
                <div>
                  <svg
                    width="139"
                    height="76"
                    viewBox="0 0 139 76"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className=" scale-50 sm:scale-75 md:scale-100"
                  >
                    <path
                      d="M82.0079 0L58.3518 31.6667L76.3305 55.7333L66.2372 63.3333C55.5762 49.0833 37.8498 25.3333 37.8498 25.3333L0 76H138.783L82.0079 0Z"
                      fill="#2E2C30"
                    />
                  </svg>
                </div>
                {/* loading */}
                <div
                  className={
                    loading
                      ? "opacity-100 duration-700 ease-in-out pointer-events-none absolute bg-brown/[65%] backdrop-blur-[5px] w-full h-[99%] flex justify-center items-center"
                      : "opacity-0 duration-700 ease-in-out pointer-events-none absolute bg-brown/[65%] backdrop-blur-[5px] w-full h-[99%] flex justify-center items-center"
                  }
                >
                  <Loading />
                </div>
              </>
            )}
          </div>
        </div>
        {/* submit button */}
        <div
          className={
            loading
              ? "opacity-50 pointer-events-none duration-700 ease-in-out my-[30px] sm:my-[40px] md:my-[70px] group flex justify-start items-center max-w-fit"
              : "opacity-100 duration-700 ease-in-out my-[30px] sm:my-[40px] md:my-[70px] group flex justify-start items-center max-w-fit"
          }
        >
          <button
            type="submit"
            aria-label="Generate"
            className="border-l-[0.5px] border-t-[0.5px] border-b-[0.5px] border-purple flex-1  w-[180px] sm:w-[240px] md:w-[330px] generate-page-generate-buttons input-sizes uppercase"
          >
            {loading ? "Generating..." : "Generate"}
          </button>
          <button
            type="submit"
            aria-label="Generate"
            className="group border-r-[0.5px] border-t-[0.5px] border-b-[0.5px] input-sizes border-white w-[50px] sm:w-[70px] md:w-[100px] flex justify-center items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 7 7"
              fill="none"
              className={
                loading
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
        {/* generate pattern - (on the right) */}
        <GeneratePattern />
      </form>

      {/* in process message */}
      <div
        className={
          serverMessages
            ? "fixed lg:max-w-[700px] w-full duration-700 ease-in-out opacity-100 pointer-events-none z-20 top-0 lg:top-10 left-1/2 -translate-x-1/2 bg-purple"
            : "fixed lg:max-w-[700px] w-full duration-700 ease-in-out opacity-0 pointer-events-none z-20 -top-10 lg:-top-10 left-1/2 -translate-x-1/2 bg-purple"
        }
      >
        <div className="w-full m-auto  h-fit sm:h-[75px] md:h-[100px] flex justify-center items-center text-center px-4 text-white font-ralewayR uppercase">
          <p className="main-paragraph-size py-[22px] sm:py-0">
            Kindly hold on as your image is in the process of being generated.{" "}
          </p>
        </div>
      </div>
      {/* error message */}
      <div
        className={
          serverErrorMessages
            ? "fixed lg:max-w-[700px] w-full duration-700 ease-in-out opacity-100 pointer-events-none z-20 top-0 lg:top-10 left-1/2 -translate-x-1/2 bg-purple"
            : "fixed lg:max-w-[700px] w-full duration-700 ease-in-out opacity-0 pointer-events-none z-20 -top-10 lg:-top-10 left-1/2 -translate-x-1/2 bg-purple"
        }
      >
        <div className="w-full m-auto  h-fit sm:h-[75px] md:h-[100px] flex justify-center items-center text-center px-4 text-white font-ralewayR uppercase">
          <p className="main-paragraph-size py-[22px] sm:py-0">
            An error has been accured please try again later.
          </p>
        </div>
      </div>

      {/* share generated image */}
      <GenerateShare
        setRecentPosts={setRecentPosts}
        loading={loading}
        form={form}
      />
    </div>
  );
}

export default GenerateForm;
