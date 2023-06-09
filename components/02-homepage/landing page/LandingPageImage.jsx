import Image from "next/image";
import React from "react";

function LandingPageImage() {
  return (
    <div className="h-full w-full">
      <div className="absolute -z-10 top-0 -right-0 sm:right-[10%] md:right-[17%] lg:-right-[-28%] xl:-right-[-38%] translate-x-1/2 max-w-[197%] sm:max-w-[142%] md:max-w-[127%] w-[1600px] h-[1070px]">
        <Image
          className="object-top"
          src="/images/landing page background1.jpg"
          alt="AI-Artistry"
          objectFit="contain"
          layout="fill"
          unoptimized={true}
          priority
        />
      </div>
    </div>
  );
}

export default LandingPageImage;
