import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import Loading from "./Loading";
import NoPosts from "./NoPosts";
import Posts from "./Posts";
import Search from "./Search";

function Showcase({ data }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [loading, setLoading] = useState(true);

  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: false,
  });
  const [debounceTimeout, setDebounceTimeout] = useState(null);

  // when page is loaded setState to data
  useEffect(() => {
    setPosts(data.documents);
  }, [data]);

  console.log("home posts 1", data);
  console.log("home posts", posts);

  // each time user see the loader the page will jump +1
  useEffect(() => {
    if (inView && !isFetching && posts.length >= 8) {
      setPage((prev) => prev + 1);
    }
  }, [inView]);

  // if user write something page will jump to 1 and posts state will be empty
  useEffect(() => {
    if (searchQuery.length >= 1) {
      setPage(1);
      setPosts([]);
      return () => {
        setPage(1);
        setPosts([]);
      };
    }
  }, [searchQuery]);

  // each time user write something EACH SECOND it will make an api call starting from page 1
  useEffect(() => {
    clearTimeout(debounceTimeout);
    setDebounceTimeout(
      setTimeout(() => {
        if (page > 1 || searchQuery) {
          if (isFetching) return;
          setIsFetching(true);
          fetch(
            `https://ai-artistry-backend.cyclic.app/api/v1/posts/?page=${page}&search=${searchQuery}`
          )
            .then((res) => res.json())
            .then((data) => {
              setPosts((prevPosts) => [...prevPosts, ...data?.data?.documents]);

              // if no data set loaders to false
              if (data?.data?.documents.length === 0) {
                setLoading(false);
              }

              // if we retrieved all data hide loader
              if (data?.data?.documents.length === data?.data?.total) {
                setLoading(false);
              }

              console.log("home posts vvvvvvvvvv", data);
              console.log("home posts vvvvvvvvvv1", posts);
            })
            .catch((error) => console.error(error))
            .finally(() => setIsFetching(false));
        } else {
          setPage(1);
          setPosts(data.documents);
          setLoading(true);
          setIsFetching(false);
        }
      }, 1000)
    );
  }, [page, searchQuery]);

  // if we retrieved all data don't show loader
  useEffect(() => {
    if (posts?.length === data?.total) {
      setLoading(false);
    }
  }, [posts]);
  console.log("isfetching", isFetching);

  return (
    <div className="lining m-auto flex flex-col gap-y-[70px] sm:gap-y-[80px] md:gap-y-[150px]">
      <Search
        setPage={setPage}
        setLoading={setLoading}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <div>
        <Posts posts={posts} searchQuery={searchQuery} />

        {/* if no posts show not found */}
        {!posts?.length && !isFetching && !loading && <NoPosts />}

        {/* one loading when there is posts and one loading when searching for posts (no posts) */}
        {!posts?.length ? (
          <div
            className={
              loading || isFetching
                ? "mt-[150px] mb-[250px] sm:mb-[230px] sm:mt-[170px] md:mb-[200px] md:mt-[150px] xl:mb-[150px] xl:mt-[150px]"
                : "hidden"
            }
            ref={ref}
          >
            <Loading />
          </div>
        ) : (
          <div
            className={
              loading || isFetching
                ? "mt-[70px] sm:mt-[80px] md:mt-[150px]"
                : "hidden"
            }
            ref={ref}
          >
            <Loading />
          </div>
        )}
      </div>
    </div>
  );
}

export default Showcase;
