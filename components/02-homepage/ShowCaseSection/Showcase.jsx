import React, { useState } from "react";

import Loading from "./Loading";
import NoPosts from "./NoPosts";
import Posts from "./Posts";
import Search from "./Search";
import useGalleryPages from "./useGalleryPages";

function GalleryResults({ data, searchQuery }) {
  const [posts, setPosts] = useState(() => searchQuery ? [] : data?.documents ?? []);
  const { ref, hasMore, error, retryLoading } = useGalleryPages({
    data,
    endpoint: "/api/v1/posts",
    search: searchQuery,
    setPosts,
  });

  return (
    <div>
      <Posts posts={posts} searchQuery={searchQuery} />
      {!posts.length && !hasMore && <NoPosts />}
      {hasMore && (
        <div
          ref={ref}
          className={posts.length
            ? "mt-[70px] sm:mt-[80px] md:mt-[150px]"
            : "mt-[150px] mb-[250px] sm:mb-[230px] sm:mt-[170px] md:mb-[200px] md:mt-[150px] xl:mb-[150px] xl:mt-[150px]"}
        >
          {error ? (
            <button className="text-white" onClick={retryLoading}>Retry loading images</button>
          ) : <Loading />}
        </div>
      )}
    </div>
  );
}

function Showcase({ data }) {
  const [searchQuery, setSearchQuery] = useState("");
  const search = searchQuery.trim();

  return (
    <div className="lining m-auto flex flex-col gap-y-[70px] sm:gap-y-[80px] md:gap-y-[150px]">
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <GalleryResults key={search} data={data} searchQuery={search} />
    </div>
  );
}

export default Showcase;
