import React from "react";

function RecentlySharedImages() {
  return (
    <div>
      <div className="lining m-auto">
        <div className="flex flex-col lg:flex-row justify-start items-start w-full lg:w-[80%] lg:gap-x-[70px] gap-y-[6px] sm:gap-y-[8px] lg:gap-y-0">
          <h2 className="break-normal lg:break-all xl:break-normal main-title-size font-syncopateL uppercase">
            Recently shared images
          </h2>
          <p className="main-paragraph-size text-gray">
            Explore a vast collection of user-generated images from around the
            world.
          </p>
        </div>
      </div>
    </div>
  );
}

export default RecentlySharedImages;
