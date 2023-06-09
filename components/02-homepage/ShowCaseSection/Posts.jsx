import React from "react";
import Image from "next/image";
import FileSaver from "file-saver";
import moment from "moment";

function Posts({ posts, searchQuery }) {
  // download logic
  function downloadImage($id, photo) {
    const httpsUrl = photo.replace("http://", "https://");
    FileSaver.saveAs(httpsUrl, `download-${$id}.jpg`);
  }

  // Filter out duplicate posts to ensure uniquePosts contains only one instance of each post
  const uniquePosts = posts.filter(
    (post, index) => posts.findIndex((p) => p.$id === post.$id) === index
  );
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[23px] sm:gap-[27px] md:gap-[37px] w-full">
        {uniquePosts.map((post, idx) => {
          return (
            <div
              key={idx}
              className="w-full h-[250px] sm:h-[300px] md:h-[450px] relative"
            >
              {/* pin those who have pinned === true and not in search Mode */}
              {post?.pinned && !searchQuery ? (
                <div className="bg-purple w-[8px] h-[8px] md:w-[10px] md:h-[10px] absolute z-20 top-0 left-0 -translate-y-1/2 -translate-x-1/2">
                  <div className="relative w-[8px] h-[8px] md:w-[10px] md:h-[10px]">
                    <div className="border-purple border-[0.5px] w-[17px] h-[17px] md:w-[22px] md:h-[22px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"></div>
                  </div>
                </div>
              ) : null}
              <div className="overflow-hidden w-full h-[250px] sm:h-[300px] md:h-[450px] group relative">
                <Image
                  className={
                    idx === 0
                      ? "pointer-events-none md:object-[67%] bg-[#252328] duration-700 ease-in-out"
                      : "pointer-events-none bg-[#252328] duration-700 ease-in-out"
                  }
                  src={post?.photo}
                  alt={post?.prompt}
                  objectFit="cover"
                  layout={"fill"}
                  unoptimized={true}
                  loading="lazy"
                  sizes="(min-width: 66em) 33vw,
                    (min-width: 44em) 50vw,
                    100vw"
                />
                {/* detail box */}
                <div className="group">
                  <div className="z-30 absolute bottom-0 bg-purple/[80%] backdrop-blur-[5px] font-ralewayR left-1/2 -translate-x-1/2 w-[calc(100%-28px)] h-fit mb-[14px] translate-y-[30%] opacity-0 group-hover:opacity-100 group-hover:translate-y-0 duration-700 ease-in-out">
                    <div className="px-[17px] pt-[17px] pb-[30px] text-gray">
                      <div className=" text-white/70 flex flex-col justify-start items-start gap-y-[11px]">
                        <div className="w-full flex justify-between items-center gap-x-[30px]">
                          <div className="bg-brown py-4 w-fit px-6 h-[26px] flex justify-center items-center">
                            <div className="user-name capitalize line-clamp-1 break-all">
                              {post?.name}
                            </div>
                          </div>
                          <div className="user-name text-white/60 line-clamp-1 break-all">
                            {moment(post?.$createdAt)
                              .fromNow()
                              .replace("hours", "Hrs")
                              .replace("seconds", "Secs")
                              .replace("minutes", "Mins")}
                          </div>
                        </div>
                        <div className="max-h-[100px] break-words w-full overflow-y-auto post-paragraph-size customize-scroll-bar">
                          {post?.prompt}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* download box */}
                  <div
                    onClick={() => downloadImage(post?.$id, post?.photo)}
                    className="z-40 absolute bottom-0 right-0 translate-y-full opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 duration-1000 ease-in-out"
                  >
                    <div className="download bg-brown w-[40px] h-[40px] flex justify-center items-center cursor-pointer download-box-shadow ">
                      <svg
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="duration-700 ease-in-out"
                      >
                        <path
                          d="M5.24248 10.9167L8.0708 13.75M8.0708 13.75L10.8991 10.9167M8.0708 13.75V7.375M13.7274 10.7345C14.5911 10.0199 15.1416 8.93893 15.1416 7.72917C15.1416 5.57755 13.4005 3.83333 11.2527 3.83333C11.0982 3.83333 10.9536 3.75258 10.8751 3.61923C9.95312 2.05176 8.25068 1 6.3031 1C3.37428 1 1 3.37848 1 6.3125C1 7.77599 1.59073 9.10128 2.54635 10.0621"
                          stroke="#A0A0A0"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Posts;
