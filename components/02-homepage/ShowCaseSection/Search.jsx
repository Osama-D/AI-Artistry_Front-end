import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

function Search({ setLoading, searchQuery, setSearchQuery }) {
  const [highlight, setHighlight] = useState(false);
  const onChange = (e) => {
    setSearchQuery(e.target.value);
    setLoading(true);
    if (e.target.value.length !== 0) {
      setHighlight(true);
    } else {
      setHighlight(false);
    }
  };

  // Reset the state if routeChanged
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = () => {
      // Reset the state of your components here
      setSearchQuery("");
    };
    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router]);

  return (
    <div>
      <div className="font-ralewayR first-letter:uppercase main-paragraph-size text-white flex justify-between items-center border-[0.5px] border-purple px-[25px] sm:px-[35px] md:px-[65px] mx-0 lg:mx-[9%]">
        <input
          onChange={onChange}
          value={searchQuery}
          className="w-full inline-block placeholder:text-gray max-w-full input-sizes bg-transparent  outline-none pr-8"
          type="text"
          placeholder="Search for AI-powered images..."
        />
        <div className="cursor pointer relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 31 31"
            fill="none"
            className="w-[16px] h-[16px] sm:w-[22px] sm:h-[22px] md:w-[31px] md:h-[31px]"
          >
            <path
              d="M14.9054 27.0883C21.6609 27.0883 27.1373 21.6119 27.1373 14.8564C27.1373 8.1009 21.6609 2.62451 14.9054 2.62451C8.14991 2.62451 2.67352 8.1009 2.67352 14.8564C2.67352 21.6119 8.14991 27.0883 14.9054 27.0883Z"
              stroke={highlight ? "#DEDEDE" : "#A0A0A0"}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M28.4249 28.3757L25.8497 25.8005"
              stroke={highlight ? "#DEDEDE" : "#A0A0A0"}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Search;
