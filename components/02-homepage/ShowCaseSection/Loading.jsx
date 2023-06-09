import React from "react";

function Loading() {
  return (
    <div className="w-20 h-fit flex flex-col justify-center items-center gap-y-[2.5px] sm:gap-y-[3px] md:gap-y-[4px] lining m-auto">
      <div className="flex justify-center items-center gap-x-[2.5px] sm:gap-x-[3px] md:gap-x-[4px]">
        <div className="bg-purple w-[9px] h-[9px] sm:w-[10px] sm:h-[10px] md:w-[14px] md:h-[14px] box1"></div>
        <div className="bg-purple w-[9px] h-[9px] sm:w-[10px] sm:h-[10px] md:w-[14px] md:h-[14px] box2"></div>
      </div>
      <div className="flex justify-center items-center gap-x-[2.5px] sm:gap-x-[3px] md:gap-x-[4px]">
        <div className="bg-purple w-[9px] h-[9px] sm:w-[10px] sm:h-[10px] md:w-[14px] md:h-[14px] box3"></div>
        <div className="bg-purple w-[9px] h-[9px] sm:w-[10px] sm:h-[10px] md:w-[14px] md:h-[14px] box4"></div>
      </div>
    </div>
  );
}

export default Loading;
