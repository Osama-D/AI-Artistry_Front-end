import React, { useState } from "react";
import Head from "next/head";

import NavBar from "@/components/01-commoncomponents/NavBar";
import GenerateStunningImages from "@/components/03-generatepage/GenerateStunningImages/GenerateStunningImages";
import Footer from "@/components/01-commoncomponents/Footer";
import GenerateForm from "@/components/03-generatepage/GenerateStunningImages/GenerateForm";
import RecentlySharedImages from "@/components/03-generatepage/RecentelySharedImages/RecentlySharedImages";
import RecentlySharedPosts from "@/components/03-generatepage/RecentelySharedImages/RecentlySharedPosts";

function generate({ data }) {
  const [recentPosts, setRecentPosts] = useState([]);

  return (
    <>
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>
          AI-Artistry Image Generator - Generate Unique AI-Generated Images
        </title>
        <meta
          name="title"
          content="AI-Artistry Image Generator - Generate Unique AI-Generated Images"
        />
        <meta
          name="description"
          content="Unleash your imagination and create unique AI-generated images with AI-Artistry's Image Generator. Simply input keywords and let my AI do the rest. Explore the limitless possibilities of AI-generated art and discover a new world of creativity. Start generating your own unique images now with AI-Artistry."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://ai-artistry.vercel.app/generate"
        />
        <meta
          property="og:title"
          content="AI-Artistry Image Generator - Generate Unique AI-Generated Images"
        />
        <meta
          property="og:description"
          content="Unleash your imagination and create unique AI-generated images with AI-Artistry's Image Generator. Simply input keywords and let my AI do the rest. Explore the limitless possibilities of AI-generated art and discover a new world of creativity. Start generating your own unique images now with AI-Artistry."
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
          content="https://ai-artistry.vercel.app/generate"
        />
        <meta
          property="twitter:title"
          content="AI-Artistry Image Generator - Generate Unique AI-Generated Images"
        />
        <meta
          property="twitter:description"
          content="Unleash your imagination and create unique AI-generated images with AI-Artistry's Image Generator. Simply input keywords and let my AI do the rest. Explore the limitless possibilities of AI-generated art and discover a new world of creativity. Start generating your own unique images now with AI-Artistry."
        />
        <meta
          property="twitter:image"
          content="https://ai-artistry.vercel.app/images/ogImage.png"
        />
        <meta name="author" content="Osama Daimallah" />
      </Head>
      <div className="overflow-hidden font-ralewayR">
        <NavBar />
        <div className="relative gap-y-[150px] sm:gap-y-[150px] md:gap-y-[150px] flex flex-col">
          <div className="flex flex-col gap-y-[120px] sm:gap-y-[150px] md:gap-y-[180px]">
            <div className="relative flex flex-col gap-y-[70px] sm:gap-y-[80px] md:gap-y-[100px]">
              <GenerateStunningImages />
              <div>
                <GenerateForm setRecentPosts={setRecentPosts} />
              </div>
            </div>
            <div className="flex flex-col gap-y-[70px] sm:gap-y-[80px] md:gap-y-[100px]">
              <RecentlySharedImages />
              <RecentlySharedPosts
                recentPosts={recentPosts}
                setRecentPosts={setRecentPosts}
                data={data}
              />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default generate;

// This gets called on every request
export async function getServerSideProps() {
  const response = await fetch(
    "https://ai-artistry-backend.cyclic.app/api/v1/posts/recent"
  );
  const data = await response.json();

  // Pass data to the page via props
  return { props: data };
}
