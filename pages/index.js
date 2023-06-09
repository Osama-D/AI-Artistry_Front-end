import React from "react";
import Head from "next/head";

import LandingPage from "@/components/02-homepage/landing page/LandingPage";
import Showcase from "@/components/02-homepage/ShowCaseSection/Showcase";
import Footer from "@/components/01-commoncomponents/Footer";
import PopUp from "@/components/05-popup/PopUp";

function Home({ data }) {
  return (
    <>
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>
          AI-Artistry - The Ultimate Platform for AI-Generated Image Creation
          and Exploration
        </title>
        <meta
          name="title"
          content="AI-Artistry - The Ultimate Platform for AI-Generated Image Creation and Exploration"
        />
        <meta
          name="description"
          content="Experience the next level of image creation with AI-Artistry. An AI-powered platform that allows you to generate unique images by simply inputting keywords. Showcase your creativity to the world by sharing your generated images in our platform's showcase feature. Explore the limitless possibilities of AI-generated images with AI-Artistry - the ultimate platform for AI-generated image creation and exploration. Discover the power of AI-generated art today."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ai-artistry.vercel.app/" />
        <meta
          property="og:title"
          content="AI-Artistry - The Ultimate Platform for AI-Generated Image Creation and Exploration"
        />
        <meta
          property="og:description"
          content="Experience the next level of image creation with AI-Artistry. An AI-powered platform that allows you to generate unique images by simply inputting keywords. Showcase your creativity to the world by sharing your generated images in our platform's showcase feature. Explore the limitless possibilities of AI-generated images with AI-Artistry - the ultimate platform for AI-generated image creation and exploration. Discover the power of AI-generated art today."
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
          content="https://ai-artistry.vercel.app/"
        />
        <meta
          property="twitter:title"
          content="AI-Artistry - The Ultimate Platform for AI-Generated Image Creation and Exploration"
        />
        <meta
          property="twitter:description"
          content="Experience the next level of image creation with AI-Artistry. An AI-powered platform that allows you to generate unique images by simply inputting keywords. Showcase your creativity to the world by sharing your generated images in our platform's showcase feature. Explore the limitless possibilities of AI-generated images with AI-Artistry - the ultimate platform for AI-generated image creation and exploration. Discover the power of AI-generated art today."
        />
        <meta
          property="twitter:image"
          content="https://ai-artistry.vercel.app/images/ogImage.png"
        />

        <meta property="og:site_name" content="AI-Artistry" />
        <meta name="author" content="Osama Daimallah" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="gap-y-[150px] sm:gap-y-[150px] md:gap-y-[150px] flex flex-col font-ralewayR">
        <LandingPage />
        <Showcase data={data} />
        <Footer />
      </div>
      {/* purple square popUp */}
      <PopUp />
    </>
  );
}

export default Home;

// This gets called on every request
export async function getServerSideProps() {
  const response = await fetch(
    `https://ai-artistry-backend.cyclic.app/api/v1/posts`
  );
  const data = await response.json();

  // Pass combined data to the page via props
  return { props: data };
}
