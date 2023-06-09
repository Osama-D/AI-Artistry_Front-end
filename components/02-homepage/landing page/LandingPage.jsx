import React, { useState } from "react";

import NavBar from "@/components/01-commoncomponents/NavBar";
import ClickedSlider from "./ClickedSlider";
import LandingPageImage from "./LandingPageImage";
import MainContent from "./MainContent";
import Slider from "./Slider";

function LandingPage() {
  const [sliderPopUp, setSliderPopUp] = useState(false);
  const [my_swiper, set_my_swiper] = useState({});

  return (
    <div>
      <div className="overflow-hidden">
        <NavBar />
        <LandingPageImage />
        <MainContent />
        <Slider my_swiper={my_swiper} setSliderPopUp={setSliderPopUp} />
        <ClickedSlider
          set_my_swiper={set_my_swiper}
          setSliderPopUp={setSliderPopUp}
          sliderPopUp={sliderPopUp}
        />
      </div>
    </div>
  );
}

export default LandingPage;
